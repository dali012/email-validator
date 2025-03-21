"use server";

import { redis } from "@/lib/redis";
import { z } from "zod";

// Helper function to sanitize email
const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

// Helper for boolean schema
const Bool = () => z.boolean();

// Response type definitions
export type ApiSuccess = {
  success: boolean;
  result: {
    email: string;
    is_valid: boolean;
    score: number;
    checks: {
      syntax: boolean;
      mx_records: boolean;
      disposable: boolean;
      role_account: boolean;
      free_provider: boolean;
    };
  };
};

// Schema definitions
const emailValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email address is required",
      invalid_type_error: "Email must be a string",
    })
    .trim()
    .toLowerCase()
    .transform(sanitizeEmail),
});

// Success response schema
const successResponseSchema = z.object({
  success: Bool(),
  result: z.object({
    email: z.string(),
    is_valid: Bool(),
    score: z.number().min(0).max(1),
    checks: z.object({
      syntax: Bool(),
      mx_records: Bool(),
      disposable: Bool(),
      role_account: Bool(),
      free_provider: Bool(),
    }),
  }),
});

export const checkValidity = async ({
  email,
}: {
  email: string;
}): Promise<ApiSuccess> => {
  try {
    // Validate input with our schema
    const validatedInput = emailValidationSchema.parse({ email });

    const apiKey = process.env.EMAIL_VALIDATOR_API_KEY;
    const res = await fetch(
      `https://email-validator.dali012.me/api/validate?email=${validatedInput.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store",
      }
    );

    // Increment request counter
    await redis.incr("served-requests");

    // Handle HTTP errors by throwing instead of returning
    if (!res.ok) {
      const errorJson = await res.json();
      throw new Error(errorJson.error?.message || `API error: ${res.status}`);
    }

    const json = await res.json();

    // If API returns success: false, throw an error
    if (!json.success) {
      throw new Error(json.error?.message || "API validation failed");
    }

    // Validate response against success schema
    const validatedResponse = successResponseSchema.parse(json);
    return validatedResponse as ApiSuccess;
  } catch (error) {
    // Rethrow all errors to be caught by useMutation's onError
    if (error instanceof z.ZodError) {
      throw new Error(
        `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
      );
    }

    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

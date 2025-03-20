"use server";

import { redis } from "@/lib/redis";

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

type ApiError = {
  success: boolean;
  error: string;
};

export const checkValidity = async ({ email }: { email: string }) => {
  try {
    const apiKey = process.env.EMAIL_VALIDATOR_API_KEY;
    const res = await fetch(
      `https://email-validator.dali012.me/api/validate?email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey!,
        },
      }
    );

    await redis.incr("served-requests");

    const json = await res.json();

    if (!res.ok) {
      return json as ApiError;
    }
    return json as ApiSuccess;
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    } as ApiError;
  }
};

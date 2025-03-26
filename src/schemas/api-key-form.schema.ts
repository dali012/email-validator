import { z } from "zod";

export const apiKeyFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  name: z
    .string({
      message: "Name must be at least 3 characters",
    })
    .min(3),
  purpose: z
    .string({
      message: "Purpose must be at least 5 characters",
    })
    .min(5),
});

export type ApiKeyFormData = z.infer<typeof apiKeyFormSchema>;
export type FormFieldName = keyof ApiKeyFormData;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Form } from "./ui/form";
import {
  ApiKeyFormData,
  apiKeyFormSchema,
} from "@/schemas/api-key-form.schema";
import { useApiKeyFormSubmit } from "@/hooks/useApiKeyFormSubmit";
import { FormFieldComponent } from "./api-key-form/FormFields";
import { CaptchaVerification } from "./api-key-form/CaptchaVerification";

const ApiKeyForm = () => {
  const form = useForm<ApiKeyFormData>({
    resolver: zodResolver(apiKeyFormSchema),
    defaultValues: {
      email: "",
      name: "",
      purpose: "",
    },
  });

  const {
    formRef,
    isTurnstileValidated,
    setIsTurnstileValidated,
    handleSubmit,
  } = useApiKeyFormSubmit(form);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        ref={formRef}
        className="space-y-6"
      >
        <FormFieldComponent
          control={form.control}
          name="email"
          label="Email"
          placeholder="your@email.com"
        />

        <FormFieldComponent
          control={form.control}
          name="name"
          label="Name"
          placeholder="My Api Key"
        />

        <FormFieldComponent
          control={form.control}
          name="purpose"
          label="Purpose"
          placeholder="How will you use this API key?"
          isTextarea={true}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer bg-[#16A34A]"
          disabled={
            form.formState.isSubmitting ||
            !form.formState.isValid ||
            !isTurnstileValidated
          }
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            "Create API Key"
          )}
        </Button>

        <CaptchaVerification
          onSuccess={() => setIsTurnstileValidated(true)}
          onError={() => setIsTurnstileValidated(false)}
          onExpire={() => setIsTurnstileValidated(false)}
        />
      </form>
    </Form>
  );
};

export default ApiKeyForm;

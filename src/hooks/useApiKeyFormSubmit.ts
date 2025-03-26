import { ApiKeyFormData } from "@/schemas/api-key-form.schema";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

export const useApiKeyFormSubmit = (form: UseFormReturn<ApiKeyFormData>) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isTurnstileValidated, setIsTurnstileValidated] =
    useState<boolean>(false);

  const handleSubmit = async (values: ApiKeyFormData) => {
    try {
      const formData = new FormData(formRef.current!);
      const token = formData.get("cf-turnstile-response");

      if (!token) {
        toast.error("Please complete the CAPTCHA verification");
        return;
      }

      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "content-type": "application/json",
        },
      });

      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        toast.error("Failed to verify you are human. Please try again.");
        return;
      }

      const apiRes = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const apiData = await apiRes.json();

      if (!apiData.success) {
        toast.error(apiData.error?.message || "Failed to create API key");
        return;
      }

      form.reset();
      toast.success(
        "Please check your inbox and click the verification link to generate your API key."
      );
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.log(error);
    }
  };

  return {
    formRef,
    isTurnstileValidated,
    setIsTurnstileValidated,
    handleSubmit,
  };
};

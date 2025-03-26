import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";

interface CaptchaVerificationProps {
  onSuccess: () => void;
  onError: () => void;
  onExpire: () => void;
}

export const CaptchaVerification = ({
  onSuccess,
  onError,
  onExpire,
}: CaptchaVerificationProps) => (
  <Turnstile
    siteKey={process.env.NEXT_PUBLIC_SITE_KEY!}
    className=""
    options={{
      action: "generate-apikey-form",
      theme: "light",
      size: "flexible",
      language: "auto",
    }}
    onError={() => {
      onError();
      toast.error("CAPTCHA error occurred. Please try again.");
    }}
    onSuccess={onSuccess}
    onExpire={onExpire}
  />
);

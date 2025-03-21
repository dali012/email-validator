"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { checkValidity } from "@/actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { TypingAnimation } from "./magicui/typing-animation";

const Demo = () => {
  const [email, setEmail] = useState<string>("dali.jerbi97@gmail.com");

  const { data, mutate, isPending } = useMutation({
    mutationFn: checkValidity,
    onSuccess: () => {
      toast.success("Validated Successfully", {
        id: "check-validity",
      });
    },
    onError: ({ message }) => {
      toast.error(message || "An unknown error occurred", {
        id: "check-validity",
      });
    },
  });

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="relative w-full rounded-xl mt-12 bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-400/20">
              GET
            </span>
            <div className="h-[20px] w-px bg-zinc-300" />
            <p className="break-all">
              https://email-validator.dali012.me?email=
            </p>
          </div>
        </div>
        <div className="relative flex flex-col sm:flex-row items-center gap-2 mt-6 h-full sm:h-9">
          <Input
            className="bg-white h-9"
            value={email}
            onKeyDown={(e) => {
              if (e.key === "Enter") mutate({ email });
            }}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <Button
            disabled={isPending}
            className="cursor-pointer h-9 w-full sm:w-fit bg-[#16A34A] "
            onClick={() => mutate({ email })}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Validity check"
            )}
          </Button>
        </div>
        <div className="h-32 mt-4 rounded-lg border-2 border-dashed border-zinc-300 text-sm flex items-center justify-center">
          {data ? (
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <p className="font-bold mb-2">
                {data.result.is_valid ? (
                  <span className="text-green-600">✅ Valid Email Address</span>
                ) : (
                  <span className="text-red-600">❌ Invalid Email Address</span>
                )}
              </p>

              <p className="text-sm text-zinc-700 mb-2">
                Score: {data.result.score.toFixed(2)} (higher is better)
              </p>

              <div className="text-xs text-zinc-600 w-full grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="flex items-center justify-between pr-2">
                  <span>Syntax</span>
                  <span
                    className={
                      data.result.checks.syntax
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {data.result.checks.syntax ? "✓" : "✗"}
                  </span>
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span>MX Records</span>
                  <span
                    className={
                      data.result.checks.mx_records
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {data.result.checks.mx_records ? "✓" : "✗"}
                  </span>
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span>Not Disposable</span>
                  <span
                    className={
                      !data.result.checks.disposable
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {!data.result.checks.disposable ? "✓" : "✗"}
                  </span>
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span>Not Role Account</span>
                  <span
                    className={
                      !data.result.checks.role_account
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {!data.result.checks.role_account ? "✓" : "✗"}
                  </span>
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span>Free Provider</span>
                  <span
                    className={
                      !data.result.checks.free_provider
                        ? "text-red-500 font-medium"
                        : "text-green-500 font-medium"
                    }
                  >
                    {data.result.checks.free_provider ? "✓" : "✗"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              {isPending ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="ml-2">Validating...</span>
                </div>
              ) : (
                <TypingAnimation
                  className="text-zinc-700 text-sm"
                  startOnView
                  duration={70}
                >
                  Results will be shown here
                </TypingAnimation>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;

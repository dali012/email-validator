"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const CreateApiKey = () => {
  const formSchema = z.object({
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      purpose: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const validatedSchema = formSchema.safeParse(values);

    if (!validatedSchema.success) {
      form.reset();
      return toast.error(validatedSchema.error.errors[0].message);
    }

    const res = await fetch(
      "https://email-validator.dali012.me/api/keys/request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedSchema.data),
      }
    );

    const json = await res.json();

    if (!json.success) {
      form.reset();
      return toast.error(json.error.message);
    }

    form.reset();
    toast.success(
      "Please check your inbox and click the verification link to generate your API key."
    );
  };

  return (
    <div className="container max-w-2xl py-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create API Key</h1>
        <p className="text-muted-foreground mt-2">
          Fill out the form below to generate your API key for the Email
          Validator service.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      {...field}
                      required
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="My Api Key"
                      {...field}
                      required
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Purpose <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How will you use this API key?"
                      className="min-h-[80px]"
                      {...field}
                      required
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-[#16A34A]"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              "Create API Key"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateApiKey;

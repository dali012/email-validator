"use server";

import { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";

export async function POST(request: Request) {
  const { token } = await request.json();

  const res = await fetch(process.env.VERIFY_ENDPOINT!, {
    method: "POST",
    body: `secret=${encodeURIComponent(
      process.env.SECRET_KEY!
    )}&response=${encodeURIComponent(token)}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const data = (await res.json()) as TurnstileServerValidationResponse;

  return new Response(JSON.stringify(data), {
    status: data.success ? 200 : 400,
    headers: {
      "content-type": "application/json",
    },
  });
}

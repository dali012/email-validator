import Demo from "@/components/Demo";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { AnimatedCode } from "@/components/AnimatedCode";
import { redis } from "@/lib/redis";

const fontScary = localFont({
  src: "../assets/Scary.ttf",
});

export default async function Home() {
  const requests = await redis.get("served-requests");

  return (
    <div className="bg-blue-50 grainy-light">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start">
              <h1
                className={cn(
                  "relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl whitespace-nowrap"
                )}
              >
                EmailValidator
              </h1>

              <p className="mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap">
                Validating emails has always been{" "}
                <span
                  className={cn(
                    "font-scary font-bold text-[#16A34A]",
                    fontScary.className
                  )}
                >
                  time-consuming
                </span>{" "}
                and{" "}
                <span
                  className={cn(
                    "font-scary font-bold text-[#16A34A]",
                    fontScary.className
                  )}
                >
                  error-prone
                </span>
                . Not anymore. Introducing a fast, free and open-source email
                validator API for your web apps.
              </p>

              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> Much
                    faster and cheaper to run than AI
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> Pretty
                    accurate
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> 100%
                    free & open-source
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Image Description"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="/other-random-dude.jpg"
                    alt="Image Description"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="/random-stock-photo.jpg"
                    alt="Image Description"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-[#16A34A] fill-[#16A34A]" />
                    <Star className="h-4 w-4 text-[#16A34A] fill-[#16A34A]" />
                    <Star className="h-4 w-4 text-[#16A34A] fill-[#16A34A]" />
                    <Star className="h-4 w-4 text-[#16A34A] fill-[#16A34A]" />
                    <Star className="h-4 w-4 text-[#16A34A] fill-[#16A34A]" />
                  </div>
                  <p className="">
                    <span className="font-semibold">
                      {(Math.ceil(Number(requests) / 10) * 10).toLocaleString()}
                    </span>{" "}
                    API requests served{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20">
            <Image
              alt="try-it"
              aria-hidden="true"
              src="/try-it.png"
              width={160}
              height={80}
              className="absolute w-40 left-2/3 -top-2 select-none hidden sm:block"
            />
            <Demo />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <section className="bg-blue-100 grainy-dark px-4">
        <div className="mx-auto max-w-6xl gap-6 pb-24 pt-20 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="w-full flex flex-col">
            <div className="flex justify-center text-center">
              <h2 className="font-heading text-5xl lg:text-6xl font-bold leading-tight text-balance sm:leading-none tracking-tight">
                &quot;Invalid emails{" "}
                <span className="bg-[#16A34A] text-white font-scary px-3">
                  cr@sh!ng
                </span>{" "}
                applications&quot;
              </h2>
            </div>
            <p className="mx-auto mt-8 text-center text-sm max-w-xl">
              - every developer who&apos;s had to debug form submissions
            </p>
            <p className="text-center mx-auto mt-12 text-lg max-w-xl text-balance">
              <span className="font-semibold">
                Email validation is crucial for your application&apos;s success.
              </span>{" "}
              If you run a web app with any kind of user registration or contact
              forms, it&apos;s your responsibility to ensure valid
              communications. That&apos;s a challenge when users keep submitting
              invalid emails like they&apos;re testing your error handling.
            </p>
            <Icons.arrow className="h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none" />
            <p className="mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold">
              Stop invalid emails before they crash your app...
            </p>
            <div className="grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center">
              <div className="relative z-10">
                <div className="absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]">
                  <div className="absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t 0 from-blue-100 pointer-events-none"></div>
                  <Image
                    alt="shocked-emoji"
                    src="/shocked-emoji.png"
                    width={96} // equivalent to h-24 (24 * 4px)
                    height={96}
                    className="h-24 relative -z-10 select-none"
                  />
                </div>
                <p className="font-semibold text-lg">...leads to lost users</p>
                <p className="mt-2 text-balance">
                  Imagine your users trying to reset their passwords or receive
                  important notifications, but their invalid emails are causing
                  system errors. Not exactly a great user experience, is it?
                </p>
              </div>
              <div className="relative z-10">
                <div className="absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]">
                  <div className="absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none"></div>
                  <Image
                    alt="swear-emoji"
                    src="/swear-emoji.png"
                    width={96} // equivalent to h-24 (24 * 4px)
                    height={96}
                    className="h-24 relative -z-10 select-none"
                  />
                </div>
                <p className="font-semibold text-lg">
                  ...damages your system reliability
                </p>
                <p className="mt-2 text-balance">
                  Your users want to access their accounts and receive important
                  updates. Do you really want them to face{" "}
                  <span className="font-semibold text-[#16A34A]">
                    system crashes
                  </span>{" "}
                  because of invalid email formats?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="api" className="bg-blue-50 grainy-light">
        <div className="mx-auto max-w-6xl gap-6 pb-24 pt-10 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40">
          <h2 className="mx-auto text-balance text-5xl sm:text-6xl text-center font-bold leading-[4.25rem] tracking-tight max-w-2xl text-slate-900">
            There&apos;s a{" "}
            <span className="px-2 bg-[#16A34A] text-white">smarter</span> way
          </h2>

          <p className="text-center mx-auto mt-12 text-lg max-w-xl text-balance">
            <span className="font-semibold">
              Stop struggling with regex patterns!
            </span>{" "}
            Let EmailValidatorAPI handle the complexity of email validation for
            you.
          </p>

          <div className="relative mx-4 rounded-xl md:mx-auto max-w-4xl mt-12 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
            <AnimatedCode />
          </div>
        </div>
      </section>
    </div>
  );
}

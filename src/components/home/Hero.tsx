import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
import Demo from "@/components/Demo";

const fontScary = localFont({
  src: "../../assets/Scary.ttf",
});

interface HeroProps {
  requestsCount: unknown;
}

export const Hero = ({ requestsCount }: HeroProps) => {
  return (
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

            <FeatureList />
            <UsersStats requestsCount={requestsCount} />
          </div>
        </div>
        <DemoSection />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

const FeatureList = () => (
  <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
    <div className="space-y-2">
      <li className="flex gap-1.5 items-center text-left">
        <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> Much faster and
        cheaper to run than AI
      </li>
      <li className="flex gap-1.5 items-center">
        <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> Pretty accurate
      </li>
      <li className="flex gap-1.5 items-center">
        <Check className="h-5 w-5 shrink-0 text-[#16A34A]" /> 100% free &
        open-source
      </li>
    </div>
  </ul>
);

const UsersStats = ({ requestsCount }: { requestsCount: unknown }) => (
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
          {(Math.ceil(Number(requestsCount) / 10) * 10).toLocaleString()}
        </span>{" "}
        API requests served{" "}
      </p>
    </div>
  </div>
);

const DemoSection = () => (
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
);

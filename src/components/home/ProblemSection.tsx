import { Icons } from "@/components/Icons";
import Image from "next/image";

export const ProblemSection = () => {
  return (
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
            forms, it&apos;s your responsibility to ensure valid communications.
            That&apos;s a challenge when users keep submitting invalid emails
            like they&apos;re testing your error handling.
          </p>
          <Icons.arrow className="h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none" />
          <p className="mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold">
            Stop invalid emails before they crash your app...
          </p>
          <ProblemCards />
        </div>
      </div>
    </section>
  );
};

const ProblemCards = () => (
  <div className="grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center">
    <ProblemCard
      emoji="/shocked-emoji.png"
      title="...leads to lost users"
      description="Imagine your users trying to reset their passwords or receive important notifications, but their invalid emails are causing system errors. Not exactly a great user experience, is it?"
    />
    <ProblemCard
      emoji="/swear-emoji.png"
      title="...damages your system reliability"
      description={
        <>
          Your users want to access their accounts and receive important
          updates. Do you really want them to face{" "}
          <span className="font-semibold text-[#16A34A]">system crashes</span>{" "}
          because of invalid email formats?
        </>
      }
    />
  </div>
);

interface ProblemCardProps {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const ProblemCard = ({ emoji, title, description }: ProblemCardProps) => (
  <div className="relative z-10">
    <div className="absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]">
      <div className="absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none"></div>
      <Image
        alt={emoji.replace("/", "").replace(".png", "")}
        src={emoji}
        width={96}
        height={96}
        className="h-24 relative -z-10 select-none"
      />
    </div>
    <p className="font-semibold text-lg">{title}</p>
    <p className="mt-2 text-balance">{description}</p>
  </div>
);

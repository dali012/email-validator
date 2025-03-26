import { AnimatedCode } from "@/components/AnimatedCode";

export const SolutionSection = () => {
  return (
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
  );
};

import { Heart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto lg:px-8 px-6">
        <div className="relative flex h-14 items-center justify-between">
          <Link
            href="/"
            className="relative sm:absolute inset-y-0 left-0 flex items-center font-semibold"
          >
            <Image
              src="/email.png"
              alt="Email Validator Logo"
              width={24}
              height={24}
              className="mr-1.5"
            />
            EmailValidatorAPI
          </Link>

          <div className="hidden sm:block invisible">EmailValidatorAPI</div>

          <div className="hidden sm:flex items-center gap-6">
            <Link className="hover:underline" href="#api">
              API
            </Link>
          </div>
          <Link
            href="https://github.com/dali012/email-validator-api"
            target="_blank"
            referrerPolicy="no-referrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            Star on GitHub <Heart className="h-4 w-4 ml-1.5 fill-[#16A34A]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

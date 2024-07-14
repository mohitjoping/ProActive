import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/login-page/index";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div
    style={{
      backgroundImage: "url('/ManWalkingOnStairs.svg')",
      backgroundSize: "40%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "95% 25%",
    }}
    className="bg-[#ffffff]/0"
    >
      <div className="flex flex-col justify-center items-center border rounded-3xl mt-28 ml-14 min-h-xl max-w-md">

          
            <div className="relative z-20 mt-auto"></div>
      
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl text-start font-medium tracking-tight">
                  Welcome !
                </h1>
                <p className="text-sm text-start text-muted-foreground">
                Enter your Credentials to access your account.
                </p>
              </div>
              <UserAuthForm />

              <p className="px-8 text-center text-sm text-muted-foreground">
                Don't have an account? {" "}
                <Link
                  href="/sign-up"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  SIGNUP
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
     
    </div>
  );
}

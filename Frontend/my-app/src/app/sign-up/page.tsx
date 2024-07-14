import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/sign-up/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div
    style={{
      backgroundImage: "url('/ManWalkingOnStairs.svg')",
      backgroundSize: "38%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "95% 25%",
    }}
    className="bg-[#ffffff]/0"
    >
      <div className="flex flex-col justify-center items-center border rounded-3xl mt-20 ml-14 min-h-lg max-w-lg">
        <div className=" flex flex-col justify-end items-end p-2 mt-2">
          <Link
            href="/examples/authentication"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "right-0 top-0 "
            )}
          >
            Login
          </Link>

          
            <div className="relative z-20 mt-auto"></div>
      
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

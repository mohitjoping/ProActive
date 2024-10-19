import React from "react"; // Add this line
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Briefcase,
    DiamondPlus,
    Folder,
    Ghost,
    GraduationCap,
    House,
    Mail,
  } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {};

export default function NavBar({}: Props) {
  return (
    <main className="w-full bg-primary-background h-20
    flex justify-between items-center rounded-xl border-[#ffffff]/40 m-6  bg-[#8606e2]/10 backdrop-blur-60 z-20  px-10 transition-all duration-300 ease-in-out backdrop-blur-xl top-0 border-[1px] backdrop-opacity-100">
      <div className="font-semibold text-2xl">
        ProActive
      </div>
        <div>
            
          <div className="flex justify-center items-center gap-4">
            {/* aboutus  */}
            <Button className="flex justify-center items-center " variant="noline">AboutUs</Button>
            {/* blog */}
            <Button className="flex justify-center items-center " variant="noline">Blogs</Button>
        
            
            
              <Link
              href="/login-page"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "right-0 top-0 "
              )}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({ variant: "default" }),
                "right-0 top-0 "
              )}
            >
              SIGNUP
            </Link>
          
          </div>
        </div>
      
    </main>
    );
}

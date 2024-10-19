import React from "react"; // Add this line

import { Button } from "@/components/ui/button";
import {
    Briefcase,
    DiamondPlus,
    Folder,
    Ghost,
    GraduationCap,
    House,
    Mail,
  } from "lucide-react";
type Props = {};

export default function NavBar({}: Props) {
  return (
    <main className="w-full bg-primary-background h-20
    flex justify-between items-center px-14 py-2 rounded-xl border m-6  bg-[#8606e2]/10 backdrop-blur-20">
      <div className="font-semibold text-2xl">
        ProActive
      </div>
        <div>
            
          <div className="flex justify-center items-center gap-4">
            {/* aboutus  */}
            <Button className="flex justify-center items-center " variant="noline">AboutUs</Button>
            {/* blog */}
            <Button className="flex justify-center items-center " variant="noline">Blogs</Button>
        
            
            <Button
              className="flex justify-center items-center gap-2"variant="outline">
              LOGIN
            </Button>
            <Button
              className="flex justify-center items-center gap-2"variant="default">
              SIGN-UP
            </Button>
          </div>
        </div>
      
    </main>
    );
}

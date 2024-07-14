import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export default function Index({}: Props) {
  let user = {
    name: "John Doe",
    email: "johndoe@google.com",
  };
  return (
    <main className="flex sticky top-0">
      <div
        className="w-[1320px] bg-primary-background h-16
    flex justify-between items-center rounded-xl border-[#ffffff]/40 mx-16 my-4  bg-[#8606e2]/10 backdrop-blur-60 z-20  px-16 py-8 transition-all duration-300 ease-in-out backdrop-blur-xl top-0 border-[1px] backdrop-opacity-100"
      >
        <div className="flex flex-row justify-center items-center gap-4">
          <Avatar>
            <AvatarImage src="/Man_Profile_Icon.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex font-light text-left text-xl">{user.name}</div>
        </div>
        <div>
          <Button className="h-10 w-40 text-xl" variant="default">
            Reward
          </Button>
        </div>
      </div>
    </main>
  );
}

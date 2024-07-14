import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import React from "react";

type Props = {};

export default function HeroScreen({}: Props) {
  return (
    <main
      style={{
        backgroundImage:
          "url('/afterProactive.svg'),url('/BeforeProactive.svg')",
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "95% 23%, 5% 26%",
      }}
    >
      <section className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center m-10 p-24">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold">Welcome to ProActive !</h1>
            <p className="text-base m-2">
              Say GoodBye to Procrastination,Let’s make progress, not excuses.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-14">
            <Button>Get Started <LogIn /> </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-52 p-24">
        <div className="w-full bg-primary-background h-96
    flex flex-col justify-between items-center px-14 py-2 rounded-3xl border border-[#ffffff]/40 m-6  bg-[#8606e2]/20 backdrop-blur-0  p-24 group mt-10  bg-gradient-to-tl from-white-500/2 via-white-900/2 to-white-500/2  backdrop-blur-xs transition-all ease-in-out  "
    style={{ boxShadow: "0px 0px 50px -16px #8606e2" }}
    >
        
        <div
          className="overflow-y-auto "
          
        >
          <div className=" flex justify-center items-center max-h-96 ">
          <div className="flex flex-col justify-start items-start">
            <h1 className=" flex justify-start font-semibold text-3xl px-0.5 py-4">
              What ProActive provide you
            </h1>
            <ul className="list-disc pl-4">
              <li className="px-1 py-3">
                ProActive: This app gamifies productivity by encouraging users
                to stay focused for set periods of time. You plant a virtual
                tree, and if you leave the app, your tree dies. Over time, you
                can grow a forest of productivity.
              </li>
              <li className="px-1 py-3">
                Stay Focused: A browser extension for Google Chrome that allows
                users to restrict the amount of time they spend on certain
                websites. Once your allotted time is up, the sites you've
                blocked are inaccessible for the rest of the day.
              </li>
              <li className="px-1 py-3">
                Freedom: Similar to Stay Focused, Freedom allows you to block
                distracting websites and apps across all your devices. You can
                create custom blocklists and schedules to tailor your
                productivity needs.
              </li>
              <li className="px-1 py-3">
                Trello: While not specifically a procrastination app, Trello is
                a popular project management tool that can help organise tasks
                and deadlines. Its visual layout makes it easy to see what needs
                to be done and track progress, which can be helpful for
                combating procrastination.
              </li>
            </ul>
          </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold text-xl ">ProActive</div>
          <div className="flex flex-row gap-8 p-4">
            <p>Home</p>
            <p>AboutUs</p>
            <p>Blogs</p>
          </div>
        </div>
      </section>
      <footer className="flex justify-center items-center border-t">
        <div className="flex justify-between font-thin text-xs max-w-6xl w-full px-4 py-4 sm:px-6 lg:px-8">
          <p>Term and Condition user policy</p>
          <p>Copyright © 2024 all rights Proactive</p>
          <p>Join Proactive Community</p>
        </div>
      </footer>
    </main>
  );
}

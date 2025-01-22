import Link from "next/link";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="rounded-4xl absolute inset-2 bottom-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] ring-1 ring-inset ring-black/5 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>

      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Header />
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Close every deal.
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-foreground/75 sm:text-2xl/8">
              Radiant helps you sell more by revealing sensitive information
              about your customers.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button asChild>
                <Link href="/">Get started</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

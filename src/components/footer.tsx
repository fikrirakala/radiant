import Link from "next/link";

import FooterCopy from "./footer-copy";
import FooterSocials from "./footer-socials";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
        <div className="rounded-4xl absolute inset-2 bg-white/80"></div>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative pb-16 pt-20 text-center sm:py-24">
              <hgroup>
                <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
                  Get started
                </h2>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                  Ready to dive in?
                  <br />
                  Start your free trial today.
                </p>
              </hgroup>
              <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
                Get the cheat codes for selling and unlock your team&apos;s
                revenue potential.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/">Get started</Link>
                </Button>
              </div>
            </div>

            <div className="pb-16">
              <div className="relative isolate flex justify-between py-2">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
                >
                  <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-0 border-b border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-2 border-b border-black/5"></div>
                </div>
                <FooterCopy />
                <FooterSocials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

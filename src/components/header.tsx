import Link from "next/link";

import { Logos } from "./logos";

const links = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Company",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Login",
    href: "/login",
  },
];

export default function Header() {
  return (
    <header className="pt-12 sm:pt-16">
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

        <div className="py-3">
          <Link href="/">
            <Logos.radiant />
          </Link>
        </div>

        <nav className="relative hidden lg:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%]"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

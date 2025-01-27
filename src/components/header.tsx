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
    <header className="relative pt-12 sm:pt-16">
      <div className="flex justify-between">
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

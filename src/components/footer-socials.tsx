import { Icons } from "./icons";

const links = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Icons.facebook,
    ariaLabel: "Visit us on Facebook",
  },
  {
    name: "X",
    href: "https://x.com",
    icon: Icons.x,
    ariaLabel: "Visit us on X",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com",
    icon: Icons.linkedin,
    ariaLabel: "Visit us on Linkedin",
  },
];

export default function FooterSocials() {
  return (
    <div className="flex">
      <div className="relative flex items-center gap-8 py-3">
        {links.map((link) => (
          <a
            target="_blank"
            aria-label={link.ariaLabel}
            className="text-gray-950 hover:text-gray-950/75"
            href={link.href}
            key={link.name}
          >
            <link.icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

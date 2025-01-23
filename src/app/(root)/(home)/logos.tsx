import { Logos } from "@/components/logos";

const logoCloud = [
  {
    name: "laravel",
    logo: Logos.laravel,
  },
  {
    name: "savvycal",
    logo: Logos.savvycal,
  },
  {
    name: "statamic",
    logo: Logos.statamic,
  },
  {
    name: "transistor",
    logo: Logos.transistor,
  },
  {
    name: "tuple",
    logo: Logos.tuple,
  },
];

export default function LogosSection() {
  return (
    <section className="mt-10 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
          {logoCloud.map((item) => (
            <item.logo
              key={item.name}
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

const features = [
  {
    title: "Networking",
    subtitle: "Get perfect clarity",
    description:
      "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.",
    className: "max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl",
    background: "bg-[url(/screenshots/networking.png)] bg-[size:851px_344px]",
  },
  {
    title: "Integrations",
    subtitle: "Get perfect clarity",
    description:
      "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.",
    className: "lg:col-span-2 lg:rounded-tr-4xl",
    background: "bg-[url(/screenshots/networking.png)] bg-[size:851px_344px]",
  },
  {
    title: "Meetings",
    subtitle: "Get perfect clarity",
    description:
      "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.",
    className: "lg:col-span-2 lg:rounded-bl-4xl",
    background: "bg-[url(/screenshots/networking.png)] bg-[size:851px_344px]",
  },
  {
    title: "Engagement",
    subtitle: "Get perfect clarity",
    description:
      "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.",
    className: "max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl",
    background: "bg-[url(/screenshots/networking.png)] bg-[size:851px_344px]",
  },
];

export default function Outreach() {
  return (
    <section className="rounded-4xl mx-2 mt-2 bg-gray-900 py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="text-xs/5 font-semibold uppercase tracking-widest text-gray-400">
            Outreach
          </h2>
          <h3 className="mt-2 max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-white sm:text-6xl">
            Customer outreach has never been easier.
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {features.map((item) => (
              <div
                key={item.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-sm ring-1 ring-white/15",
                  item.className
                )}
              >
                <div className="relative h-80 shrink-0">
                  <div
                    className={cn(
                      "absolute inset-0 h-80 bg-no-repeat",
                      item.background
                    )}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 from-[-25%]"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

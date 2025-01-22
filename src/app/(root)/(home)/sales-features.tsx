import { cn } from "@/lib/utils";

const features = [
  {
    title: "Insight",
    subtitle: "Get perfect clarity",
    description:
      "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.",
    className: "max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl",
    background:
      "bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px]",
  },
  {
    title: "Analysis",
    subtitle: "Undercut your competitors",
    description:
      "With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged.",
    className: "lg:col-span-3 lg:rounded-tr-4xl",
    background:
      "bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px]",
  },
  {
    title: "Speed",
    subtitle: "Built for power users",
    description:
      "It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts.",
    className: "lg:col-span-2 lg:rounded-bl-4xl",
    background:
      "bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px]",
  },
  {
    title: "Source",
    subtitle: "Get the furthest reach",
    description:
      "Bypass those inconvenient privacy laws to source leads from the most unexpected places.",
    className: "lg:col-span-2",
    background:
      "bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px]",
  },
  {
    title: "Limitless",
    subtitle: "Sell globally",
    description:
      "Radiant helps you sell in locations currently under international embargo.",
    className: "max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl",
    background:
      "bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px]",
  },
];

export default function SalesFeatures() {
  return (
    <section className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
          Sales
        </h2>
        <h3 className="mt-2 max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
          Know more about your customers than they do.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* Cards */}
          {features.map((item) => (
            <div
              key={item.title}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 lg:col-span-3",
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
                <div className="absolute inset-0 bg-gradient-to-t from-white to-50%"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
                  {item.title}
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950">
                  {item.subtitle}
                </p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

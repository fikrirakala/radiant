import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const data = [
  {
    title: "Starter",
    description: "Everything you need to start selling.",
    price: 99,
    currency: "USD",
    frequency: "month",
    features: [
      "Up to 3 team members",
      "Up to 5 deal progress boards",
      "Source leads from select platforms",
    ],
  },
  {
    title: "Growth",
    description: "All the extras for your growing team.",
    price: 149,
    currency: "USD",
    frequency: "month",
    features: [
      "Up to 10 team members",
      "Up to 5 deal progress boards",
      "Source leads from select platforms",
      "RadiantAI integrations",
      "5 competitor analyses per month",
    ],
  },
  {
    title: "Enterprise",
    description: "All the extras for your growing team.",
    price: 299,
    currency: "USD",
    frequency: "month",
    features: [
      "Up to 10 team members",
      "Up to 5 deal progress boards",
      "Source leads from select platforms",
      "RadiantAI integrations",
      "5 competitor analyses per month",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {data.map((pricing) => (
        <div
          key={pricing.title}
          className="rounded-4xl -m-2 grid grid-cols-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
        >
          <div className="rounded-4xl grid grid-cols-1 p-2 shadow-md shadow-black/5">
            <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
              <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
                {pricing.title}
              </h2>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                {pricing.description}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="text-5xl font-medium text-gray-950">
                  ${pricing.price}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>{pricing.currency}</p>
                  <p>per {pricing.frequency}</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/" className="w-full">
                    Get started
                  </Link>
                </Button>
              </div>
              <div className="mt-8">
                <h3 className="text-sm/6 font-medium text-gray-950">
                  Start selling with:
                </h3>
                <ul className="mt-3 space-y-3">
                  {pricing.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25"
                    >
                      <span className="inline-flex h-6 items-center">
                        <Icons.plus className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

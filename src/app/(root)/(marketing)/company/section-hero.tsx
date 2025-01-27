import Image from "next/image";

import Image1 from "../../../../../public/company/1.jpg";
import Image2 from "../../../../../public/company/2.jpg";
import Image3 from "../../../../../public/company/3.jpg";
import Image4 from "../../../../../public/company/4.jpg";

const stats = [
  {
    name: "Raised",
    value: "$150M",
  },
  {
    name: "Companies",
    value: "30K",
  },
  {
    name: "Deals Closed",
    value: "1.5M",
  },
  {
    name: "Leads Generated",
    value: "200M",
  },
];

export default function SectionHero() {
  return (
    <section className="mt-16 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h1 className="text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
          Helping companies generate revenue.
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          We&apos;re on a mission to transform revenue organizations by
          harnessing vast amounts of illegally acquired customer data.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
            <p className="mt-6 text-sm/6 text-gray-600">
              At Radiant, we are dedicated to transforming the way revenue
              organizations source and close deals. Our mission is to provide
              our customers with an unfair advantage over both their competitors
              and potential customers through insight and analysis. We&apos;ll
              stop at nothing to get you the data you need to close a deal.
            </p>
            <p className="mt-8 text-sm/6 text-gray-600">
              We&apos;re customer-obsessed — putting the time in to build a
              detailed financial picture of every one of our customers so that
              we know more about your business than you do. We are in this
              together, mostly because we are all implicated in large-scale
              financial crime. In our history as a company, we&apos;ve never
              lost a customer, because if any one of us talks, we all go down.
            </p>
          </div>

          <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src={Image1}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <Image
                  alt=""
                  src={Image2}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src={Image3}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <Image
                  alt=""
                  src={Image4}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-lg:mt-16 lg:col-span-1">
            <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
              The Numbers
            </h2>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col gap-y-2">
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

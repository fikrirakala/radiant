import Image from "next/image";

import TinaYards from "../../../../../public/testimonials/tina-yards.jpg";

export default function TestimonialSection() {
  return (
    <section className="rounded-4xl mx-2 mt-24 bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
            <div className="-mt-96 lg:-mt-52">
              <div className="rounded-4xl -m-2 bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      src={TinaYards}
                      alt="Image"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
              <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
                <blockquote>
                  <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                    Thanks to Radiant, we&apos;re finding new leads that we
                    never would have found with legal methods.
                  </p>
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                  <p className="text-sm/6 font-medium">
                    <span className="from-28% bg-gradient-to-r from-[#fff1be] via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                      VP of Sales, Protocol
                    </span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AmyChase from "../../../../public/testimonials/amy-chase.jpg";
import ConnorNeville from "../../../../public/testimonials/conor-neville.jpg";
import DillonLenora from "../../../../public/testimonials/dillon-lenora.jpg";
import HarrietArron from "../../../../public/testimonials/harriet-arron.jpg";
import TinaYards from "../../../../public/testimonials/tina-yards.jpg";
import Veronica from "../../../../public/testimonials/veronica-winton.jpg";

const testimonials = [
  {
    name: "Amy Chase",
    title: "Head of GTM, Pocket",
    quote:
      "We closed a deal in literally a few minutes because we knew their exact budget.",
    image: AmyChase,
  },
  {
    name: "Connor Neville",
    title: "Head of Customer Success, TaxPal",
    quote:
      "Radiant made undercutting all of our competitors an absolute breeze.",
    image: ConnorNeville,
  },
  {
    name: "Dillon Lenora",
    title: "VP of Sales, Detax",
    quote: "I was able to replace 80% of my team with RadiantAI bots.",
    image: DillonLenora,
  },
  {
    name: "Harriet Arron",
    title: "Account Manager, Commit",
    quote:
      "I've smashed all my targets without having to speak to a lead in months.",
    image: HarrietArron,
  },
  {
    name: "Tina Yards",
    title: "VP of Sales, Protocol",
    quote:
      "Thanks to Radiant, we're finding new leads that we never would have found with legal methods.",
    image: TinaYards,
  },
  {
    name: "Veronica Winton",
    title: "CSO, Planeteria",
    quote:
      "We've managed to put two of our main competitors out of business in 6 months.",
    image: Veronica,
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
            What everyone is saying
          </h2>
          <h3 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
            Trusted by professionals.
          </h3>
        </div>
      </div>

      <div className="mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Carousel>
            <CarouselContent className="-ml-8">
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="basis-[20rem] pl-8 sm:basis-[26rem]"
                >
                  <div className="relative flex aspect-[9/16] w-full flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4]">
                    <Image
                      src={item.image}
                      alt=""
                      className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
                    ></div>
                    <figure className="relative p-10">
                      <blockquote>
                        <p className="relative text-xl/7 text-white">
                          <span
                            aria-hidden="true"
                            className="absolute -translate-x-full"
                          >
                            “
                          </span>
                          {item.quote}
                          <span aria-hidden="true" className="absolute">
                            ”
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                        <p className="text-sm/6 font-medium text-white">
                          {item.name}
                        </p>
                        <p className="text-sm/6 font-medium">
                          <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

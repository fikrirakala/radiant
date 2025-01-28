import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Veronica from "../../../../../public/testimonials/veronica-winton.jpg";

const careers = [
  {
    name: "Engineering",
    positions: [
      {
        name: "iOS Developer",
        location: "Remote",
      },
      {
        name: "Backend Engineer",
        location: "Remote",
      },
      {
        name: "Product Engineer",
        location: "Remote",
      },
    ],
  },
  {
    name: "Design",
    positions: [
      {
        name: "Principal Designer",
        location: "Remote",
      },
      {
        name: "Designer",
        location: "Remote",
      },
      {
        name: "Senior Designer",
        location: "Remote",
      },
    ],
  },
];

export default function SectionCareers() {
  return (
    <section className="my-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Careers
        </h2>
        <h3 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
          Join our fully remote team.
        </h3>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          We work together from all over the world, mainly from locations
          without extradition agreements.
        </p>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
          <div className="lg:max-w-2xl">
            <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
              Open positions
            </h3>
            <div>
              <table className="w-full text-left">
                <colgroup>
                  <col className="w-2/3" />
                  <col className="w-1/3" />
                  <col className="w-0" />
                </colgroup>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Read more</th>
                  </tr>
                </thead>

                {careers.map((career, careerIdx) => (
                  <tbody key={careerIdx}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="px-0 pb-0 pt-10"
                      >
                        <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                          {career.name}
                        </div>
                      </th>
                    </tr>
                    {career.positions.map((position, posIdx) => (
                      <tr
                        key={posIdx}
                        className="border-b border-dotted border-gray-200 text-sm/6 font-normal last:border-none"
                      >
                        <td className="px-0 py-4">{position.name}</td>
                        <td className="px-0 py-4 text-gray-600">
                          {position.location}
                        </td>
                        <td className="px-0 py-4 text-right">
                          <Button asChild>
                            <Link href="/" className="">
                              View listing
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
            <Image
              alt=""
              src={Veronica}
              className="absolute inset-0 object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
            ></div>
            <figure className="relative p-10">
              <blockquote>
                <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
                  We&apos;ve managed to put two of our main competitors out of
                  business in 6 months.
                </p>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/20 pt-6">
                <p className="text-sm/6 font-medium text-white">
                  Veronica Winton
                </p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    CSO, Planeteria
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

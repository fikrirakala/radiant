import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Image5 from "../../../../../public/company/5.jpg";
import Team1 from "../../../../../public/team/celeste-vandermark.jpg";
import Team2 from "../../../../../public/team/courtney-henry.jpg";
import Team3 from "../../../../../public/team/dries-vincent.jpg";
import Team4 from "../../../../../public/team/emily-selman.jpg";
import Team5 from "../../../../../public/team/leonard-krasner.jpg";
import Team6 from "../../../../../public/team/marcus-eldridge.jpg";
import Team7 from "../../../../../public/team/michael-foster.jpg";
import Team8 from "../../../../../public/team/nolan-sheffield.jpg";
import Team9 from "../../../../../public/team/whitney-francis.jpg";

const team = [
  {
    name: "Celeste Vandermark",
    position: "Co-Founder / CTO",
    image: Team1,
  },
  {
    name: "Courtney Henry",
    position: "Business Relations",
    image: Team2,
  },
  {
    name: "Dries Vincent",
    position: "Front-end Developer",
    image: Team3,
  },
  {
    name: "Emily Selman",
    position: "Designer",
    image: Team4,
  },
  {
    name: "Leonard Kasner",
    position: "Director of Product",
    image: Team5,
  },
  {
    name: "Marcus Eldridge",
    position: "Copywriter",
    image: Team6,
  },
  {
    name: "Michael Foster",
    position: "Senior Designer",
    image: Team7,
  },
  {
    name: "Nolan Sheffield",
    position: "Principal Designer",
    image: Team8,
  },
  {
    name: "Whitney Francis",
    position: "VP, User Experience",
    image: Team9,
  },
];

export default function SectionTeam() {
  return (
    <section className="mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Meet the team
        </h2>
        <h3 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
          Founded by an all-star team.
        </h3>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          Radiant is founded by two of the best sellers in the business and
          backed by investors who look the other way.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-sm/6 text-gray-600">
              Years ago, while working as sales associates at rival companies,
              Thomas, Ben, and Natalie were discussing a big client they had all
              been competing for. Joking about seeing the terms of each
              other&apos;s offers, they had an idea: what if they shared data to
              win deals and split the commission behind their companies backs?
              It turned out to be an incredible success, and that idea became
              the kernel for Radiant.
            </p>
            <p className="mt-8 text-sm/6 text-gray-600">
              Today, Radiant transforms revenue organizations by harnessing
              illegally acquired customer and competitor data, using it to
              provide extraordinary leverage. More than 30,000 companies rely on
              Radiant to undercut their competitors and extort their customers,
              all through a single integrated platform.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/">Join us</Link>
              </Button>
            </div>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={Image5}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="mt-24 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          The team
        </h3>

        <hr className="mt-6 border-t border-gray-200" />

        <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <li key={i} className="flex items-center gap-4">
              <Image
                alt={person.name}
                src={person.image}
                className="size-12 rounded-full"
              />
              <div className="text-sm/6">
                <h3 className="font-medium">{person.name}</h3>
                <p className="text-gray-500">{person.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

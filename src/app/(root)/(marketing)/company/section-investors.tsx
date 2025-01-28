import Image from "next/image";

import Investor1 from "../../../../../public/investors/alicia-bell.jpg";
import Investor2 from "../../../../../public/investors/anna-roberts.jpg";
import Investor6 from "../../../../../public/investors/benjamin-russel.jpg";
import Venture2 from "../../../../../public/investors/deccel.svg";
import Investor3 from "../../../../../public/investors/emma-dorsey.jpg";
import Investor4 from "../../../../../public/investors/jenny-wilson.jpg";
import Investor5 from "../../../../../public/investors/kristin-watson.jpg";
import Venture1 from "../../../../../public/investors/remington-schwartz.svg";

const ventureCapital = [
  {
    name: "Remington Schwartz",
    description:
      "Remington Schwartz has been a driving force in the tech industry, backing bold entrepreneurs who explore grey areas in financial and privacy law. Their deep industry expertise and extensive political lobbying provide their portfolio companies with favorable regulation and direct access to lawmakers.",
    image: Venture1,
  },
  {
    name: "Deccel",
    description:
      "Deccel has been at the forefront of innovation, investing in pioneering companies across various sectors, including technology, consumer goods, and healthcare. Their philosophy of ‘plausible deniability’ and dedication to looking the other way have helped produce some of the world’s most controversial companies.",
    image: Venture2,
  },
];

const investors = [
  {
    name: "Alicia Bell",
    company: "TechNexus Ventures",
    image: Investor1,
  },
  {
    name: "Emma Dorsey",
    company: "Innovate Capital Partners",
    image: Investor2,
  },
  {
    name: "Kristin Watson",
    company: "FutureWave Investments",
    image: Investor3,
  },
  {
    name: "Jenny Wilson",
    company: "SynergyTech Equity",
    image: Investor4,
  },
  {
    name: "Anna Roberts",
    company: "NextGen Horizons",
    image: Investor5,
  },
  {
    name: "Benjamin Russel",
    company: "Pioneer Digital Ventures",
    image: Investor6,
  },
];

export default function SectionInvestors() {
  return (
    <section className="mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Investors
        </h2>
        <h3 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
          Funded by industry-leaders.
        </h3>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          We are fortunate to be backed by the best investors in the industry —
          both literal and metaphorical partners in crime.
        </p>
        <h3 className="mt-24 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Venture Capital
        </h3>
        <hr className="mt-6 border-t border-gray-200" />
        <ul
          className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
          role="list"
        >
          {ventureCapital.map((item) => (
            <li key={item.name}>
              <Image alt={item.name} src={item.image} className="h-14" />
              <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-24 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
          Individual investors
        </h3>
        <hr className="mt-6 border-t border-gray-200" />
        <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {investors.map((investor, i) => (
            <li key={i} className="flex items-center gap-4">
              <Image
                alt={investor.name}
                src={investor.image}
                className="size-12 rounded-full"
              />
              <div className="text-sm/6">
                <h3 className="font-medium">{investor.name}</h3>
                <p className="text-gray-500">{investor.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

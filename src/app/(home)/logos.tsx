import Image from "next/image";

import Logo1 from "../../../public/logo-cloud/laravel.svg";
import Logo2 from "../../../public/logo-cloud/savvycal.svg";
import Logo3 from "../../../public/logo-cloud/statamic.svg";
import Logo4 from "../../../public/logo-cloud/transistor.svg";
import Logo5 from "../../../public/logo-cloud/tuple.svg";

const logoCloud = [
  {
    name: "logo-1",
    image: Logo1,
  },
  {
    name: "logo-2",
    image: Logo2,
  },
  {
    name: "logo-3",
    image: Logo3,
  },
  {
    name: "logo-4",
    image: Logo4,
  },
  {
    name: "logo-5",
    image: Logo5,
  },
];

export default function Logos() {
  return (
    <section className="mt-10 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
          {logoCloud.map((logo) => (
            <Image
              src={logo.image}
              alt={logo.name}
              key={logo.name}
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

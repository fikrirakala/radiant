import Image from "next/image";

import AppImage from "../../../../public/screenshots/app.png";

export default function Snapshot() {
  return (
    <section className="overflow-hidden">
      <div className="px-6 pb-24 lg:px-8">
        <div className="mx-auto lg:max-w-7xl">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
            A snapshot of your entire sales pipeline.
          </h2>

          <div className="relative mt-16">
            <div className="rounded-[1.25rem] p-2 shadow-sm ring-1 ring-black/5">
              <Image
                src={AppImage}
                alt=""
                className="relative rounded-xl shadow-2xl ring-1 ring-black/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

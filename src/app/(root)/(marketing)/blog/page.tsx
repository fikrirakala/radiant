import SectionArticles from "./section-articles";

export default async function Page() {
  return (
    <>
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="mt-16 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
            Blog
          </h2>
          <h1 className="mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
            What&apos;s happening at Radiant.
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            Stay informed with product updates, company news, and insights on
            how to sell smarter at your company.
          </p>
        </div>
      </section>
      <SectionArticles />
    </>
  );
}

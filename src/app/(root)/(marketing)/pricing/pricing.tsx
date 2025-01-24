import LogoCloud from "./logo-cloud";
import PricingPlans from "./pricing-plans";

export default function PricingSection() {
  return (
    <section className="relative py-24">
      <div className="rounded-4xl from-28% absolute inset-x-2 bottom-0 top-48 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] via-[#ee87cb] via-70% to-[#b060ff] ring-1 ring-inset ring-black/5 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <PricingPlans />
          <LogoCloud />
        </div>
      </div>
    </section>
  );
}

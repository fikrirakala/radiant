import Hero from "./hero";
import Logos from "./logos";
import Outreach from "./outreach";
import SalesFeatures from "./sales-features";
import Snapshot from "./snapshot";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
        <Snapshot />
        <SalesFeatures />
      </div>
      <Outreach />
      <Testimonials />
    </>
  );
}

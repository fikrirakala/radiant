import Hero from "./hero";
import Logos from "./logos";
import Snapshot from "./snapshot";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
        <Snapshot />
      </div>
    </>
  );
}

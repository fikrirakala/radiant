import FaqSection from "./faq-section";
import Hero from "./hero";
import PricingSection from "./pricing";
import TestimonialSection from "./testimonial-section";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <div className="h-[50vh]"></div>
      <TestimonialSection />
      <FaqSection />
    </>
  );
}

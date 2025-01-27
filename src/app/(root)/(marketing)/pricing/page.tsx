import FaqSection from "./faq-section";
import Hero from "./hero";
import PlanDetails from "./plan-details";
import PricingSection from "./pricing";
import TestimonialSection from "./testimonial-section";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <PlanDetails />
      <TestimonialSection />
      <FaqSection />
    </>
  );
}

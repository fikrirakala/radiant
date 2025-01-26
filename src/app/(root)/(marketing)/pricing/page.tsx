import FaqSection from "./faq-section";
import Hero from "./hero";
import PricingSection from "./pricing";
import PricingDetails from "./pricing-details";
import TestimonialSection from "./testimonial-section";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <PricingDetails />
      <TestimonialSection />
      <FaqSection />
    </>
  );
}

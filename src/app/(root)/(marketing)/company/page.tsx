import SectionCareers from "./section-careers";
import SectionHero from "./section-hero";
import SectionInvestors from "./section-investors";
import SectionTeam from "./section-team";

export default function CompanyPage() {
  return (
    <>
      <SectionHero />
      <SectionTeam />
      <SectionInvestors />
      <SectionCareers />
    </>
  );
}

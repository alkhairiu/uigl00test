import Hero from "../components/sections/Hero.jsx";
import AboutUs from "../components/sections/AboutUs.jsx";
import CompetitionTypes from "../components/sections/CompetitionTypes.jsx";
import WhoCanJoin from "../components/sections/WhoCanJoin.jsx";
import TimelineSection from "../components/sections/TimelineSection.jsx";
import RegisterBefore from "../components/sections/RegisterBefore.jsx";
import Sponsors from "../components/sections/Sponsors.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import CTASection from "../components/sections/CTASection.jsx";

const NEXT_DEADLINE = "2026-09-20T23:59:00";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CompetitionTypes />
      <WhoCanJoin />
      <TimelineSection />
      <RegisterBefore targetDate={NEXT_DEADLINE} />
      <Sponsors />
      <FAQSection />
      <CTASection />
    </>
  );
}

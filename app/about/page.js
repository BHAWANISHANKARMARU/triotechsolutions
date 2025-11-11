import Hero from "../components/About/Hero";
import OurStory from "../components/About/OurStory";
import OurMission from "../components/About/OurMission";
import Stats from "../components/About/Stats";
import OurValues from "../components/About/OurValues";
import WhyChooseUs from "../components/About/WhyChooseUs";
import OurApproach from "../components/About/OurApproach";
import LeadershipTeam from "../components/About/LeadershipTeam";
import JoinOurNetwork from "../components/About/JoinOurNetwork";

export const metadata = {
  title: "About Us - Trio Tech Solutions",
  description:
    "Learn about Trio Tech Solutions, our mission, values, and the team dedicated to connecting exceptional IT talent with innovative companies.",
};

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <OurMission />
      <Stats />
      <OurValues />
      <WhyChooseUs />
      <OurApproach />
      <LeadershipTeam />
      <JoinOurNetwork />
    </div>
  );
};

export default AboutPage;

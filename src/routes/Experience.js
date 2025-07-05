import ExperienceData from "../components/ExperienceData";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const Experience = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Experience" text="Please have a look" />
      <ExperienceData/>
      <Footer/>
    </div>
  );
}
export default Experience;
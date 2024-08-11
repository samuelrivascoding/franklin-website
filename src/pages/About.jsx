import Navbar from "../components/Navbar";
import HeaderAbout from "../components/HeaderAbout";
import CTALeadership from "../components/CTALeadership";
import LayoutAbout from "../components/LayoutAbout";
import FAQAbout from "../components/FAQAbout";
import CTAScholarship from "../components/CTAScholarship";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <HeaderAbout learnAboutTheFranklinSTEM="Learn about the Franklin STEM Club and its mission to inspire students." />
      <CTALeadership />
      <LayoutAbout />
      <FAQAbout />
      {/* <CTAScholarship /> */}
      <Footer />
    </div>
  );
};

export default About;

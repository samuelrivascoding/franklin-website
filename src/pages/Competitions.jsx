import Navbar from "../components/Navbar";
import HeaderCompetitions from "../components/HeaderCompetitions";
import ContentCompetitions from "../components/ContentCompetitions";
import CTAJoin from "../components/CTAJoin";
import Footer from "../components/Footer";

const Competitions = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <HeaderCompetitions />
      <ContentCompetitions />
      <CTAJoin />
      <Footer />
    </div>
  );
};

export default Competitions;

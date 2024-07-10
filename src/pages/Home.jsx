import Navbar from "../components/Navbar";
import HeaderHome from "../components/HeaderHome";
import LayoutHome from "../components/LayoutHome";
import CTAScholarship from "../components/CTAScholarship";
import CTALeadership from "../components/CTALeadership";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <HeaderHome />
      <LayoutHome />
      <CTAScholarship />
      <CTALeadership />
      <Footer />
    </div>
  );
};

export default Home;

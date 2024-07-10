import Navbar from "../components/Navbar";
import HeaderScholarships from "../components/HeaderScholarships";
import FAQScholarships from "../components/FAQScholarships";
import CTAScholarship from "../components/CTAScholarship";
import Footer from "../components/Footer";

const Scholarships = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <HeaderScholarships />
      <FAQScholarships />
      <CTAScholarship />
      <Footer />
    </div>
  );
};

export default Scholarships;

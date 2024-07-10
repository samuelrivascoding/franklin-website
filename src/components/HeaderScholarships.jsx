import PropTypes from "prop-types";

const HeaderScholarships = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-28 px-16 bg-[url('/public/header--541@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-37xl text-background-color-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[760px]">
        <b className="self-stretch relative leading-[120%]">
          Discover Scholarship
        </b>
        <div className="self-stretch relative text-lg leading-[150%]">
          Apply as a freshman today and stay consistent in STEM Extracurricular
          activities to be qualified to win the automatic scholarship at the end
          of 4 years
        </div>
      </div>
    </section>
  );
};

HeaderScholarships.propTypes = {
  className: PropTypes.string,
};

export default HeaderScholarships;

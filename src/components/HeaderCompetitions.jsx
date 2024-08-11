import PropTypes from "prop-types";

const HeaderCompetitions = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-28 px-16 bg-[url('/public/header--54@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-background-color-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start max-w-[776px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[150%] font-semibold">Discover</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-37xl">
            <b className="self-stretch relative leading-[120%]">
              Unleash Your Potential
            </b>
            <div className="self-stretch relative text-lg leading-[150%]">
              Explore the exciting future competitions that could be hosted or
              attended by the Franklin High school STEM club, or other school clubs. 
              Keep in mind that each competition could require a registration fee, 
              so it may or may not be an option if there is no funding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderCompetitions.propTypes = {
  className: PropTypes.string,
};

export default HeaderCompetitions;

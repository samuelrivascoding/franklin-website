import { useCallback } from "react";
import PropTypes from "prop-types";

const CTALeadership = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScVxx6TPlMXprHEG4kbw06DvaZmb2rDnASlFHnK-0VPFofCGQ/viewform?usp=sf_link"
    );
  }, []);

  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 ${className}`}
    >
      <section className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[760px] text-center text-29xl text-link-primary font-heading-desktop-h5">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit">
            We are currently accepting leadership positions! Over 24 leadership
            positions available!
          </h1>
          <p className="m-0 self-stretch relative text-lg leading-[150%]">
            Simply apply to form!
          </p>
        </div>
        <button
          className="cursor-pointer py-3 px-6 bg-link-primary rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-link-primary hover:bg-gray-300"
          onClick={onButtonClick}
        >
          <div className="relative text-base leading-[150%] font-heading-desktop-h5 text-background-color-primary text-left">
            Apply
          </div>
        </button>
      </section>
    </section>
  );
};

CTALeadership.propTypes = {
  className: PropTypes.string,
};

export default CTALeadership;

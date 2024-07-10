import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CTAScholarship = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfQH81EdQk3oRLiguFzxUePPr2ZFhsWvnyP5UTOOKgXg_A61w/viewform?usp=sf_link"
    );
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/scholarships");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 ${className}`}
    >
      <section className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] text-left text-29xl text-link-primary font-heading-desktop-h5">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[316px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
              Apply for the Franklin Highschool Class of 2028 STEM Scholarship
              today!
            </h1>
            <p className="m-0 self-stretch relative text-lg leading-[150%]">
              Participate in STEM now and your future self will thank you
            </p>
          </div>
          <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px] text-base">
            <button
              className="cursor-pointer py-3 px-6 bg-link-primary rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-link-primary hover:bg-gray-300"
              onClick={onButtonClick}
            >
              <div className="relative text-base leading-[150%] font-heading-desktop-h5 text-background-color-primary text-left">
                Apply
              </div>
            </button>
            <div
              className="rounded-xl flex flex-row items-center justify-center py-3 px-6 cursor-pointer border-[1px] border-solid border-link-primary hover:mix-blend-darken hover:bg-gray-200"
              onClick={onButtonContainerClick}
            >
              <div className="relative leading-[150%]">
                Learn more about scholarships
              </div>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[400px] object-cover min-w-[436px]"
          alt=""
          src="/placeholder-image2@2x.png"
        />
      </section>
    </section>
  );
};

CTAScholarship.propTypes = {
  className: PropTypes.string,
};

export default CTAScholarship;

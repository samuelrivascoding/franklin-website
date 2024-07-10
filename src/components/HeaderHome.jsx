import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderHome = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScvFyIkFc_5ID9p3-MIUhFcUfrT2DTIHSg5gg_e1ZH1Df5QOQ/viewform?usp=sf_link"
    );
  }, []);

  return (
    <section
      className={`self-stretch h-[900px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-[45px] box-border bg-[url('/public/header--5@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-37xl text-background-color-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="w-[560px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[24px] max-w-[560px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            Join the Franklin High school STEM Club today!
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Learn about STEM today!
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
          <button
            className="cursor-pointer py-3 px-6 bg-link-primary rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-link-primary hover:bg-gray-300"
            onClick={onButtonClick}
          >
            <div className="relative text-base leading-[150%] font-heading-desktop-h5 text-background-color-primary text-left">
              Learn more
            </div>
          </button>
          <button
            className="cursor-pointer py-3 px-6 bg-[transparent] rounded-xl flex flex-row items-center justify-center mix-blend-lighten border-[1px] border-solid border-background-color-primary hover:bg-gray-100"
            onClick={onButtonClick1}
          >
            <div className="relative text-base leading-[150%] font-heading-desktop-h5 text-background-color-primary text-left">
              Apply to be member
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

HeaderHome.propTypes = {
  className: PropTypes.string,
};

export default HeaderHome;

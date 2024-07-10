import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CTAJoin = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScvFyIkFc_5ID9p3-MIUhFcUfrT2DTIHSg5gg_e1ZH1Df5QOQ/viewform?usp=sf_link"
    );
  }, []);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 text-left text-29xl text-link-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[316px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch relative leading-[120%]">
              Join our club and compete!
            </b>
            <div className="self-stretch relative text-lg leading-[150%]">
              Participate in upcoming competitions to showcase your skills and
              win prizes. Join teams at school to compete
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px] text-base text-background-color-primary">
            <div
              className="rounded-xl bg-link-primary flex flex-row items-center justify-center py-3 px-6 cursor-pointer border-[1px] border-solid border-link-primary hover:bg-gray-300"
              onClick={onButtonContainerClick}
            >
              <div className="relative leading-[150%]">Join</div>
            </div>
            <div
              className="rounded-xl flex flex-row items-center justify-center py-3 px-6 cursor-pointer text-link-primary border-[1px] border-solid border-link-primary hover:mix-blend-darken hover:bg-gray-200"
              onClick={onButtonContainerClick1}
            >
              <div className="relative leading-[150%]">Learn More</div>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[400px] object-cover min-w-[436px]"
          alt=""
          src="/placeholder-image18@2x.png"
        />
      </div>
    </section>
  );
};

CTAJoin.propTypes = {
  className: PropTypes.string,
};

export default CTAJoin;

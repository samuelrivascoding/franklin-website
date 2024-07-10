import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar8Drawer = ({ className = "", onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLinkOneTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkTwoTextClick = useCallback(() => {
    navigate("/scholarships");
  }, [navigate]);

  const onLinkThreeTextClick = useCallback(() => {
    navigate("/competitions");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScvFyIkFc_5ID9p3-MIUhFcUfrT2DTIHSg5gg_e1ZH1Df5QOQ/viewform?usp=sf_link"
    );
    onClose && onClose();
  }, []);

  return (
    <div
      className={`w-[375px] h-full relative bg-background-color-primary overflow-hidden flex flex-col items-center justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-base text-link-primary font-heading-desktop-h5 ${className}`}
      data-animate-on-scroll
    >
      <div className="self-stretch h-24 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 pr-3 pl-5 box-border">
        <div className="flex flex-row items-center justify-start">
          <img
            className="w-[74px] relative h-14 overflow-hidden shrink-0"
            alt=""
            src="/company-logo.svg"
          />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-4 px-5 pb-40 gap-[24px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-center py-3 px-0">
            <div
              className="relative leading-[150%] cursor-pointer"
              onClick={onLinkOneTextClick}
            >
              About Club
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-3 px-0">
            <div
              className="relative leading-[150%] cursor-pointer"
              onClick={onLinkTwoTextClick}
            >
              Scholarship Fund
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-3 px-0">
            <div
              className="relative leading-[150%] cursor-pointer"
              onClick={onLinkThreeTextClick}
            >
              Competitions
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center pt-6 px-0 pb-0 text-background-color-primary">
          <div
            className="self-stretch rounded-xl bg-link-primary flex flex-row items-center justify-center py-2 px-5 cursor-pointer border-[1px] border-solid border-link-primary hover:bg-gray-300"
            onClick={onButtonContainerClick}
          >
            <div className="relative leading-[150%]">Join</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar8Drawer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Navbar8Drawer;

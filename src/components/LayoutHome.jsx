import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LayoutHome = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/competitions");
  }, [navigate]);

  const onButtonContainerClick2 = useCallback(() => {
    navigate("/scholarships");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 text-left text-base text-link-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px]">
        <div className="flex-1 flex flex-col items-start justify-start py-2 px-0 box-border gap-[32px] min-w-[248px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <img
              className="w-12 relative h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon--code@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <h3 className="m-0 self-stretch relative text-5xl leading-[140%] font-bold font-inherit">
                Learn more about STEM
              </h3>
              <div className="self-stretch relative leading-[150%]">
                Welcome to the Franklin High School STEM Club! Whether you’re an
                aspiring physicist, an experienced programmer, or interested in
                STEM, our club is the perfect place to explore the exciting
                world of science and technology. Join us to learn, create, and
                innovate with like-minded students who share a passion for
                technology.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div
                  className="flex flex-row items-center justify-center gap-[8px] cursor-pointer"
                  onClick={onButtonContainerClick}
                >
                  <div className="relative leading-[150%]">
                    Learn more about club
                  </div>
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon--chevronright@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <img
              className="w-12 relative h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon--star@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative text-5xl leading-[140%]">
                Participate in competitions
              </b>
              <div className="self-stretch relative leading-[150%]">
                {" "}
                Participate in exciting STEM competitions that challenge your
                problem-solving skills.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div
                  className="flex flex-row items-center justify-center gap-[8px] cursor-pointer"
                  onClick={onButtonContainerClick1}
                >
                  <div className="relative leading-[150%]">
                    Learn more about competitions available
                  </div>
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icon--chevronright@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <img
              className="w-12 relative h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon--money@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <h3 className="m-0 self-stretch relative text-5xl leading-[140%] font-bold font-inherit">
                Scholarship Fund for the Class of 2028
              </h3>
              <div className="self-stretch relative leading-[150%]">
                In order to increase STEM involvement in the community, we have
                started a 500 dollar scholarship fund for Freshmen!
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div
                  className="flex flex-row items-center justify-center gap-[8px] cursor-pointer"
                  onClick={onButtonContainerClick2}
                >
                  <div className="relative leading-[150%]">
                    Learn more about Scholarship Fund
                  </div>
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[400px] object-cover min-w-[248px]"
            alt=""
            src="/placeholder-image@2x.png"
          />
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[400px] object-cover min-w-[248px]"
            alt=""
            src="/placeholder-image1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

LayoutHome.propTypes = {
  className: PropTypes.string,
};

export default LayoutHome;

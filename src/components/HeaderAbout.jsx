import { useMemo } from "react";
import PropTypes from "prop-types";

const HeaderAbout = ({
  className = "",
  header54BackgroundImage,
  franklinHighSchoolMargin,
  franklinHighSchoolFontWeight,
  learnAboutTheFranklinSTEM,
}) => {
  const header54Style = useMemo(() => {
    return {
      backgroundImage: header54BackgroundImage,
    };
  }, [header54BackgroundImage]);

  const franklinHighSchoolStyle = useMemo(() => {
    return {
      margin: franklinHighSchoolMargin,
      fontWeight: franklinHighSchoolFontWeight,
    };
  }, [franklinHighSchoolMargin, franklinHighSchoolFontWeight]);

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-28 px-16 bg-[url('/public/header--54@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-37xl text-background-color-primary font-heading-desktop-h5 ${className}`}
      style={header54Style}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[760px]">
        <h1
          className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit"
          style={franklinHighSchoolStyle}
        >
          Franklin High school STEM Club
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">
          {learnAboutTheFranklinSTEM}
        </div>
      </div>
    </section>
  );
};

HeaderAbout.propTypes = {
  className: PropTypes.string,
  learnAboutTheFranklinSTEM: PropTypes.string,

  /** Style props */
  header54BackgroundImage: PropTypes.any,
  franklinHighSchoolMargin: PropTypes.any,
  franklinHighSchoolFontWeight: PropTypes.any,
};

export default HeaderAbout;

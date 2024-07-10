import PropTypes from "prop-types";

const LayoutAbout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 text-left text-21xl text-link-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[360px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            Empowering students to explore the exciting world of STEM.
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            The Franklin High school STEM Club is dedicated to fostering a
            passion for science, math, engineering, and technology among
            students. We aim to equip our members with the skills, knowledge,
            and work ethic needed to thrive in STEM related fields
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[640px] object-cover min-w-[384px]"
          alt=""
          src="/placeholder-image3@2x.png"
        />
      </div>
    </section>
  );
};

LayoutAbout.propTypes = {
  className: PropTypes.string,
};

export default LayoutAbout;

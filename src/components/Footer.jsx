import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCompanyLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutClubClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onScholarshipFundClick = useCallback(() => {
    navigate("/scholarships");
  }, [navigate]);

  const onCompetitionsClick = useCallback(() => {
    navigate("/competitions");
  }, [navigate]);

  return (
    <footer
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-20 px-16 gap-[80px] ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[32px]">
        <img
          className="w-[74px] relative h-14 overflow-hidden shrink-0 object-cover cursor-pointer"
          alt=""
          src="/company-logo1@2x.png"
          onClick={onCompanyLogoImageClick}
        />
        <nav className="m-0 w-[493px] flex flex-row items-start justify-center gap-[32px] text-left text-base text-link-primary font-heading-desktop-h5">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[150%] font-semibold text-[inherit]"
            to="/about"
            onClick={onAboutClubClick}
          >
            About Club
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[150%] font-semibold text-[inherit]"
            to="/scholarships"
            onClick={onScholarshipFundClick}
          >
            Scholarship Fund
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[150%] font-semibold text-[inherit]"
            to="/competitions"
            onClick={onCompetitionsClick}
          >
            Competitions
          </Link>
        </nav>
      </div>
      <footer className="self-stretch flex flex-col items-center justify-start gap-[32px] text-left text-sm text-link-primary font-heading-desktop-h5">
        <div className="self-stretch relative bg-link-primary box-border h-px border-[1px] border-solid border-link-primary" />
        <div className="self-stretch flex flex-row items-start justify-center gap-[73px]">
          <div className="relative leading-[150%]">
            © 2024 Franklin Highschool Computer Science Club. All rights
            reserved.
          </div>
          <div className="hidden flex-row items-start justify-start gap-[24px]">
            <div className="relative [text-decoration:underline] leading-[150%]">
              Privacy Policy
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Terms of Service
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Cookies Settings
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

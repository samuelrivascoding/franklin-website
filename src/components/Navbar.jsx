import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar8Drawer from "./Navbar8Drawer";
import PortalDrawer from "./PortalDrawer";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isNavbar8DrawerOpen, setNavbar8DrawerOpen] = useState(false);

  const onCompanyLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkOneContainerClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLinkTwoContainerClick = useCallback(() => {
    navigate("/scholarships");
  }, [navigate]);

  const onLinkThreeContainerClick = useCallback(() => {
    navigate("/competitions");
  }, [navigate]);

  const openNavbar8Drawer = useCallback(() => {
    setNavbar8DrawerOpen(true);
  }, []);

  const closeNavbar8Drawer = useCallback(() => {
    setNavbar8DrawerOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScvFyIkFc_5ID9p3-MIUhFcUfrT2DTIHSg5gg_e1ZH1Df5QOQ/viewform?usp=sf_link"
    );
  }, []);

  return (
    <>
      <header
        className={`self-stretch bg-background-color-primary h-[72px] overflow-hidden shrink-0 flex flex-col items-start justify-start ${className}`}
      >
        <header className="self-stretch box-border h-[72px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 px-16 border-b-[1px] border-solid border-link-primary">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="w-[77px] relative h-14 overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src="/company-logo@2x.png"
              onClick={onCompanyLogoImageClick}
            />
            <nav className="m-0 overflow-hidden flex flex-row items-center justify-end py-0 px-8 gap-[32px] text-left text-base text-link-primary font-heading-desktop-h5 sm:hidden mq756:hidden">
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onLinkOneContainerClick}
              >
                <div className="relative leading-[150%]">About Club</div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onLinkTwoContainerClick}
              >
                <div className="relative leading-[150%]">Scholarship Fund</div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onLinkThreeContainerClick}
              >
                <div className="relative leading-[150%]">Competitions</div>
              </div>
            </nav>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative overflow-hidden shrink-0 hidden mq756:flex"
              onClick={openNavbar8Drawer}
            >
              <img
                className="absolute h-3/6 w-[66.67%] top-[25%] right-[16.67%] bottom-[25%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/icon.svg"
              />
            </button>
            <button
              className="cursor-pointer py-2 px-5 bg-link-primary rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-link-primary hover:bg-gray-300 sm:hidden mq756:hidden"
              onClick={onButtonClick}
            >
              <div className="relative text-base leading-[150%] font-heading-desktop-h5 text-background-color-primary text-left">
                Join
              </div>
            </button>
          </div>
        </header>
      </header>
      {isNavbar8DrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbar8Drawer}
        >
          <Navbar8Drawer onClose={closeNavbar8Drawer} />
        </PortalDrawer>
      )}
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

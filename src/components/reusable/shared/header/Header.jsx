import { useState } from "react";
import logoIcon from "~/assets/icons/logo.svg";
import { headerLinks } from "~/constants/headerLinks";
import Button from "~/components/ui/button/Button";
import userIcon from "~/assets/icons/user.svg";
import arrowIcon from "~/assets/icons/arrow-down.svg";
import burgerIcon from "~/assets/icons/burger-menu.svg";
import closeIcon from "~/assets/icons/close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="w-full flex flex-col items-end justify-start px-4">
        {/* Mobile header */}
        <div className="w-full flex items-center justify-between  lg:hidden">
          <img
            src={logoIcon}
            alt="Logo"
            width={56}
            height={56}
            className="ml-4 h-14 w-14 shrink-0"
            loading="lazy"
            decoding="async"
          />

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <img
              src={isMenuOpen ? closeIcon : burgerIcon}
              alt={isMenuOpen ? "Close Icon" : "Burger Icon"}
              loading="lazy"
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="w-full max-w-[300px] pb-4 lg:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {headerLinks.map(({ id, icon, title, active }) => (
                <div
                  key={id}
                  className={`flex items-center gap-2 p-3 cursor-pointer ${
                    active ? "bg-red-gradient" : "bg-transparent"
                  }`}
                >
                  <img src={icon} alt={title} loading="lazy" />
                  <span className="text-white">{title}</span>
                </div>
              ))}
            </div>

            <div className="my-4 h-[1px] w-full bg-red-gradient" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base font-normal text-white uppercase text-nowrap">
                  Support Line
                </p>
                <p className="text-base font-normal text-white text-nowrap">
                  +1 000 000 0000
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="red" className="!py-2 w-full !shrink-0">
                  Login
                </Button>
                <Button variant="white" className="!py-2 w-full">
                  Join
                </Button>
              </div>

              <div className="w-full flex items-center justify-between gap-1 rounded-full border border-gold p-3">
                <img src={userIcon} alt="User Icon" loading="lazy" />
                <img src={arrowIcon} alt="Arrow Icon" loading="lazy" />
              </div>
            </div>
          </div>
        )}

        {/* Desktop top links */}
        <div className="hidden w-full lg:flex items-center gap-2.5 px-11">
          {headerLinks.map(({ id, icon, title, active }) => (
            <div
              key={id}
              className={`flex items-center gap-2 p-2 cursor-pointer ${
                active ? "bg-red-500" : ""
              }`}
            >
              <img src={icon} alt={title} loading="lazy" />
              <span className="text-white">{title}</span>
            </div>
          ))}
        </div>

        {/* Desktop divider */}
        <div className="hidden lg:block w-full h-[1px] bg-red-gradient" />

        {/* Desktop main header */}
        <div className="hidden lg:flex w-full items-center justify-between px-11 py-2">
          <img
            src={logoIcon}
            alt="Logo"
            width={56}
            height={56}
            className="h-14 w-14 shrink-0"
            loading="lazy"
            decoding="async"
          />

          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-end gap-1">
              <p className="text-base font-normal text-white uppercase text-nowrap">
                Support Line
              </p>
              <p className="text-base font-normal text-white text-nowrap">
                +1 000 000 0000
              </p>
            </div>

            <Button variant="red" className="!py-2  !shrink-0">
              Login
            </Button>
            <Button variant="white" className="!py-2">
              Join
            </Button>

            <div className="!w-[56px] flex items-center justify-center shrink-0 gap-1 rounded-full border border-gold p-1">
              <img src={userIcon} alt="User Icon" loading="lazy" />
              <img src={arrowIcon} alt="Arrow Icon" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

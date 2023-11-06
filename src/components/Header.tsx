import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext, SearchContextType } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext<SearchContextType>(SearchContext);
  const [header, setHeader] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = (): void => {
      // header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 700) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${header ? "bg-white shadow-md py-2" : `${desktopMode ? "bg-transparent shadow-none py-4" : " bg-white bg-transparent shadow-none py-0 max-h-[80px]"}`} 
      fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 xl:h-[60px] xl:flex xl:items-center [80px]`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img
              src="src/assets/icons/Logo.svg"
              alt="Logo"
              width={120}
              height={64}
            />
          </Link>

          {/* Nav Open Menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${nav ? "max-h-max py-4 relative -top-10 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
            } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-semibold xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb:0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>

          <Link
            className="cursor-pointer"
            to="hotels"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Hotels
          </Link>

          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>

          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>

          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>

          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all hotels
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}

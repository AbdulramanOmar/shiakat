import logo from "../assets/logo.png";
import { navbarLinks } from "../assets/Data";
import { Link, useLocation } from "react-router-dom";
import { Key, useState } from "react";
import Search from "./Search";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className=" fixed bg-white shadow-sm top-0 left-0 z-50 w-full">
      <nav className="flex items-center container justify-between py-3 relative ">
        <div className="lg:hidden block ml-5">
          <FaBars
            className="text-3xl cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <div
          className={`fixed top-0 right-0 z-20 h-full w-[300px] bg-primary pt-10 px-5 transition-transform duration-500 ease-in-out 
            ${openMenu ? "translate-x-0" : "translate-x-[100%]"} shadow-lg`}
        >
          <RxCross2
            className="text-3xl cursor-pointer mb-5"
            onClick={() => setOpenMenu(false)}
          />
          <Search style="border rounded-lg mb-5" />
          {navbarLinks.map((link: { title: string; href: string }, i: Key) => (
            <Link
              key={i}
              to={link.href}
              className={`block py-2 ${
                pathname === link.href ? "font-black" : "font-normal"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="sm:w-[160px] w-[126px]">
          <img
            src={logo}
            alt="شياكتك-logo"
            className="w-full h-full object-cover -mt-3"
          />
        </div>
        <ul className="hidden lg:flex items-center gap-5 ml-5">
          {navbarLinks.map((link: { title: string; href: string }, i: Key) => (
            <li key={i}>
              <Link
                to={link.href}
                className={`${
                  pathname === link.href ? "font-black" : "font-normal"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Search style="hidden lg:block flex-1 mx-5" />
        <div className="flex items-center gap-3 mr-5">
          <Link to="/cart">
            <img src="/images/cart.png" alt="cart-" />
          </Link>
          <Link to="/profile">
            <img src="/images/profile.png" alt="profile" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

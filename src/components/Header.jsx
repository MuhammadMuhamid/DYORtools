import { NavLink } from "react-router";
import { useState } from "react";
// import logo from "../assets/Images/headerbtnbg.png";

import logo from "../assets/Images/logo2.png";
import hbg from "../assets/Images/headerbtnbg.png";
import hbg2 from "../assets/Images/headerbtnbg2.png";
import img2 from "../assets/Images/sec1i1.png";

import img3 from "../assets/Images/sec1i2.png";

import img4 from "../assets/Images/sec1i3.png";

import img5 from "../assets/Images/sec1i4.png";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };
  return (
    <div className="bg-[#020219]  ">
      <div className="relative z-10 md:max-w-[1200px] xl:px-10 max-w-[350px] mx-auto flex justify-between items-center py-5">
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[50%] max-md:w-[50%] max-md:ml-4"
            />
          </NavLink>
        </div>
        <nav className={`${show ? "menu-mobile" : "menu-web"}  `}>
          {/* <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[50%]" />
          </NavLink>
        </div> */}
          <div className=" flex items-center justify-center">
            <ul className="flex gap-4 items-center   justify-center  ">
              <div>
                <li className="text-xl">
                  <NavLink to="/">HOME</NavLink>
                </li>
              </div>

              <div className="relative max-md:hidden flex-center px-5    ">
                <div className="absolute z-0 w-[100%]">
                  <img className="w-[100%]" src={hbg} alt="" />
                </div>

                <NavLink className="" to="/pricing">
                  <p className="text-dpink text-sm  font-bold"> PRICING </p>
                </NavLink>
              </div>
              <div className="relative max-md:hidden flex-center px-2 md:mt-0  mt-7     ">
                <div className="absolute z-0 w-[100%]">
                  <img className="" src={hbg2} alt="" />
                </div>

                <NavLink className=" z-1   w-[100%] " to="/pricing">
                  <p className="w-[130px] ml-1 text-dpink font-bold text-sm">
                    {" "}
                    CONNECT WALLET{" "}
                  </p>
                </NavLink>
              </div>
              <div>
                <li className="text-sm ml-2">
                  <NavLink to="/">
                    <img className="w-8" src={img2} alt="" />
                  </NavLink>
                </li>
              </div>
              <div>
                <li className="text-sm">
                  <NavLink to="/">
                    <img className="w-8" src={img5} alt="" />
                  </NavLink>
                </li>
              </div>
              <div>
                <li className="text-sm">
                  <NavLink to="/">
                    <img className="w-8" src={img4} alt="" />
                  </NavLink>
                </li>
              </div>
              <div>
                <li className="text-sm">
                  <NavLink to="/">
                    <img className="w-8" src={img3} alt="" />
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="ham-menu ">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu size={25} />
          </button>
        </div>
        <div className="flex flex-col hidden max-md:hidden max-md:gap-3 max-md:pr-3">
          <div className="hbgimg  w-[110px]   bg-[url('../assets/Images/headerbtnbg.png')] bg-cover  ">
            <li className="text-dpink text-sm py-[12px] px-1 list-none   text-center  ">
              <NavLink to="/pricing">PRICING</NavLink>
            </li>
          </div>
          <div className="hbgimg  w-[110px]   bg-[url('../assets/Images/headerbtnbg.png')] bg-cover  ">
            <li className="text-dpink text-sm list-none  py-[12px] px-1 mt-2   text-center  ">
              <NavLink to="/pricing">DECK</NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

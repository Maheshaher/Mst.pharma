import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { ContextApi } from "../context/ContextApi";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const { menu, setMenu, isopen, setIsOpen } = useContext(ContextApi);
  function menuHandler() {
    setMenu(!menu);
  }
  function toggle() {
    setIsOpen(!isopen);
  }

  return (
    <div>
      <nav className=" nav flex lg:justify-between lg:px-24 md:justify-around  lg:w-screen  lg:mr-0 h-20 items-center shadow-sm fixed top-0 left-0 right-0 z-40 ">
        <div className="flex  justify-between ">
          <div className="p-3 h-[45px] w-[45px] ">
            <img className="h-[30px] w-[30px] " src="/images/icon1.png"></img>
          </div>
          <p className=" tracking-[2px] lg:tracking-[7px] text-black font-bold text-xl w-[150px] md:w-[200px] lg:w-auto lg:mt-2 md:mt-2">
            MST PHARMA
          </p>
        </div>
        <div className=" ml-[190px] sm:ml-[400px] lg:invisible md:invisible md:absolute z-50">
          <button onClick={menuHandler} className="text-xl">
            {menu ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
       

        <div className="invisible md:visible lg:visible md:mr-[] lg:mr-0">
          <ul className="flex gap-8 md:gap-5 text-l text-black font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Store">Store</NavLink>
            </li>
            <li className="flex  ">
              <div>Dropdown</div>
              <div className="">
                <RiArrowDropDownLine onClick={toggle} className="text-[27px]" />
                {isopen && (
                  <div className="absolute right-[235px]  mt-7 z-10   bg-stone-700 opacity-[90%]">
                    <ul className=" flex flex-col gap-3 justify-center text-white">
                      <li className="border-white  border-b-[1px] text-center p-2">Supplements</li>
                      <li className="border-white  border-b-[1px] text-center pb-2 ">Vitamins</li>
                      <li className="border-white  border-b-[1px] text-center pb-2 ">Diet &amp; Nutrition</li>
                      <li className="border-white  text-center pb-2 ">Tea &amp; Coffee</li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
      {menu && (
        <div className=" h-screen fixed z-20 right-0 top-20 left-0 lg:invisible  bg-stone-700 opacity-[90%]">
          <div className="">
            <ul className=" flex flex-col gap-6 text-l text-white font-semibold  items-center mt-[0px] p-6">
              <li
                onClick={menuHandler}
                className="border-white  border-b-[1px] pb-5 w-screen text-center"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={menuHandler}
                className="border-white  border-b-[1px] pb-5 w-screen text-center"
              >
                <NavLink to="/Store">Store</NavLink>
              </li>
              <li className="border-white  border-b-[1px] pb-5 w-screen text-center">
                <div onClick={toggle}>
                  Dropdown
                  {isopen && (
                    <ul className="mt-5">
                      <li className="border-white  border-y-[1px]  w-screen text-center  p-5">
                        Supplements
                      </li>
                      <li className="border-white  border-y-[1px]  w-screen text-center p-5">
                        Vitamins
                      </li>
                      <li className="border-white   border-y-[1px]  w-screen text-center p-5">
                        Diet &amp; Nutrition
                      </li>
                      <li className=" mt-4">Tea &amp; Coffee</li>
                    </ul>
                  )}
                </div>
              </li>
              <li
                onClick={menuHandler}
                className="border-white  border-b-[1px] pb-5 w-screen text-center"
              >
                <NavLink to="/About">About</NavLink>
              </li>
              <li
                onClick={menuHandler}
                className="border-white  border-b-[1px] pb-5 w-screen text-center"
              >
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isopen);
  }

  return (
    <nav className=" nav flex justify-around width-[1157px] h-20 items-center shadow-sm fixed top-0 left-0 right-0 z-20">
      <div className="flex gap-1">
      <div className="p-1">
          <img  className="h-[25px] w-[25px]" src="/images/icon1.png"></img>
        </div>
        <p className="tracking-[7px] text-black font-bold text-xl">
          MST PHARMA
        </p>
      </div>
      <div>
        <ul className="flex gap-8 text-l text-black font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Store">Store</NavLink>
          </li>
          <li className="block">
            <div onClick={toggle}>
              Dropdown
              {isopen && (
                <ul className=" absolute mt-6 z-10 ">
                  <li>Supplements</li>
                  <li>Vitamins</li>
                  <li>Diet &amp; Nutrition</li>
                  <li>Tea &amp; Coffee</li>
                </ul>
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
  );
}

export default Navbar;

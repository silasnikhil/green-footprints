import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router";

import "./NavBar.css";

const NavBar = () => {

  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pt-8 pb-8 pl-24 pr-24">
      <div className="flex-1 flex justify-start items-center">
        <div className="navbar-links_container">
          <p>
            <a href="#home" className="text-indigo-900">
              Home
            </a>
          </p>
          <button className="text-indigo-900" type="button" onClick={() => navigate("/usecase")}>
          Usecase
        </button>
          
          
          <p>
          
            
          </p>  
        </div>
      </div>
      <div className="navbar-sign text-indigo-900">
        <button type="button" onClick={() => navigate("/dashboard")}>
          Green Cloud!
        </button>
      </div>
      <div className="navbar-menu text-indigo-900">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a className="text-indigo-900" href="#home">
                  Home
                </a>
              </p>
              <p>
                <a className="text-indigo-900" href="#usecase">
                  Use Case
                </a>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p className="text-indigo-900">Sign in</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

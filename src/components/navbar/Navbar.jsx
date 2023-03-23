import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMobMenu, setToggleMobMenu] = useState(false);

  return (
    <div className="navbar_container">
      <div className="img_links_container">
        <div className="nav_img">
          <img src={logo} alt="" />
        </div>
        <div className="nav_links">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What Is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">Open Ai</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>

      <div className="nav_sign_in">
        <p>Sign In</p>
        <button>Sign up</button>
      </div>

      <div className="navbar_container_sm">
        {toggleMobMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMobMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMobMenu(true)}
          />
        )}
        {toggleMobMenu && (
          <div className="nav_list_sm scale-up-center">
            <div className="nav_links_sm">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What Is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open Ai</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>

            <div className="nav_sign_in_sm">
              <p>Sign In</p>
              <button>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col">
       <div className="flex lg:flex-row flex-col justify-between px-16 mb-8">
        <img src={logo} alt="" className="md:h-[120px] md:w-[250px] lg:h-[182px] mt-5" />

        <div className="hidden lg:flex flex-row gap-20 justify-between items-center text-white font-Poppins">
          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="flex gap-8 justify-between items-center text-[24px]">
          <Fa.FaFacebookF />
          <Fa.FaTwitter />
          <Fa.FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

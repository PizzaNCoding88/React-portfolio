// import React from "react";
import { LuTwitter, LuLinkedin, LuInstagram } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-[#222222] mt-8">
      <div className="bg-secondary w-4/5 h-[1px] mx-auto opacity-40"></div>
      <div className="w-4/5  mt-4 flex justify-center items-center mx-auto text-secondary">
        <MdCopyright className=" mr-1 pt-1 text-lg" />
        <p className="  text-sm">2023 - Umberto Nardiello</p>
      </div>
      <div className=" text-secondary w-4/5  my-4 flex justify-center gap-8 items-center mx-auto">
        <LuTwitter />
        <LuInstagram />
        <LuLinkedin />
      </div>
    </footer>
  );
};

export default Footer;

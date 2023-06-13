// import React from "react";
import { LuTwitter, LuLinkedin, LuGithub } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-[#222222] mt-8">
      <div className="bg-secondary w-4/5 h-[1px] mx-auto opacity-40"></div>

      <div className="sm:flex sm:justify-center sm:items-center sm:py-4">
        <div className="w-4/5 mt-4 flex justify-center items-center mx-auto text-secondary sm:mt-0">
          <MdCopyright className=" mr-1 pt-1 text-lg" />
          <p className="  text-sm">2023 - Umberto Nardiello</p>
        </div>
        <div className=" text-secondary w-4/5 my-4 flex justify-center gap-8 items-center mx-auto sm:my-0">
          <a
            href="https://twitter.com/dj_stewie"
            target="_blank"
            rel="noreferrer"
          >
            <LuTwitter />
          </a>
          <a
            href="https://github.com/PizzaNCoding88"
            target="_blank"
            rel="noreferrer"
          >
            <LuGithub />
          </a>
          <a
            href="https://uk.linkedin.com/in/umberto-nardiello-5633a152"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

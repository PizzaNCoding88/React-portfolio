import { LuTwitter, LuLinkedin, LuGithub } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="bg-secondary w-4/5 h-[1px] mx-auto opacity-40"></div>

      <div className="sm:flex sm:justify-center sm:items-center sm:py-4">
        <div className="w-4/5 mt-4 flexy mx-auto text-secondary sm:mt-0">
          <MdCopyright className=" mr-1 pt-1 text-lg" />
          <p className="text-sm sm:text-base xl:text-lg font-SecondaryF">
            2023 - Umberto Nardiello
          </p>
        </div>
        <div className=" text-secondary text-sm sm:text-base w-4/5 my-4 flexy gap-8 mx-auto sm:my-0 xl:text-lg">
          <a
            href="https://twitter.com/dj_stewie"
            target="_blank"
            rel="noreferrer"
            className="form-links"
            aria-label="Twitter"
          >
            <LuTwitter />
          </a>
          <a
            href="https://github.com/PizzaNCoding88"
            target="_blank"
            rel="noreferrer"
            className="form-links"
            aria-label="GitHub"
          >
            <LuGithub />
          </a>
          <a
            href="https://uk.linkedin.com/in/umberto-nardiello-5633a152"
            target="_blank"
            rel="noreferrer"
            className="form-links"
            aria-label="LinkedIn"
          >
            <LuLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import line from "../assets/Line 5.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full bg-[#1E1E1E] text-white font-imprima py-[53px] mt-auto">
      <div className="flex gap-1 md:gap-10  text-center">
        <p>About</p>
        <img src={line} />
        <p>Vlog</p>
        <img src={line} />
        <p>Contact</p>
        <img src={line} />
        <p>Report broken links</p>
        <img src={line} />
        <p>Desclaimer</p>
      </div>
      <p>
        Copywrite <span className="capitalize font-french ">filmagnet </span>{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;

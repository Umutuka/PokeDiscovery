import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const Additionals = () => {
  return (
    <div className="footer-container">
      {/* Contact SECTION */}

      <div className="Contact mb-5 flex flex-col items-center text-white justify-center border-b-4 bg-gradient-to-r from-slate-300 pt-16 pb-16 font-thin">
        <h1 className="text-center text-3xl">Contact me</h1>
        <p className="mt-5 text-center">
          {" "}
          If you wish to contribute in any way to the website
        </p>
        <p className="text-center">or to give ideas,</p>
        <p>feel through to contact me through email.</p>

        <button className="Email mt-5 flex flex-col items-center rounded-lg border bg-slate-200 p-2 text-2xl hover:bg-purple-200">
          <a href="mailto:umut2000@hotmail.co.uk" target="blank">
            Email me
          </a>
        </button>
      </div>

      {/* Rights SECTION */}

      <div className="Contact text-center font-thin text-white">
        <h1 className="mt-14 mb-5 flex items-center justify-center pb-3 text-3xl ">
          Umut Eroglulari . Developer
        </h1>
        <button className="Email mt-5 mr-3 items-center justify-between rounded-lg border bg-slate-200 p-2 text-2xl hover:bg-purple-200">
          <a
            href="https://www.linkedin.com/in/umut-eroglulari-37a236244/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={40}></AiFillLinkedin>
          </a>
        </button>
        <button className="Email mt-5 mr-3 rounded-lg border bg-slate-200 p-2 text-2xl hover:bg-purple-200">
          <AiFillGithub size={40}></AiFillGithub>
        </button>
        <button className="Email mt-5 mb-8 rounded-lg border bg-slate-200 p-2 text-2xl hover:bg-purple-200">
          <a href="mailto:umut2000@hotmail.co.uk" target="blank">
            <AiFillMail size={40}></AiFillMail>
          </a>
        </button>
        <p className="text-2xl">@2023 Umut Eroglulari. All rights reserved</p>
      </div>
    </div>
  );
};

export default Additionals;

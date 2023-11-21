import React from "react";
// import Navbar from "../Navbar";

const Home = () => {
  return (
    <div>
      {/* INTRO SECTION */}

      <div className="intro mt-14 flex items-center justify-between font-thin  ">
        <header className="w-3/5 pl-10 motion-safe:animate-fadeIn">
          <h1 className="text-4xl">
            Learn To Code With{" "}
            <span className="font-bold text-cyan-400">
              Programming Quizardo
            </span>{" "}
          </h1>

          <p className="mt-4 text-2xl motion-safe:animate-fadeIn">
            {" "}
            We provide more than 1 programming language quizes , along with
            resources which may help you along the way! Start your journey with
            us, today, and get the basics down as quick as possible!
          </p>
        </header>
        <div className="w-2/5 pl-20">
          <img src="Pictures/rotatingEarth.gif" alt="sunset"></img>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,154.7C560,171,640,245,720,256C800,267,880,213,960,176C1040,139,1120,117,1200,122.7C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      {/* HTML SECTION */}

      <div className="HTML flex items-center justify-between bg-white pb-32 font-thin">
        <header className="w-3/5 pl-10">
          <h1 className="mt-3 align-middle text-4xl">
            {" "}
            <span className="text-black-700 font-semibold">HTML</span>
          </h1>
          <p className="mt-10 text-2xl">
            HTML is the standard markup language for creating web pages. This is
            essential for different features you want your site to show. It is
            essential to learn the different tags, elements and how to structure
            your html files. Through our global resources, you will be directed
            to various different websites and book sources to develop everything
            you need to know about HTML. Once you feel confident, you can take
            our HTML Quiz in order to know whether you have the relevant HTML
            skills.
          </p>


        </header>

        <div className="ml-20 w-5/5 rounded-lg bg-slate-700">
          <h3 className="text-center text-2xl ">HTML Example:</h3>
          <img
            className="w-96 h-96 rounded-b-lg object-fill"
            src="Pictures/html_example.png"
            alt="sunset"
          ></img>
        </div>
      </div>

      {/* CSS SECTION */}

      <div className="CSS flex items-center justify-between bg-slate-200 pb-32 pt-20 font-thin ">
        <header className="w-3/5 pl-10">
          <h1 className="mt-3 align-middle text-4xl">
            {" "}
            <span className="text-black-700 font-semibold ">CSS</span>
          </h1>
          <p className="mt-10 text-2xl">
            CSS is the language we use to style a web page. CSS stands for
            Cascading Syle sheets and is used to desecribe how HTML elements are
            to be displayed on the screen, paper, or in other media. You can use
            a style sheet to control the layout of various web pages of your
            website all at once. These are stored seperately from your other
            files (e.g html files). Through our global resources, you will be
            directed to various different websites and book sources to develop
            most of the knowledge you need to know about CSS. Once you feel
            confident, you can take our CSS quiz in order to knoww whether you
            have the relevant CSS skills.
          </p>


        </header>

        <div className="ml-20 w-5/5 object-fill rounded-lg bg-slate-700">
          <h3 className="text-center text-2xl ">CSS Example:</h3>
          <img className="h-96 w-96 rounded-b-lg object-fill" src="Pictures/css_example.jpg" alt="sunset"></img>
        </div>
      </div>

      {/* JAVASCRIPT SECTION */}

      <div className="JAVASCRIPT mt-0 flex items-center justify-between bg-slate-400 pb-32 pt-20 font-thin">
        <header className="w-3/5 pl-10">
          <h1 className="mt-3 align-middle text-4xl">
            {" "}
            <span className="text-black-700 font-semibold">JAVASCRIPT</span>
          </h1>
          <p className="mt-10 text-2xl">
            Javascript is the most popular programming language in the
            world.Being the programming language of the web, you usually combine
            this language with HTML and CSS. If you want to add behaviour or
            functions to your web pages, javascript is usually the way to go
            about this task.Through our global resources, you will be directed
            to various different websites and book sources to develop most of
            the knowledge you need to know about Javascript. Once you feel
            confident, you can take our Javascript quiz in order to knoww
            whether you have the relevant Javascript skills.
          </p>


        </header>

        <div className="w-5/5 ml-20 rounded-lg bg-slate-700">
          <h3 className="text-center text-2xl ">Javascript Example:</h3>
          <img className="h-96 w-96 rounded-b-lg object-fill" src="Pictures/javascript_example.png" alt="sunset"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

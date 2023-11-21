const About = () => {
  return (
    <div className="bg-slate-300 m-5 mt-10">
      <section className="m-5 ">
        <div className=" space-y-5 mb-5">
          <h1 className="pt-10 text-center font-bold ">About PokeDiscovery</h1>

          <p className="text-2xl">
            {" "}
            PokeDiscovery was created with only one feeling: <span className="font-bold">the love for the game.</span>I try to include the most important information as possible for people to use
            without digesting the non-important information about pokemon.
          </p>

          <p className="text-2xl">
            The website has a 'responsive' design which is a layout that proved to work well with mobile, as well as desktop. You will be able to see the various different tools I used in order to
            create this website, as well as links to other websites which helped me develop this project.
          </p>
        </div>
        <div className="text-2xl space-y-5 mb-5">
          <h2 className="text-2xl font-bold flex ">What does PokeDiscovery Include?</h2>

          <p>
            {" "}
            PokeDiscovery currently includes data on every pokemon up to generation 8. In order to include the latest generation, I would need to create my own api from scratch, which would take a
            very long time so I opted to use the famous, public RESTful PokeApi.
          </p>

          <p>We also have data on Abilities, Items, Stat Comparison, and a brief description of every single region on my main page.</p>
        </div>

        <div className="pb-5 text-2xl space-y-5">
          <h2 className="text-2xl font-bold flex ">Who is the Creator?</h2>

          <p>The creator is currently a recent graduate from university and goes by the name Umut Eroglulari. Below are his information.</p>

          <div className="border flex bg-slate-400 rounded-lg shadow-lg">
            <img className="w-56 bg-slate-600 p-10 border rounded-xl" src="https://drive.google.com/uc?export=view&id=1GZ1IX6ekHP7_XYDMjTHdoauCQF3N0UI1"></img>
            <ul className="text-3xl m-5 space-y-5">
              <li>Name : Umut Eroglulari</li>
              <li>Age: 22</li>
              <li>Occupation: Web/Game Developer</li>
              <li>Degree: BSc Computer Science</li>
              <li>Hobbies: Games, Movies, Cyber Security Developments, Programming</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex ">What tools did you use?</h2>
            <p>
              There were various tools that I used when creating this website. These include HTML, CSS , Javascript , React , TailwindCSS and Vite. In short, it was mostly a Front-end Project I
              created and will forever be in development because of Vast information the pokemon games bring. Unless more developers are keen in the websites development!
            </p>
            <img className="mx-auto my-auto mt-16" src="https://drive.google.com/uc?export=view&id=1atw9lGLmngYBQsN1vp8DK3VXr4hwzYNP"></img>
            <section className="flex justify-center m-10 items-center">
              <img className="w-56" src="https://drive.google.com/uc?export=view&id=1xOxxRJCZKHVO6fC9wzoOXcKcRrXgv5Wj"></img>
              <img className="w-56" src="https://drive.google.com/uc?export=view&id=1CuctT_7GZY7r6Sbo7tZPVX-F639n8Noi"></img>
              <img className="w-56" src="https://drive.google.com/uc?export=view&id=1FqYawlm33KMu8b7i8NtQuWN6Q3vX32j2"></img>
            </section>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex ">How can I contact you?</h2>

            <p className="mt-5">You may contact me from the footers on the website or you may contact me by filling out the form on the Contact page</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const ContentBar = () => {
  return (
    <div className=" bg-slate-300 rounded-lg m-5">
      <ul className="flex flex-wrap text-sm text-center justify-center">
        <li className="p-4 font-bold m-4 border-slate-600 border-r-4 text-2xl w-full sm:w-auto">
          Navigation:
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg text-2xl">
          <a href="#Kanto">Kanto</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg text-2xl">
          <a href="#Johto">Johto</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg text-2xl">
          <a href="#Hoenn">Hoenn </a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg text-2xl">
          <a href="#Sinnoh">Sinnoh</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg text-2xl">
          <a href="#Unova">Unova</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg  text-2xl">
          <a href="#Kalos">Kalos</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg  text-2xl">
          <a href="#Alola">Alola</a>
        </li>
        <li className="p-4 m-4 hover:text-red-600 bg-slate-600 border rounded-lg  text-2xl">
          <a href="#Galar">Galar</a>
        </li>
      </ul>
    </div>
  );
};

export default ContentBar;

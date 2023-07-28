import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="absolute top-0 z-10 flex w-full items-center justify-between py-4 pl-4 lg:py-8 md:portrait:py-8">
        <Link to={"/"}>
          <svg
            className="rounded-full duration-300 hover:shadow-[0_0_100px_10px] hover:shadow-white"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
          >
            <g>
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>

        <div
          className="cursor-pointer p-4 lg:hidden md:portrait:hidden"
          onClick={() => setShowMenu(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g className="fill-white">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </div>

        <ul className="hidden gap-10 bg-white/5 px-28 backdrop-blur-md lg:flex md:portrait:flex">
          <Link to={"/"}>
            <li className="cursor-pointer border-b-2 border-transparent py-8 duration-300 hover:border-white">
              <span className="font-bold">00</span> HOME
            </li>
          </Link>
          <Link to={"/destination"}>
            <li className="border-b-2 border-transparent py-8 duration-300 hover:border-white">
              <span className="font-bold">01</span> DESTINATION
            </li>
          </Link>
          <Link to={"/crew"}>
            <li className="border-b-2 border-transparent py-8 duration-300 hover:border-white">
              <span className="font-bold">02</span> CREW
            </li>
          </Link>
          <Link to={"/technology"}>
            <li className="mr-12 border-b-2 border-transparent py-8 duration-300 hover:border-white">
              <span className="font-bold">03</span> TECHNOLOGY
            </li>
          </Link>
        </ul>
      </nav>
      <aside
        className={`absolute right-0 z-20 duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-[200%]"
        } lg:hidden md:portrait:hidden`}
      >
        <ul
          onClick={() => setShowMenu(false)}
          className="flex h-screen flex-col gap-2 bg-white/5 fill-black backdrop-blur-md"
        >
          <li className="top-0 w-full cursor-pointer p-8">
            <svg
              className="text absolute right-0 mr-8"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
            >
              <g className="fill-white">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </li>
          <Link to={"/"}>
            <li className="border-b-2 border-transparent py-2 pl-8 duration-300 hover:border-white">
              <span className="font-bold">00</span> HOME
            </li>
          </Link>
          <Link to={"/destination"}>
            <li className="border-b-2 border-transparent py-2 pl-8 duration-300 hover:border-white">
              <span className="font-bold">01</span> DESTINATION
            </li>
          </Link>
          <Link to={"/crew"}>
            <li className="border-b-2 border-transparent py-2 pl-8 duration-300 hover:border-white">
              <span className="font-bold">02</span> CREW
            </li>
          </Link>
          <Link to={"/technology"}>
            <li className="mr-12 border-b-2 border-transparent py-2 pl-8 duration-300 hover:border-white">
              <span className="font-bold">03</span> TECHNOLOGY
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}

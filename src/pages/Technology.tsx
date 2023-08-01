import { useState } from "react";
import { technology } from "../../data/data.json";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router";
import useSwipe from "../hooks/useSwipe";

export default function Technology() {
  const [ technologyIndex, setTechnologyIndex ] = useState(0);
  const { height, width } = useWindowSize();

  function setTechnology() {
    switch (technologyIndex) {
      case 0:
        return "translate-x-0";
        break;
      case 1:
        return "-translate-x-[100%]";
        break;
      case 2:
        return "-translate-x-[200%]";
        break;

      default:
        break;
    }
  }

  const navigate = useNavigate();
  const swipeHandlers = useSwipe({
    onSwipedLeft: () =>
      setTechnologyIndex((prev) =>
        prev + 1 === technology.length ? prev : prev + 1
      ),
    onSwipedRight: () =>
      setTechnologyIndex((prev) => (prev !== 0 ? prev - 1 : prev)),
    onSwipedUp: () => navigate("/"),
    onSwipedDown: () => navigate("/crew"),
  });

  return (
    <main
      {...swipeHandlers}
      className="relative h-screen animate-pageLoad overflow-hidden bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      <ul className="absolute flex h-full">
        {technology.map((technology, i) => (
          <li
            key={i}
            className={`flex w-screen flex-col pt-20 lg:pt-40 md:portrait:pt-40 landscape:pl-6 landscape:md:pl-16 ${
              i === technologyIndex ? "scale-100" : "scale-50"
            } text-center transition-all duration-1000 ${setTechnology()}`}
          >
            <div className="mb-4 flex justify-center gap-4 tracking-[2px] landscape:justify-start">
              <h1 className="text-gray-400">03</h1>
              <h1>SPACE LAUNCH 101</h1>
            </div>
            <div className="flex h-full min-h-0 w-full min-w-0 flex-col landscape:flex-row-reverse landscape:gap-4 landscape:md:gap-12">
              <img
                className="m-auto max-h-full min-h-0 flex-grow object-contain 2xl:max-w-[30%] landscape:py-6"
                src={
                  height > width
                    ? technology.images.landscape
                    : technology.images.portrait
                }
                alt="technologyPhoto"
              />
              <div className="flex flex-col portrait:px-6 portrait:pb-6 portrait:md:mx-auto portrait:md:flex portrait:md:max-w-xl landscape:flex landscape:flex-row landscape:gap-6 landscape:py-6 landscape:md:m-auto landscape:md:max-w-lg landscape:md:gap-12">
                <div className="my-6 mb-4 flex justify-around gap-4 landscape:flex-col">
                  <span
                    className={`grid h-10 w-10 cursor-pointer place-content-center rounded-full border-[1px] border-white font-emphasis text-2xl duration-300 hover:bg-gray-400 hover:text-black portrait:md:h-16 portrait:md:w-16 landscape:md:h-16 landscape:md:w-16 ${
                      technologyIndex == 0
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setTechnologyIndex(0)}
                  >
                    1
                  </span>
                  <span
                    className={`grid h-10 w-10 cursor-pointer place-content-center rounded-full border-[1px] border-white font-emphasis text-2xl duration-300 hover:bg-gray-400 hover:text-black portrait:md:h-16 portrait:md:w-16 landscape:md:h-16 landscape:md:w-16 ${
                      technologyIndex == 1
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setTechnologyIndex(1)}
                  >
                    2
                  </span>
                  <span
                    className={`grid h-10 w-10 cursor-pointer place-content-center rounded-full border-[1px] border-white font-emphasis text-2xl duration-300 hover:bg-gray-400 hover:text-black portrait:md:h-16 portrait:md:w-16 landscape:md:h-16 landscape:md:w-16 ${
                      technologyIndex == 2
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setTechnologyIndex(2)}
                  >
                    3
                  </span>
                </div>
                <div className="portrait:sm:mb-8 landscape:text-left">
                  <h1 className="font-body">THE TERMINOLOGY...</h1>
                  <h1 className="my-2 font-emphasis text-3xl portrait:md:py-4 portrait:md:text-5xl landscape:md:py-4 landscape:md:text-[2.5rem]">
                    {technology.name.toUpperCase()}
                  </h1>
                  <p className="text-justify tracking-wide">
                    {technology.description}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

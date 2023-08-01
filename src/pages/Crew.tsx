import { useState } from "react";
import { crew } from "../../data/data.json";
import useSwipe from "../hooks/useSwipe";
import { useNavigate } from "react-router";

export default function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);

  function setCrew() {
    switch (crewIndex) {
      case 0:
        return "translate-x-0";
        break;
      case 1:
        return "-translate-x-[100%]";
        break;
      case 2:
        return "-translate-x-[200%]";
        break;
      case 3:
        return "-translate-x-[300%]";
        break;

      default:
        break;
    }
  }

  const navigate = useNavigate();
  const swipeHandlers = useSwipe({
    onSwipedLeft: () =>
      setCrewIndex((prev) => (prev + 1 === crew.length ? prev : prev + 1)),
    onSwipedRight: () => setCrewIndex((prev) => (prev !== 0 ? prev - 1 : prev)),
    onSwipedUp: () => navigate("/technology"),
    onSwipedDown: () => navigate("/destination"),
  });

  return (
    <main
      {...swipeHandlers}
      className="relative h-screen animate-pageLoad overflow-hidden bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] landscape:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    >
      <ul className="absolute flex h-full ">
        {crew.map((crew, i) => (
          <li
            key={i}
            className={`flex w-screen flex-col pt-20 lg:pt-40 md:portrait:pt-40 ${
              i === crewIndex ? "scale-100" : "scale-50"
            } text-center transition-all duration-1000 ${setCrew()}`}
          >
            <div className="flex justify-center gap-4 tracking-[2px] landscape:justify-start landscape:pl-8 md:landscape:pl-32">
              <span className="text-gray-400">02</span>
              <span>MEET YOUR CREW</span>
            </div>
            <div className="flex h-full min-h-0 flex-col landscape:flex-row-reverse">
              <img
                className="m-auto max-h-full min-h-0 flex-grow object-contain px-6 py-6 landscape:p-0"
                src={crew.images.png}
                alt="crewPhoto"
              />
              <article className="m-auto portrait:px-6 landscape:max-w-[50%] landscape:pl-8 landscape:text-left md:landscape:pl-32 2xl:landscape:max-w-[25%]">
                <h2 className="font-emphasis text-xl text-gray-400">
                  {crew.role.toUpperCase()}
                </h2>
                <h1 className="my-2 font-emphasis text-3xl md:py-4 md:text-5xl">
                  {crew.name.toUpperCase()}
                </h1>
                <p className="tracking-wide">{crew.bio}</p>
                <div className="flex justify-center portrait:mb-4 landscape:justify-start lg:landscape:absolute lg:landscape:bottom-0 lg:landscape:pb-8">
                  <span
                    className="cursor-pointer p-4"
                    onClick={() => setCrewIndex(0)}
                  >
                    <div
                      className={`${
                        crewIndex == 0 ? "bg-white" : "bg-gray-700"
                      } h-4 w-4 rounded-full`}
                    />
                  </span>
                  <span
                    className="cursor-pointer p-4"
                    onClick={() => setCrewIndex(1)}
                  >
                    <div
                      className={`${
                        crewIndex == 1 ? "bg-white" : "bg-gray-700"
                      } h-4 w-4 rounded-full`}
                    />
                  </span>
                  <span
                    className="cursor-pointer p-4"
                    onClick={() => setCrewIndex(2)}
                  >
                    <div
                      className={`${
                        crewIndex == 2 ? "bg-white" : "bg-gray-700"
                      } h-4 w-4 rounded-full`}
                    />
                  </span>
                  <span
                    className="cursor-pointer p-4"
                    onClick={() => setCrewIndex(3)}
                  >
                    <div
                      className={`${
                        crewIndex == 3 ? "bg-white" : "bg-gray-700"
                      } h-4 w-4 rounded-full`}
                    />
                  </span>
                </div>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { useState } from "react";
import { destinations } from "../../data/data.json";

export default function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);

  function setDestination() {
    switch (destinationIndex) {
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

  return (
    <main className="relative h-screen animate-pageLoad overflow-hidden bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] landscape:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <ul className="absolute flex h-screen">
        {destinations.map((destination, i) => (
          <li
            key={i}
            className={`flex w-screen flex-col pt-20 lg:pt-40 md:portrait:pt-40 landscape:flex-row ${
              i === destinationIndex ? "scale-100" : "scale-50"
            } text-center transition-all duration-1000 ${setDestination()}`}
          >
            <div className="flex min-h-0 flex-grow flex-col px-6">
              <div className="flex justify-center gap-4 tracking-[2px] landscape:justify-start landscape:pl-8">
                <span className="text-gray-400">01</span>
                <span>PICK YOUR DESTINATION</span>
              </div>
              <img
                className="m-auto max-h-full min-h-0 flex-grow animate-satelite object-contain py-6 lg:py-12"
                src={destination.images.png}
                alt="destinationPhoto"
              />
            </div>
            <div className="m-auto px-6 pb-6 landscape:max-w-[60%] lg:landscape:max-w-[40%] 2xl:landscape:max-w-[25%] 2xl:landscape:pr-40">
              <div className="flex justify-center gap-4 landscape:justify-start">
                <span
                  className={`cursor-pointer border-b-2 py-2 duration-300 hover:border-b-white ${
                    destination.name.toLocaleLowerCase() == "moon"
                      ? "border-b-white"
                      : "border-b-transparent"
                  }`}
                  onClick={() => setDestinationIndex(0)}
                >
                  MOON
                </span>
                <span
                  className={`cursor-pointer border-b-2 py-2 duration-300 hover:border-b-white ${
                    destination.name.toLocaleLowerCase() == "mars"
                      ? "border-b-white"
                      : "border-b-transparent"
                  }`}
                  onClick={() => setDestinationIndex(1)}
                >
                  MARS
                </span>
                <span
                  className={`cursor-pointer border-b-2 py-2 duration-300 hover:border-b-white ${
                    destination.name.toLocaleLowerCase() == "europa"
                      ? "border-b-white"
                      : "border-b-transparent"
                  }`}
                  onClick={() => setDestinationIndex(2)}
                >
                  EUROPA
                </span>
                <span
                  className={`cursor-pointer border-b-2 py-2 duration-300 hover:border-b-white ${
                    destination.name.toLocaleLowerCase() == "titan"
                      ? "border-b-white"
                      : "border-b-transparent"
                  }`}
                  onClick={() => setDestinationIndex(3)}
                >
                  TITAN
                </span>
              </div>
              <h1 className="my-2 font-emphasis text-4xl  md:text-8xl lg:my-8 landscape:text-left">
                {destination.name.toUpperCase()}
              </h1>
              <div className="divide-y-[1px] divide-white/50 md:portrait:px-20 md:portrait:pb-20">
                <p className="pb-2 tracking-wide lg:pb-8 landscape:text-left">
                  {destination.description}
                </p>
                <div className="flex justify-around pt-2 lg:pt-8 landscape:justify-start landscape:gap-20">
                  <p className="flex flex-col landscape:items-start">
                    <span>AVG. DISTANCE</span>
                    <span className="font-emphasis">
                      {destination.distance.toUpperCase()}
                    </span>
                  </p>
                  <p className="flex flex-col landscape:items-start">
                    <span>EST. TRAVEL TIME</span>
                    <span className="font-emphasis">
                      {destination.travel.toUpperCase()}
                    </span>
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

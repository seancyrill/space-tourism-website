import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-w-screen grid min-h-screen animate-pageLoad grid-rows-2 place-content-center bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center pt-20 md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] landscape:grid-cols-2 landscape:grid-rows-1 landscape:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <div className="m-auto py-4 portrait:px-8 landscape:pl-12 md:landscape:pl-24">
        <h3 className=" text-center md:text-xl landscape:text-left">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="py-4 text-center font-emphasis text-6xl md:text-8xl lg:text-9xl portrait:md:text-9xl landscape:text-left">
          SPACE
        </h1>
        <p className="m-auto text-center sm:portrait:max-w-[50%] landscape:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to={"/destination"}
        className="m-auto grid h-48 w-48 place-content-center rounded-full border-none bg-white font-emphasis text-2xl text-black duration-200 hover:shadow-[0_0_100px_1px] hover:shadow-white sm:h-60 sm:w-60 sm:text-4xl"
      >
        <div className="absolute h-40 w-40 animate-pulse rounded-full bg-white blur-3xl sm:h-60 sm:w-60"></div>
        EXPLORE
      </Link>
    </main>
  );
}

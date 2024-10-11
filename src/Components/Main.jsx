import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Main = () => {
  const [text] = useTypewriter({
    words: ["park", "shop", "navigate"],
    loop: 0,
  });
  return (
    <>
      <div className="relative bg-main3 h-[94vh] bg-cover  bg-center w-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-20 backdrop-invert backdrop-blur-[10px] flex justify-center items-center">
          <div className="w-full flex flex-col container gap-8 sm:gap-2 text-white">
            <span className="font-revalia font-bold text-4xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-9xl">
              Feel the Ease <br />
            </span>
            <span className="text-3xl sm:text-6xl font-extralight text-yellow-300 font-sans md:text-[8rem] h-[8rem] flex items-center">
              {" "}{text}
            </span>
            <span className="font-revalia font-bold text-4xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-9xl">
              With MallEZ
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

import React from "react";
import HeroPlant from "../assets/heroPlant.png";

const HeroSection = () => {
  return (
    <>
      <div className="h-[400px w-auto">
        <img src={HeroPlant} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center mt-5 font-semibold text-4xl">
        <p>
          Delivering <span className="text-teal-800">Plants,</span>
        </p>
        <p>
          Delivering <span className="text-teal-800">Happiness!</span>
        </p>
        <p className="px-10 text-xs text-gray-500 text-center  mt-5">Transform your home or office into a lush, calming oasis with our handpicked collection of indoor plants. From air-purifying beauties to low-maintenance succulentsbr
        , <br />we have something for every space and lifestyle</p>
      </div>
    </>
  );
};

export default HeroSection;

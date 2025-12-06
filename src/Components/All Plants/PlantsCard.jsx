import React from "react";
import { FaStar } from "react-icons/fa";

const PlantsCard = ({ plant }) => {
  const { plantName, category, price, rating, description, image } = plant;
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 p-2 lg:p-5 ">
        <img src={image} alt={plantName} className="w-full h-30 lg:h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            {plantName}
          </h2>

          <div className="flex justify-between">
            <p className=" text-xs lg:text-xl text-gray-700 mb-1">Price: ${price}</p>
            <p className="text-yellow-500 mb-2 flex justify-center-safe items-center gap-2">
              <FaStar /> {rating}
            </p>
          </div>

          <p className="text-sm text-gray-600   ">
            {description.slice(0, 100)}...{" "}
            <p className="text-black font-semibold cursor-pointer">Read More</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default PlantsCard;

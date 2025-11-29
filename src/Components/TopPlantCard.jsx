import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopPlantCard = ({ plant }) => {
  const { image, plantName, rating, price, plantId } = plant;
  return (
    <section className="">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 p-5">
        <img src={image} alt={plantName} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            {plantName}
          </h2>

          <div className="flex justify-between">
            <p className="text-gray-700 mb-1">Price: ${price}</p>
            <p className="text-yellow-500 mb-2 flex items-center gap-2">
              {" "}
              <FaStar /> {rating}
            </p>
          </div>
          <Link to={`/plantDetails/${plantId}`}>
            <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopPlantCard;
0;

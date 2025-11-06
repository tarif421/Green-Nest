import React from "react";

const TopPlantCard = ({ plant }) => {
  const { image, plantName, rating, price } = plant;
  return (
    <section className="">
      <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300 ">
        <img
          className="w-full h-60 object-cover rounded-xl aspect-3/4"
          src={image}
          alt=""
        />
        <h3>{plantName}</h3>
        <p>{rating}</p>
      </div>
    </section>
  );
};

export default TopPlantCard;
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4
// w-full h-48 object-cover rounded-xl
// bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300

import React from "react";
import TopPlantCard from "./TopPlantCard";

const TopRatedPlants = ({ plants }) => {
  const topPlants = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 6);
  return (
    // headline
    <section className="">
      <h2 className=" py-5 bg-green-50 w-[500px] mx-auto mt-10 rounded-2xl shadow-2xs text-3xl font-bold flex justify-center text-yellow-700 ">
        Top Rated Indoor Plants
      </h2>
      <div className="grid grid-cols-3 gap-6 w">
        {topPlants.map((plant) => (
          <TopPlantCard plant={plant} key={plant.plantId}></TopPlantCard>
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;

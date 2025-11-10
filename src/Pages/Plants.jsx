import React from "react";
import { useLoaderData } from "react-router";
import PlantsCard from "../Components/All Plants/PlantsCard";

const Plants = () => {
  const allPlants = useLoaderData();
  return (
    <>
      <h2 className=" py-5 bg-green-50 w-[500px] mx-auto my-20 rounded-2xl shadow-2xs text-3xl font-bold flex justify-center text-yellow-700 ">
        Our Plants
      </h2>
      <div className="grid grid-cols-3 gap-6 w-full mx-auto ">
        {allPlants.map((plant) => (
          <PlantsCard plant={plant} key={plant.plantId}></PlantsCard>
        ))}
      </div>
    </>
  );
};

export default Plants;

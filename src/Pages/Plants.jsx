import { useLoaderData } from "react-router";
import PlantsCard from "../Components/All Plants/PlantsCard";
import { use } from "react";


const Plants = () => {
  const allPlants = useLoaderData();
 

  return (
    <>
     
      <h2 className=" py-3 lg:py-5 bg-green-50 w-[300px] lg:w-[500px] mx-auto my-20 rounded-2xl shadow-2xs text-xl lg:text-3xl font-bold  flex justify-center text-yellow-700 ">
        Our Plants
      </h2>
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 w-full px-5 mx-auto lg:px-30">
        {allPlants.map((plant) => (
          <PlantsCard plant={plant} key={plant.plantId}></PlantsCard>
        ))}
      </div>
    </>
  );
};

export default Plants;

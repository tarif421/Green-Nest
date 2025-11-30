import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import PlantDetailsCard from "./PlantDetailsCard";

const PlantDetails = () => {
  const plantData = useLoaderData();
  const { plantId } = useParams();
  const [plant, setPlants] = useState({});
  // console.log(plantData, plantId, plant);

  useEffect(() => {
    const plantDetails = plantData.find(
      (singleNews) => singleNews.plantId == plantId
    );
    setPlants(plantDetails);
  }, [plantData, plantId]);

  return (
    <>
      <div className=" mx-w-[1280px] mx-auto p-6">
       <section>
         <PlantDetailsCard plant={plant}></PlantDetailsCard>
       </section>
      </div>
    </>
  );
};

export default PlantDetails;


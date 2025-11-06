import React from "react";
import { useLoaderData } from "react-router";

import TopRatedPlants from "../Components/TopRatedPlants";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div>
      {/* top rated plants */}
      <TopRatedPlants plants={plants} />
    </div>
  );
};

export default Home;

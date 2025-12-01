import React from "react";
import { Navigate, useLoaderData } from "react-router";

import TopRatedPlants from "../Components/TopRatedPlants";
import HeroSection from "../Components/HeroSection";
import PCTips from "../PlantCareTips/PCTips";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div>
      <HeroSection></HeroSection>
      {/* top rated plants */}
      <TopRatedPlants plants={plants} />
      <PCTips></PCTips>
      <Navigate to="/"></Navigate>
    </div>
  );
};

export default Home;

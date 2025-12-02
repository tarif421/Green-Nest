import React from "react";
import { useLoaderData } from "react-router";

import TopRatedPlants from "../Components/TopRatedPlants";
import HeroSection from "../Components/HeroSection";
import PCTips from "../PlantCareTips/PCTips";
import Expert from "../PlantExpart/Expert";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div>
      <HeroSection></HeroSection>

      <TopRatedPlants plants={plants} />
      <PCTips></PCTips>
<Expert></Expert>
      {/* <Navigate to="/"></Navigate> */}
    </div>
  );
};

export default Home;

import React from "react";
import { useLoaderData } from "react-router";

import TopRatedPlants from "../Components/TopRatedPlants";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div>
      <HeroSection></HeroSection>
      {/* top rated plants */}
      <TopRatedPlants plants={plants} />
    </div>
  );
};

export default Home;

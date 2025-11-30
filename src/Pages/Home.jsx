import React from "react";
import { Navigate, useLoaderData } from "react-router";

import TopRatedPlants from "../Components/TopRatedPlants";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div>
      <HeroSection></HeroSection>
      {/* top rated plants */}
      <TopRatedPlants plants={plants} />
      <Navigate to="/"></Navigate>
    </div>
  );
};

export default Home;

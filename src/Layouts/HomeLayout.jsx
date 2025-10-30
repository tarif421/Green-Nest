import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import HeroSection from "../Components/HeroSection";

const HomeLayout = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;

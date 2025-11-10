import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="mx-w-[1280px]">
      <nav className="">
        <Navbar></Navbar>
      </nav>

      <main className="  my-3  ">
        <Outlet></Outlet>
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;

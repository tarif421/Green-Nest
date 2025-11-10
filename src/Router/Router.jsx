import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import TopRatedPlants from "../Components/TopRatedPlants";
import HeroSection from "../Components/HeroSection";
import PlantDetails from "../Pages/PlantDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/plants.json").then((res) => res.json()),
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("/plants.json").then((res) => res.json()),
      },
      {
        path: "/plantDetails",
        element: <PlantDetails></PlantDetails>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
]);

import React, { useEffect, useState } from "react";
import DecorCard from "./DecorCard";

const Decor = () => {
  const [showDecor, setDecor] = useState([]);

  useEffect(() => {
    fetch("/decor.json")
      .then((res) => res.json())
      .then((data) => {
        setDecor(data.ideas);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className=" py-3 lg:py-5 bg-green-50 w-[180px] lg:w-[300px] mx-auto mt-20 rounded-2xl shadow-2xs text-xl lg:text-3xl font-bold flex justify-center text-yellow-700 ">
        Eco Decor Ideas
      </h2>
      <div className="grid grid-cols-2 lg:mr-20 lg:ml-20 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-6 mx-auto mt-7 p-4 lg:p-5 ">
        {showDecor.map((item) => (
          <DecorCard item={item} key={item.id}></DecorCard>
        ))}
      </div>
    </>
  );
};

export default Decor;

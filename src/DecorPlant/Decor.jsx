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
      <h2 className="  py-5 bg-green-50 w-[300px] mx-auto mt-20 rounded-2xl shadow-2xs text-3xl font-bold flex justify-center text-yellow-700 ">
        Eco Decor Ideas
      </h2>
      <div className="grid sm:grid-cols-1 lg:mr-20 lg:ml-20 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto mt-7 p-7 ">
        {showDecor.map((item) => (
          <DecorCard item={item} key={item.id}></DecorCard>
        ))}
      </div>
    </>
  );
};

export default Decor;

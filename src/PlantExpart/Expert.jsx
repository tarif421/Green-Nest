import React, { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";

const Expert = () => {
  const [showExpert, setExpert] = useState([]);

  useEffect(() => {
    fetch("/expert.json")
      .then((res) => res.json())
      .then((data) => {
        setExpert(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
     <h2 className="  py-3 lg:py-5 bg-green-50 w-[180px] lg:w-[300px] mx-auto mt-20 rounded-2xl shadow-2xs text-xl lg:text-3xl font-bold flex justify-center text-yellow-700 ">
        Our Experts
      </h2>
      <div className="grid grid-cols-2 lg:mr-20 lg:ml-20 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto mt-7 p-7 ">
        
        {showExpert.map((item) => (
          <ExpertCard item={item} key={item.id}></ExpertCard>
        ))}
      </div>
    </>
  );
};

export default Expert;

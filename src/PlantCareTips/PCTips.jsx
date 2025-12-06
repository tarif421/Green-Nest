import React, { useEffect, useState } from "react";

import PCTipsCard from "./PCTipsCard";

const PCTips = () => {
  const [tips, setTips] = useState();

  useEffect(() => {
    fetch("/planttips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.plants);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className=" mx-w-[1280px] mx-auto p-6">
        <h2 className="py-3 lg:py-5 bg-green-50 w-[200px] lg:w-[300px] mx-auto mt-20  text-xl lg:text-3xl font-bold flex rounded-2xl justify-center text-yellow-700 ">
        Plant Care Tips
      </h2>
        <section>
          <PCTipsCard tips={tips}></PCTipsCard>
        </section>
      </div>
    </>
  );
};

export default PCTips;

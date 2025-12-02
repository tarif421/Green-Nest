import React from "react";

const ExpertCard = ({ item }) => {
  const {name,specialization, image} = item
  return <>
  <section>
 

    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 p-5">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="mt-4">
        <p>Name: <span className="font-semibold font-serif">{name}</span></p>
        <p>Specialization: <span className="font-medium ">{specialization}</span></p>
      </div>
    </div>
  </section>
  </>
};

export default ExpertCard;

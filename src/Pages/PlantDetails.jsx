import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import PlantDetailsCard from "./PlantDetailsCard";

const PlantDetails = () => {
  const plantData = useLoaderData();
  const { plantId } = useParams();
  const [plant, setPlants] = useState({});
  // console.log(plantData, plantId, plant);

  useEffect(() => {
    const plantDetails = plantData.find(
      (singleNews) => singleNews.plantId == plantId
    );
    setPlants(plantDetails);
  }, [plantData, plantId]);

  return (
    <>
      <div className=" mx-w-[1280px] mx-auto p-6">
       <section>
         <PlantDetailsCard plant={plant}></PlantDetailsCard>
       </section>
      </div>
    </>
  );
};

export default PlantDetails;

// import React from "react";
// import { useLoaderData } from "react-router";
// import { FaStar } from "react-icons/fa";
// import toast from "react-hot-toast";

// const PlantDetails = () => {
//   const plant = useLoaderData();

//   const handleBooking = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;

//     if (!name || !email) {
//       toast.error("Please fill all fields");
//       return;
//     }

//     toast.success("Consultation booked successfully!");
//     form.reset();
//   };

//   

//         <div className="card-body lg:w-1/2 w-full">
//           <h2 className="card-title text-3xl font-bold">{plant.name}</h2>

//           <p className="text-gray-600">{plant.description}</p>

//           <p className="text-xl font-semibold mt-2">
//             Price: <span className="text-green-600">${plant.price}</span>
//           </p>

//           <p className="flex items-center gap-1 text-yellow-500 font-medium">
//             Rating: {plant.rating} <FaStar />
//           </p>

//           <p className="font-semibold">
//             Stock:{" "}
//             <span
//               className={
//                 plant.stock > 0 ? "text-green-600" : "text-red-600"
//               }
//             >
//               {plant.stock > 0
//                 ? `${plant.stock} available`
//                 : "Out of stock"}
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* --------- BOOK CONSULTATION --------- */}
//       <div className="mt-10">
//         <h3 className="text-2xl font-bold mb-3">Book Consultation</h3>

//         <form
//           onSubmit={handleBooking}
//           className="card bg-base-100 shadow-lg p-6 space-y-4 max-w-xl"
//         >
//           {/* Name Field */}
//           <div>
//             <label className="label">
//               <span className="label-text font-medium">Name</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               className="input input-bordered w-full"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="label">
//               <span className="label-text font-medium">Email</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               className="input input-bordered w-full"
//             />
//           </div>

//           {/* Button */}
//           <button className="btn btn-success w-full text-white">
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PlantDetails;

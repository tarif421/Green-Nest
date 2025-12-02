import React, { useState } from "react";

const PCTipsCard = ({ tips }) => {
    const [showAll, setShowAll] = useState(false)


  if (!tips || tips.length === 0) {
    return <p>Loading tips...</p>;
  }

  const visibleTips = showAll ? tips : tips.slice(0, 3);

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:mr-20 lg:ml-20 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-7">
        {visibleTips.map((plant) => (
          <div
            key={plant.id}
            className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
          >
            <h2 className="text-lg text-teal-700 font-semibold mb-1">{plant.commonName}</h2>
            <p className="text-xs text-gray-500 italic mb-2">
              {plant.scientificName}
            </p>

            {/* Watering */}
            <div className="mb-2">
              <h3 className="font-medium text-gray-700 text-sm">Watering:</h3>
              <p className="text-xs"> {plant.watering.frequency}</p>
              <p className="text-xs"> {plant.watering.amount}</p>
            </div>

            {/* Sunlight */}
            <div className="mb-2">
              <h3 className="font-medium text-gray-700 text-sm">Sunlight:</h3>
              <p className="text-xs">• {plant.sunlight.exposure}</p>
              <p className="text-xs">• {plant.sunlight.idealHours} hours</p>
            </div>

            {/* Fertilizing */}
            <div className="mb-2">
              <h3 className="font-medium text-gray-700 text-sm">Fertilizing:</h3>
              <p className="text-xs">• {plant.fertilizing.type}</p>
              <p className="text-xs">• {plant.fertilizing.schedule}</p>
            </div>

            <p className="text-xs text-gray-600 mt-2">
              <span className="font-semibold">Difficulty:</span> {plant.difficulty}
            </p>

            <p className="text-xs text-gray-500 mt-1">{plant.notes}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-4">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 text-sm bg-gray-700 text-white rounded-md shadow hover:bg-gray-800 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default PCTipsCard;

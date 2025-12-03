
import React from "react";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PlantDetailsCard = ({ plant }) => {
  const { plantName, price, rating, description, availableStock, image } =
    plant;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    
    if (!name || !email) {
      toast.error("please fill all the fields");
      return;
    }
    toast.success("Consultation booked successfully!");
    form.reset();
  };

     
  return (
    <div className="mx-w-[1280px] mx-auto p-4 sm:p-6 lg:p-10">

      {/*plants details card  */}
       
      <section className="flex  flex-col lg:flex-row items-center lg:items-start  gap-6 lg:gap-12">
        <div className=" lg:ml-40">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lag:max-wlg rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-20 lg:mr-40 flex-col flex-1 justify-center py-5 lg:text-left">
          <h2 className="font-bold">
            Name: <span className="text-green-400">{plantName}</span>{" "}
          </h2>
          <h5 className="font-bold">
            Price: <span className="text-green-400">{price}</span>{" "}
          </h5>
          <h5 className="font-bold">
            Stock: <span className="text-green-400">{availableStock}</span>{" "}
          </h5>
          <h5 className="font-bold">
            Rating: <span className="text-green-400">{rating}</span>{" "}
          </h5>

          <p className="font-bold ">
            Description: <span className="text-gray-400"> {description}</span>{" "}
          </p>
        </div>
      </section>

      {/* Book consultation */}
      <section className="mt-10">
        <h3 className="text-xl lg:text-2xl font-bold mb-3">Book Consultation</h3>
        <form
          onSubmit={handleBooking}
          className=" card bg-base-100 shadow-lg p-6 space-y-4 w-mx-xl lg:w-2/3"
        >
          {/* Name Field */}
          <div>
            <label className="label">
              <span className="label-text font-medium ">Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              name="name"
              placeholder="Your Name"
              
            />
           
          </div>

          {/* Email field */}
          <div>
            <label className="label">
              <span className="label-text font-medium ">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              name="email"
              placeholder="Email address"
              
            />
          </div>
          {/* button */}
          <button   className="btn btn-success w-full text-white">
            Book Now
          </button>
        </form>
      </section>
         
    </div>
  );
};

export default PlantDetailsCard;


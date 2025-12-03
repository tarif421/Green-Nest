import React, { useState, useContext, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(
        user.photoURL ||
          ""
      );
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated!");
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="card bg-base-100 shadow-xl p-6 mb-8">
        <div className="flex flex-col items-center">
          <img
            src={
              user
                ? user.photoURL
                : ""
            }
            alt="Profile"
            className="w-24 h-24 rounded-full border mb-4 object-cover"
          />

          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      <form
        onSubmit={handleUpdate}
        className="card bg-base-100 shadow-lg p-6 space-y-4"
      >
        <div>
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default MyProfile;

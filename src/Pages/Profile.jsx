import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      // update context so UI changes instantly
      setUser({ ...user, displayName: name, photoURL: photo });

      alert("Profile Updated Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 border shadow rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Profile</h2>

      {/* User Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-3"
        />
        <h3 className="text-xl font-semibold">{user?.displayName}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Update Form */}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Update your name"
          />
        </div>

        <div>
          <label className="block font-medium">Photo URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Paste new photo URL"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;

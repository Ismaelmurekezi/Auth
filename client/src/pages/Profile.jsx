import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profileImage"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"
        />
        <input
          type="text"
          defaultValue={currentUser.username}
          id="username"
          placeholder="username"
          className="border-2 border-slate-400 rounded-xl p-2"
        />
        <input
          type="email"
          defaultValue={currentUser.email}
          id="email"
          placeholder="email"
          className="border-2 border-slate-400 rounded-xl p-2"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border-2 border-slate-400 rounded-xl p-2"
        />
        <button className="bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-95">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="bg-[#ee0404] text-white cursor-pointer px-4 py-2 rounded-xl ">
          Delete Account
        </span>
        <span className="text-[#ee0404] border-2 border-[#ee0404] cursor-pointer px-4 py-2  rounded-xl">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;

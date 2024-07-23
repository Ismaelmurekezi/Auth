import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setimageError] = useState(false);
  const [formData, setformData] = useState({});

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setimageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setformData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={currentUser.profilePicture}
          alt="profileImage"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">Error uploading image (image must be less than 2MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-700 ">{`uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
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



import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://i0.wp.com/www.low-industries.com/wp-content/uploads/Default-profile-pic-1.jpg?fit=860%2C609&ssl=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

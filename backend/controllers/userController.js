import express from "express";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";

export const test = (req, res) => {
  res.json({
    message: "Auth Apis",
  });
};

export const updateUser = async (req, res, next) => {
  const userId = req.user.id;
  const username = req.body.username;
  const email = req.body.email;

  if (userId !== req.params.id) {
    return next(errorHandler(401, "You can only update your profile"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username,
          email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

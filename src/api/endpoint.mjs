import express from "express";
import mongoose from "mongoose";
import { user, preferenceModel } from "./schema.mjs";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

// Define the User model using the mongoose.model method
const User = mongoose.model("User", user);

// Endpoint for adding a user
export const add = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create a new user instance
    const newUser = new User({ email, password });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.json({ message: "User added successfully", user: savedUser });
  } catch (error) {
    console.error("Error adding user to MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const check = async (req, res) => {
  const email = req.params.email;
  const password = req.body.password;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "User does not exists" });
  }

  if (password === user.password) {
    res.status(200).json({ message: "User Authenticated" });
  } else {
    res.status(404).json({ message: "Email or Password is incorrect" });
  }
};

export const userPrefs = async (req, res) => {
  try {
    const { email, languages, category, country } = req.body;

    // Create a new user instance
    const Preferences = new preferenceModel({
      email,
      languages,
      category,
      country,
    });

    // Save the user to the database
    const UserPrefs = await Preferences.save();

    res.json({ message: "Preferences added successfully", user: UserPrefs });
  } catch (error) {
    console.error("Error adding user to MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPrefs = async (req, res) => {
  const email = req.params.email;

  const prefs = await preferenceModel.findOne({ email });

  res.status(200).json(prefs);
};

// Export the Express app if needed (for example, if you want to use it in another module)
export default app;

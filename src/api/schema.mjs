import mongoose from "mongoose";

export const user = new mongoose.Schema({
  email: {
    type: String,
  },
  password: String,
});

const preferenceSchema = new mongoose.Schema({}, { strict: false });

export const preferenceModel = mongoose.model("Preferences", preferenceSchema);

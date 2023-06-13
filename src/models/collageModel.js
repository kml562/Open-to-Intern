import mongoose from "mongoose";

const { Schema, model } = mongoose;

const collageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    logoLink: {
      type: String,
      required: true,
      default:
        "https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const College = model("College", collageSchema);

export default College;

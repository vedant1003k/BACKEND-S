import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudnery
      required: true,
    },
    thumnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    describtion: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //cloudnary
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video,video");

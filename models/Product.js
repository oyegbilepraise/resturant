import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  price: {
    type: [Number],
    required: true,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200,
  },
  img: {
    type: String,
    required: true,
  },
  extrasOptions: {
    type: [
      {
        text: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
  },
}, {timestamp: true});

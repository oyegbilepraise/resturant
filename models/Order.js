import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    status: {
      type: Number,
    //   required: true,
      default: 0 
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    method: {
        type: Number,
        required: true,
    }
  },
  { timestamp: true }
);

export default mongoose.model("Order", OrderSchema );

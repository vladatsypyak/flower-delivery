import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
});

export const Product = mongoose.model("Product", productSchema);

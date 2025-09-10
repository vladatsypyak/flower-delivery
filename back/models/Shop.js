import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: String,
        phone: String,
        description: String,
        imageUrl: String,
    },
    { timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        items: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                name: String,
                price: Number,
                quantity: Number,
            },
        ],
        total: { type: Number, required: true },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);

import express from "express";
import { Order } from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, phone, address, items, total } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const order = new Order({ email, phone, address, items, total });
        await order.save();

        res.status(201).json({ message: "Order created", orderId: order._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;

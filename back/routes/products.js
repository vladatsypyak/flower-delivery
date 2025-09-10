import express from "express";
import { Product } from "../models/Product.js";

const router = express.Router();

// GET /api/products/:shopId
router.get("/:shopId", async (req, res) => {
    console.log("works")
    try {
        const { shopId } = req.params;
        console.log(shopId)
        const products = await Product.find({ shopId: shopId });

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;

import express from "express";
import Shop from "../models/Shop.js";

const router = express.Router();

// GET /api/shops → всі магазини
router.get("/", async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

export default router;

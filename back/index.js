import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shopRoutes from"./routes/shops.js";
import productRoutes from "./routes/products.js";
import ordersRoutes from "./routes/orders.js";




dotenv.config();

const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());


const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("DB connection error:", err.message);
        process.exit(1);
    }
};

startServer();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.use("/api/shops", shopRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRoutes);




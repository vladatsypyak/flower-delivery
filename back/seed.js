// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Shop from "./models/Shop.js";

dotenv.config();

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected");

        // очистимо колекцію перед додаванням
        await Shop.deleteMany();

        // додаємо тестові магазини
        await Shop.insertMany([
            {
                name: "Rose Garden",
                address: "123 Main St",
                phone: "+123456789",
                description: "Beautiful roses and bouquets",
                imageUrl: "https://picsum.photos/300?random=1",
            },
            {
                name: "Tulip World",
                address: "456 Flower Ave",
                phone: "+987654321",
                description: "Tulips for every occasion",
                imageUrl: "https://picsum.photos/300?random=2",
            },
            {
                name: "Sunflower House",
                address: "789 Bloom Blvd",
                phone: "+111222333",
                description: "Bright sunflowers to make your day",
                imageUrl: "https://picsum.photos/300?random=3",
            },
        ]);

        console.log("🌱 Seed data created!");
        mongoose.connection.close();
    } catch (err) {
        console.error("❌ Error seeding data:", err);
        mongoose.connection.close();
    }
};

seed();

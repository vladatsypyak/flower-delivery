import React, { useState, useEffect } from "react";
import ShopList from "../components/ShopList/ShopList";
import FlowerCard from "../components/FlowerCard/FlowerCard";

export interface Shop {
    _id: string;
    name: string;
    address: string;
    phone: string;
    description: string;
    imageUrl: string;
}

const ShopPage: React.FC = () => {
    const [shops, setShops] = useState<Shop[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShop, setSelectedShop] = useState(shops[0]);
    console.log(shops)
    const flowers = [
        { name: "Rose" },
        { name: "Tulip" },
        { name: "Lily" },
        { name: "Rose" },
    ];

    useEffect(() => {
        fetch("http://localhost:3000/api/shops")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setShops(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching shops:", err);
                setLoading(false);
            });
    }, []);
    const handleAddToCart = (flower: string) => {
        console.log(`${flower} added to cart!`);
    };

    return (
        <div className="flex p-4 gap-6">
            <ShopList shops={shops} selectedShop={selectedShop} onSelect={setSelectedShop} />
            <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto">
                {flowers.map((flower) => (
                    <FlowerCard
                        key={flower.name + Math.random()}
                        name={flower.name}
                        onAddToCart={() => handleAddToCart(flower.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;

import React, {useState, useEffect} from "react";
import ShopList from "../components/ShopList/ShopList";
import FlowerCard from "../components/FlowerCard/FlowerCard";
import {Product} from "../types";
import {useCart} from "../hooks/useCart";

export interface Shop {
    _id: string;
    name: string;
    address: string;
    phone: string;
    description: string;
    imageUrl: string;
}


const ShopPage: React.FC = () => {
    const {addToCart} = useCart();

    const [shops, setShops] = useState<Shop[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShop, setSelectedShop] = useState(shops[0]);
    const [flowers, setFlowers] = useState<Product[]>([])
    useEffect(() => {
        fetch("http://localhost:3000/api/shops")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setShops(data);
                setSelectedShop(data[0])
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching shops:", err);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        if (selectedShop) {
            fetch(`http://localhost:3000/api/products/${selectedShop?._id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setFlowers(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching flowers:", err);
                    setLoading(false);
                });
        }

    }, [selectedShop]);

    return (
        <div className="flex p-4 gap-6 ">
            {loading ? "Loading..." :
                <>
                    <ShopList shops={shops} selectedShop={selectedShop} onSelect={setSelectedShop}/>
                    <div className="flex flex-wrap gap-4 overflow-y-auto">
                        {flowers?.map((flower) => (
                            <FlowerCard
                                key={flower.name + Math.random()}
                                name={flower.name}
                                item={flower}
                                onAddToCart={() => addToCart(flower)}
                            />
                        ))}
                    </div>
                </>
            }

        </div>
    );
};

export default ShopPage;

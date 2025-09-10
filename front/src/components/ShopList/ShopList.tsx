import React from "react";
import { Shop } from "../../pages/Shops";

interface ShopListProps {
    shops: Shop[];
    selectedShop: Shop;
    onSelect: (shop: Shop) => void;
}

const ShopList: React.FC<ShopListProps> = ({ shops, selectedShop, onSelect }) => {
    console.log(shops);

    return (
        shops ? (
            <div className="flex flex-col gap-2 w-40">
                {shops.map((shop) => (
                    <button
                        key={shop._id}
                        onClick={() => onSelect(shop)}
                        className={`px-4 py-2 rounded border ${
                            selectedShop?._id === shop._id ? "bg-gray-300" : "bg-white"
                        }`}
                    >
                        {shop.name}
                    </button>
                ))}
            </div>
        ) : null
    );
};

export default ShopList;

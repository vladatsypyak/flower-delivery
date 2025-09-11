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
            <div className="flex flex-col gap-2 w-[300px] shrink-0">
                {shops.map((shop) => (
                    <button
                        key={shop._id}
                        onClick={() => onSelect(shop)}
                        className={`px-6 py-[30px] rounded border ${
                            selectedShop?._id === shop._id ? "bg-emerald-400 text-white font-bold" : "bg-white"
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

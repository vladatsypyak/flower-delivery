import React from "react";
import { Heart } from "lucide-react";

interface FlowerCardProps {
    name: string;
    onAddToCart?: () => void;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ name, onAddToCart }) => {
    return (
        <div className="border rounded p-2 flex flex-col items-center relative">
            <div className="absolute top-2 right-2">
                <Heart className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
            <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center">
                {/* placeholder for image */}
                <span>{name[0]}</span>
            </div>
            <span className="mb-2">{name}</span>
            {onAddToCart && (
                <button
                    onClick={onAddToCart}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default FlowerCard;

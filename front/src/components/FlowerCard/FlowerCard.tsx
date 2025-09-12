import React from "react";
import { Heart } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {Product} from "@/types";

interface FlowerCardProps {
    name: string;
    onAddToCart?: () => void;
    item: Product
}

const FlowerCard: React.FC<FlowerCardProps> = ({ name, onAddToCart, item }) => {
    return (
        <Card className="border rounded p-4 flex flex-col items-center relative w-[300px]">
            <div className="absolute top-2 right-2">
                <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-emerald-400" />
            </div>
            <CardContent>
                <img className={"max-h-[180px]"} src={item.imageUrl} alt={item.name}/>
            </CardContent>
            <span className="mb-2">{name}</span>
            <div className={"flex justify-between items-center mt-auto w-full"}>
                <p className={"font-semibold"}>{item.price}$</p>
                {onAddToCart && (
                    <button
                        onClick={onAddToCart}
                        className="px-3 py-1 ml-auto bg-emerald-500 text-white rounded hover:bg-emerald-600"
                    >
                        Add to Cart
                    </button>
                )}
            </div>

        </Card>
    );
};

export default FlowerCard;

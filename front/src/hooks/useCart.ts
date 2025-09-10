import { useState, useEffect } from "react";
import { CartItem, Product } from "../types";

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    console.log(cart)
    console.log("workig")

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(localStorage.getItem("cart"))
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item._id === product._id);
            if (existing) {
                return prev.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item._id !== productId));
    };

    return { cart, addToCart, removeFromCart };
};

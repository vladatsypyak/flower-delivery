import React, {useState, useEffect, useMemo} from "react";
import OrderForm from "../components/OrderForm/OrderForm";

import Cart from "../components/Cart/Cart";
import {useCart} from "../hooks/useCart";
import it from "node:test";



const CartPage: React.FC = () => {
    const { cart, removeFromCart, removeOne, addOne } = useCart();
    const total = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cart]
    );

    const handleOrderSubmit = async (data: { email: string; phone: string; address: string }) => {
        console.log("Order data:", data);
        const itemsJSON = localStorage.getItem("cart")
        const items = itemsJSON ? JSON.parse(itemsJSON) : null
        if(items?.length === 0) {
            alert("Cart is empty")
            return
        }

        const res = await fetch("http://localhost:3000/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, items: items , total: 100 }),
        });

        if (res.ok) {
            console.log("order ok")
            alert("Order created")
        } else {
            console.log("order failed")
        }
    }
    return (
        <div className={"w-[1200px] mx-auto  p-4"}>
            <div className="flex  gap-6  ">
                <OrderForm onSubmit={handleOrderSubmit} />

                    <Cart  addOne={addOne} removeFromCart={removeFromCart} removeOne={removeOne} total={total} products={cart}/>




            </div>

            <div className={"flex justify-end gap-[40px] items-center mt-4 "}>
                <span className={"font-semibold"}>Total: <span>{total}</span>UAH</span>

                <button
                    type="submit"
                    form="order-form"
                    className="bg-emerald-400 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Submit Order
                </button>
            </div>
        </div>
    );
};

export default CartPage;

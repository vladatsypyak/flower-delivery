import React, { useState, useEffect } from "react";
import OrderForm from "../components/OrderForm/OrderForm";

import Cart from "../components/Cart/Cart";
import {useCart} from "../hooks/useCart";
import it from "node:test";



const CartPage: React.FC = () => {

    const handleOrderSubmit = async (data: { email: string; phone: string; address: string }) => {
        console.log("Order data:", data);
        const itemsJSON = localStorage.getItem("cart")
        const items = itemsJSON ? JSON.parse(itemsJSON) : null

        console.log(items)
        console.log(items?.length)
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
        <>
            <div className="flex p-4 gap-6">
                <OrderForm onSubmit={handleOrderSubmit} />
                <Cart/>


            </div>
            <button
            type="submit"
            form="order-form"
            className="bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700"
        >
            Submit Order
        </button>

        </>
    );
};

export default CartPage;

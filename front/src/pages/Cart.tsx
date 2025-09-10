import React, { useState, useEffect } from "react";
import Cart from "../components/Cart/Cart";



const CartPage: React.FC = () => {

    return (
        <div className="flex p-4 gap-6">
            <Cart/>
        </div>
    );
};

export default CartPage;

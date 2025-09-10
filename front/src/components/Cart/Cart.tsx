import React from "react";
import {useCart} from "../../hooks/useCart";

const Cart: React.FC = () => {
    const { cart, removeFromCart } = useCart();
    console.log(cart)
    return (
        <div className="border p-4 w-80">
            <h2 className="text-xl mb-2">Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item._id} className="flex justify-between mb-2">
                        <span>{item.name} x {item.quantity}</span>
                        <button
                            className="text-red-500"
                            onClick={() => removeFromCart(item._id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

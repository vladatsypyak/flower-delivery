import React, {useMemo} from "react";
import {useCart} from "../../hooks/useCart";

const Cart: React.FC = () => {
    const { cart, removeFromCart } = useCart();
    const total = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cart]
    );    return (
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
            <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                <span>Total:</span>
                <span>{total}</span>
            </div>
        </div>
    );
};

export default Cart;

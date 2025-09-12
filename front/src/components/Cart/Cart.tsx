import React from "react";
import {CartItem} from "@/types";
import { Trash2, Plus, Minus } from "lucide-react";


interface CartProps {
    products: CartItem[],
    total: number,
    removeFromCart: (id: string)=> void,
    removeOne: (id: string)=> void,
    addOne: (id: string)=> void


}

const Cart: React.FC<CartProps> = ({products, total, removeFromCart, removeOne, addOne }) => {

    return (
        <div className="p-4 w-[800px]  border border-green-100 overflow-y-auto rounded-md">
            {products.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                products.map((item) => (
                    <div key={item._id} className="flex items-center  justify-between mb-2 bg-white border-b border-green-100 p-3">
                        <p className={"w-[38%]"}>{item.name} </p>
                        <p > x{item.quantity}</p>

                      <div className={"flex gap-2 "}>
                          <button
                              className="text-blue-500"
                              onClick={() => removeOne(item._id)}
                          >
                              <Minus size={24}/>

                          </button>
                          <button
                              className="text-blue-500"
                              onClick={() => addOne(item._id)}
                          >
                              <Plus size={24}/>
                          </button>
                          <button
                              className="text-red-500"
                              onClick={() => removeFromCart(item._id)}
                          >
                              <Trash2 size={24} />                        </button>
                      </div>
                    </div>

                ))
            )}


        </div>
    );
};

export default Cart;

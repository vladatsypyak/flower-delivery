import React from "react";
import { useForm } from "react-hook-form";

type OrderFormData = {
    email: string;
    phone: string;
    address: string;
};

interface OrderFormProps {
    onSubmit: (data: OrderFormData) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OrderFormData>();

    return (
        <>
            <form id="order-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-md">
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[0-9+\- ]+$/, message: "Invalid phone number" },
                        })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Delivery address"
                        {...register("address", { required: "Address is required" })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>
            </form>
        </>
    );
};

export default OrderForm;

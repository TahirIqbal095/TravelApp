import useOrder from "../../hooks/useOrder";
import { Button } from "@nextui-org/react";
import { assets } from "../../assets/assets";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const KEY_ID = import.meta.env.KEY_ID;
const API_URL = import.meta.env.VITE_API_URL;

const success = (msg) => {
    toast.success(msg);
};

function Payment() {
    const { order } = useOrder();
    const { auth } = useAuth();
    const navigate = useNavigate();
    const accessToken = auth?.accessToken;

    function loadRazorpay(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    }

    const displayRazorpay = async () => {
        const result = await loadRazorpay(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!result) {
            toastError("Error loading Razorpay");
            return;
        }

        const options = {
            key: KEY_ID,
            booking_id: order?.booking_id,
            amount: order?.amount,
            currency: order?.currency,
            name: "Mount Eco",
            description: "Thanks for trusting Mount Eco",
            image: assets.logo,
            order_id: order?.order_id,
            handler: async function (response) {
                console.log(response);

                try {
                    const resposne = await fetch(
                        `${API_URL}/api/bookings/payment-success/`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${accessToken}`,
                            },
                            body: JSON.stringify({
                                razorpay_order_id: order?.order_id,
                                amount: order?.amount,
                                status: "success",
                            }),
                        }
                    );
                } catch (error) {
                    console.error("error in payments : " + error);
                }

                navigate("/me");
                success("Payment Successfull");
            },
            prefill: {
                name: auth?.username,
                email: "tahir@example.com",
                contact: "9000090000",
            },
            notes: {
                address: "Srinagar Kashmir, Mount Eco",
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            toastError("Payment failed");
        });

        rzp1.open();
    };

    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background py-12">
            <div className="flex w-full max-w-[384px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
                <div className="flex w-full flex-col items-center border-b border-solid border-neutral-border px-6 py-6">
                    <div className="flex w-full flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-blue-100 flex justify-center rounded-[50%]">
                                    <span className="material-symbols-outlined text-blue-600 p-2">
                                        currency_rupee
                                    </span>
                                </div>
                                <span className="text-lg font-medium">
                                    Invoice
                                </span>
                                <span className="text-sm text-gray-600">
                                    #3FK21113-0001
                                </span>
                            </div>
                            <div className="bg-rose-200 rounded">
                                <span className="text-sm text-rose-500 p-2">
                                    unpaid
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                    <div className="flex w-full flex-col items-start">
                        <div className="flex w-full items-center justify-between py-2">
                            <div className="flex grow shrink-0 basis-0 items-center gap-2 text-gray-500 text-sm">
                                <span className="material-symbols-outlined text-base">
                                    person
                                </span>
                                <span className="">Full Name</span>
                            </div>
                            <span className="text-sm text-gray-900">
                                {auth?.user}
                            </span>
                        </div>
                        <div className="flex w-full items-center justify-between py-2">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span className="material-symbols-outlined text-base">
                                    mail
                                </span>
                                <span>Email</span>
                            </div>
                            <span className="text-sm text-gray-900">
                                maim@mail.com
                            </span>
                        </div>
                        <div className="flex w-full items-center justify-between py-2">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span className="material-symbols-outlined text-base">
                                    call
                                </span>
                                <span className="text-body font-body text-subtext-color">
                                    Phone
                                </span>
                            </div>
                            <span className="text-sm text-gray-900">
                                9785298482
                            </span>
                        </div>
                        <div className="flex w-full items-center justify-between py-2">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span className="material-symbols-outlined text-base">
                                    your_trips
                                </span>
                                <span className="text-body font-body text-subtext-color">
                                    Booking id
                                </span>
                            </div>
                            <span className="text-sm text-gray-900">
                                {order?.booking_id}
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1 rounded-md bg-blue-100 px-4 py-4">
                        <span className="text-gray-600 text-sm">
                            Total amount due
                        </span>
                        <span className="text-lg font-medium text-gray-900">
                            ₹ {order?.amount}
                        </span>
                    </div>
                </div>
                <div className="flex w-full items-start justify-end gap-2 border-t border-solid border-neutral-border px-4 py-4">
                    <Button color="danger">Cancel</Button>
                    <Button color="primary" onClick={displayRazorpay}>
                        Pay Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Payment;

import {
    Input,
    Select,
    SelectItem,
    Button,
    DatePicker,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@nextui-org/react";

import toast from "react-hot-toast";

import { useEffect, useState, useMemo } from "react";
import useOrder from "../../hooks/useOrder";

function Form({ useGrid }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [tourPackage, setTourPackage] = useState("");
    const [adults, setAdults] = useState("");
    const [child, setChild] = useState("");
    const [pkg, setPkg] = useState([]);
    const [date, setDate] = useState("");
    const { order, setOrder } = useOrder();

    // email validation
    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);

    // phone number validation
    const validatePhone = (value) => value.match(/^[0-9]{10}$/);

    const isPhoneInvalid = useMemo(() => {
        if (phone === "") return false;
        return validatePhone(phone) ? false : true;
    });

    // toast messages
    const toastMessageSucess = () =>
        toast.success("Form submitted successfully");
    const toastMessageFailed = (message) => {
        toast.error(message);
    };

    useEffect(() => {
        fetch("https://adlizone.pythonanywhere.com/api/tours/")
            .then((response) => response.json())
            .then((data) => {
                setPkg(data);
            })
            .catch((error) => console.error(`Error caused by: ${error}`));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setOrder({
            name: name,
            email: email,
            phone: phone,
            tourPackage: tourPackage,
            adults: adults,
            children: child,
            data: date,
        });

        try {
            const response = await fetch("https://api.razorpay.com/v1/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic" +
                        btoa(
                            `${rzp_test_7qcYsT0FXwSaPR} : ${eTlDjSt26h99vWbwgMK1aD56}`
                        ),
                },
                body: JSON.stringify({
                    amount: 500,
                    name: name,
                    email: email,
                    phone: phone,
                    currency: "INR",
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 201) {
            } else {
                if (data.customer_name) {
                    toastMessageFailed(data.customer_name[0]);
                } else if (data.customer_email) {
                    toastMessageFailed(data.customer_email[0]);
                } else if (data.adults) {
                    toastMessageFailed(data.adults[0]);
                } else if (data.children) {
                    toastMessageFailed(data.children[0]);
                } else if (data.tour_package) {
                    toastMessageFailed(data.tour_package[0]);
                } else if (data.arrival_date) {
                    toastMessageFailed(data.arrival_date[0]);
                }
            }
        } catch (error) {
            toastMessageFailed("Server error, please try again");
        }
    };

    const gridClasses = useGrid
        ? "grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center"
        : "flex flex-col gap-2";

    const hasFormData = () => {
        if (name && email && phone && adults && tourPackage) return true;

        return false;
    };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    action="submit"
                    method="post"
                    className={`block px-5 py-8 bg-white ${
                        useGrid ? "mx-4" : ""
                    } md:mx-10 shadow rounded`}
                >
                    <div className={gridClasses}>
                        <Input
                            type="text"
                            variant="bordered"
                            label="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            variant="bordered"
                            label="Email"
                            isInvalid={isInvalid}
                            color={isInvalid ? "danger" : "default"}
                            errorMessage="Please enter a valid email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="tel"
                            variant="bordered"
                            label="Phone Number"
                            isInvalid={isPhoneInvalid}
                            color={isPhoneInvalid ? "danger" : "default"}
                            errorMessage="Please enter a valid phone number"
                            required
                            value={phone}
                            maxLength={10}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <Select
                            label="Select Tour package"
                            className="mb-2"
                            errorMessage="Please select a package"
                            required
                            value={tourPackage}
                            onChange={(e) => setTourPackage(e.target.value)}
                        >
                            {pkg &&
                                pkg.map((item) => (
                                    <SelectItem key={item.id}>
                                        {item.name}
                                    </SelectItem>
                                ))}
                        </Select>
                    </div>

                    <div className={gridClasses}>
                        <Select
                            label="No. of Adults"
                            value={adults}
                            required
                            errorMessage="Please select no. of adults"
                            onChange={(e) => setAdults(e.target.value)}
                        >
                            <SelectItem key="1">1</SelectItem>
                            <SelectItem key="2">2</SelectItem>
                            <SelectItem key="3">3</SelectItem>
                            <SelectItem key="4">4</SelectItem>
                            <SelectItem key="5">5</SelectItem>
                            <SelectItem key="6">6</SelectItem>
                            <SelectItem key="7">7</SelectItem>
                            <SelectItem key="8">8</SelectItem>
                            <SelectItem key="9">9</SelectItem>
                            <SelectItem key="10">10</SelectItem>
                        </Select>

                        <Select
                            label="No. of Child"
                            className="p-1"
                            value={child}
                            onChange={(e) => setChild(e.target.value)}
                        >
                            <SelectItem key="0">0</SelectItem>
                            <SelectItem key="1">1</SelectItem>
                            <SelectItem key="2">2</SelectItem>
                            <SelectItem key="3">3</SelectItem>
                            <SelectItem key="4">4</SelectItem>
                            <SelectItem key="5">5</SelectItem>
                            <SelectItem key="6">6</SelectItem>
                            <SelectItem key="7">7</SelectItem>
                            <SelectItem key="8">8</SelectItem>
                            <SelectItem key="9">9</SelectItem>
                            <SelectItem key="10">10</SelectItem>
                        </Select>

                        <DatePicker
                            label="Choose a Date"
                            onChange={(e) => {
                                const dateStr =
                                    e.year + "-" + e.month + "-" + e.day;
                                setDate(dateStr);
                            }}
                        />
                        {hasFormData() ? (
                            <Button
                                type="submit"
                                color="primary"
                                className="mt-2 md:mt-0"
                            >
                                Book Tour Package
                            </Button>
                        ) : (
                            <Popover placement="top" showArrow={true}>
                                <PopoverTrigger>
                                    <Button className="bg-blue-400 text-white mt-2 md:mt-0">
                                        Book Tour Package
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="px-1 py-2">
                                        <div className="text-md text-rose-700">
                                            Please fill the form details
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;

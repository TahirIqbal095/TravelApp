import {
    Input,
    Select,
    SelectItem,
    Button,
    DatePicker,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@nextui-org/react";

import toast from "react-hot-toast";

import { useEffect, useState, useMemo, Children } from "react";

function Form({ useGrid }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [tourPackage, setTourPackage] = useState("");
    const [adults, setAdults] = useState("");
    const [child, setChild] = useState("");
    const [pkg, setPkg] = useState([]);
    const [date, setDate] = useState("");
    const [order, setOrder] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

        try {
            const response = await fetch(
                "https://adlizone.pythonanywhere.com/api/tours/bookings/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        customer_name: name,
                        customer_email: email,
                        customer_phone: phone,
                        adults: adults,
                        children: child,
                        tour_package: tourPackage,
                        arrival_date: date,
                    }),
                }
            );

            const data = await response.json();

            if (response.status === 201) {
                setOrder(data);
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
            key: "",
            amount: "",
            currency: "INR",
            name: "Mount Eco",
            description: "Thanks for trusting Mount Eco",
            image: assets.logo,
            order_id: "",
            handler: function (response) {
                toastSuccess("Payment Successfull");
            },
            prefill: {
                //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                name: "Tahir iqbal", //your customer's name
                email: "tahir@example.com",
                contact: "9000090000", //Provide the customer's phone number for better conversion rates
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
                                onPress={onOpen}
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
                                            Fill the form details
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                </form>
                <Modal
                    backdrop="blur"
                    size="xs"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    motionProps={{
                        variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                },
                            },
                            exit: {
                                y: -20,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                },
                            },
                        },
                    }}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 text-blue-600">
                                    Details
                                </ModalHeader>
                                <ModalBody>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Name :</span>
                                        <span className="text-sm font-normal">
                                            {name}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Phone No :</span>
                                        <span className="text-sm font-normal">
                                            {phone}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Email :</span>
                                        <span className="text-sm font-normal">
                                            {email}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Tour Package :</span>
                                        <span className="text-sm font-normal">
                                            {tourPackage}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Adults : </span>
                                        <span className="text-sm font-normal">
                                            {adults}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between text-base font-semibold">
                                        <span>Children : </span>
                                        <span className="text-sm font-normal">
                                            {child}
                                        </span>
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        color="primary"
                                        onClick={displayRazorpay}
                                    >
                                        Pay with Razorpay
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

export default Form;

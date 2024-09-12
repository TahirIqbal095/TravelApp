import {
  Input,
  Select,
  SelectItem,
  Button,
  DatePicker,
} from "@nextui-org/react";

import toast from "react-hot-toast";

import { useEffect, useState, useMemo } from "react";

function Form({ useGrid }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tourPackage, setTourPackage] = useState("");
  const [adults, setAdults] = useState("");
  const [child, setChild] = useState("");
  const [pkg, setPkg] = useState([]);
  const [date, setDate] = useState("");

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
  const toastMessageSucess = () => toast.success("Form submitted successfully");
  const toastMessageFailed = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    fetch("https://adlizone.pythonanywhere.com/api/tours/")
      .then((response) => response.json())
      .then((data) => setPkg(data))
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

      if (response.ok) {
        toastMessageSucess();
        setName("");
        setEmail("");
        setPhone("");
        setTourPackage("");
        setAdults("");
        setChild("");
      } else {
        const errorData = await response.json();

        if (errorData.customer_name) {
          toastMessageFailed(errorData.customer_name[0]);
        } else if (errorData.customer_email) {
          toastMessageFailed(errorData.customer_email[0]);
        } else if (errorData.adults) {
          toastMessageFailed(errorData.adults[0]);
        } else if (errorData.children) {
          toastMessageFailed(errorData.children[0]);
        } else if (errorData.tour_package) {
          toastMessageFailed(errorData.tour_package[0]);
        } else if (errorData.arrival_date) {
          toastMessageFailed(errorData.arrival_date[0]);
        }
      }
    } catch (error) {
      toastMessageFailed("Server error, please try again later");
    }
  };

  const gridClasses = useGrid
    ? "grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center"
    : "flex flex-col gap-2";

  return (
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
              <SelectItem key={item.id}>{item.name}</SelectItem>
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
            const dateStr = e.year + "-" + e.month + "-" + e.day;
            setDate(dateStr);
          }}
        />

        <Button type="submit" color="primary" className="mt-2 md:mt-0">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

export default Form;

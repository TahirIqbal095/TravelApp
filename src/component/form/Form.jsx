import {
  Input,
  Select,
  SelectItem,
  Button,
  DatePicker,
} from "@nextui-org/react";

import { useState } from "react";

function Form({ useGrid }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tourPackage, setTourPackage] = useState("");
  const [adults, setAdults] = useState("");
  const [child, setChild] = useState("");

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
          }),
        }
      );

      if (response.ok) {
        alert("Booking successful");
      } else {
        alert("Booking failed");
      }
    } catch (error) {
      console.error(`Error caused by: ${error}`);
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
      className="block px-5 py-8 bg-white mx-4 md:mx-10 shadow rounded"
    >
      <div className={gridClasses}>
        <Input
          type="text"
          variant="bordered"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          variant="bordered"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          variant="bordered"
          label="Phone Number"
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Select
          label="Select Tour package"
          className="mb-2"
          value={tourPackage}
          onChange={(e) => setTourPackage(e.target.value)}
        >
          <SelectItem key="pahalgam">Pahalgam</SelectItem>
          <SelectItem key="gulmarg">Gulmarg</SelectItem>
          <SelectItem key="margantop">Margan Top</SelectItem>
          <SelectItem key="Daksum">Daksum</SelectItem>
          <SelectItem key="verinag">Verinag</SelectItem>
        </Select>
      </div>

      <div className={gridClasses}>
        <Select
          label="No. of Adults"
          value={adults}
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

        {/* <DatePicker
          aria-label="select a date"
          className="max-w-md"
          granularity="day"
          value={date}
          onChange={(e) => {
            const formattedDate = format(
              new Date(e.day, e.month, e.year),
              "dd-mm-yyyy"
            );
            setDate(e);
          }}
        /> */}

        <Button type="submit" color="primary" className="mt-2 md:mt-0">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

export default Form;

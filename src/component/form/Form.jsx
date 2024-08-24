import {
  Input,
  Select,
  SelectItem,
  Button,
  DatePicker,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

function Form({ useGrid }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tourPackage, setTourPackage] = useState();
  const [adults, setAdults] = useState("");
  const [child, setChild] = useState("");
  const [pkg, setPkg] = useState([]);

  useEffect(() => {
    fetch("https://adlizone.pythonanywhere.com/api/tours/")
      .then((response) => response.json())
      .then((data) => setPkg(data))
      .catch((error) => console.error(`Error caused by: ${error}`));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!tourPackage || !phone || !name) {
      alert("Please fill in all the fields before submitting the form.");
      return;
    }

    fetch("https://adlizone.pythonanywhere.com/api/tours/bookings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tourPackage,
        adults,
        child,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking successful:", data);
        // Handle successful booking
      })
      .catch((error) => console.error(`Error caused by: ${error}`));
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
          onChange={(e) => {
            setTourPackage(e.target.value);
          }}
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

        <DatePicker label="Choose a Date" />

        <Button type="submit" color="primary" className="mt-2 md:mt-0">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

export default Form;

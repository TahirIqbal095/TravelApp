import React, { useEffect } from "react";

import "./enquiryForm.css";

function EnquiryForm() {
  const [formData, setFormData] = React.useState({
    travel_date: "",
    name: "",
    email: "",
    phone: "",
    destination: "srinagar",
    adults: "1",
    children: "0",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="sidebar | ">
      <form
        action="#"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto p-4"
      >
        <input
          type="date"
          id="date"
          name="travel_date"
          onChange={handleChange}
          placeholder="dd-mm-yyyy"
          className="py-2 px-4 text-gray-500 rounded-lg border outline-none"
        />

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="py-2 px-4 text-gray-500 rounded-lg border outline-none"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="py-2 px-4 text-gray-500 rounded-lg border outline-none"
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="py-2 px-4 text-gray-500 rounded-lg border outline-none"
        />

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-md" htmlFor="destination">
            Select you destination
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="py-2 rounded-lg border outline-none"
          >
            <option value="srinagar">Srinagar</option>
            <option value="pahalgam">Pahalgam</option>
            <option value="gulmarg">Gulmarg</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-md" for="adults">
            No. of Adults
          </label>
          <select
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="py-2 rounded-lg border outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-md" for="children">
            No. of Children
          </label>
          <select
            id="children"
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="py-2 rounded-lg border outline-none"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-green-600 text-white px-5 py-2 mt-4 rounded-md shadow text-sm font-medium"
        >
          SEND ENQUIRY
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;

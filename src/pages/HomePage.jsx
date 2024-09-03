import { useState, useEffect } from "react";

import Hero from "../component/hero/Hero";
import Form from "../component/form/Form";
import Card from "../component/card/Card";
import Trending from "../component/trending/Trending";

import Testimonial from "../component/testimonial/Testimonial";
import PopoverContact from "../component/popover/PopoverContact";
import CardGrid2 from "../component/cardgrid/CardGrid2";

import "./styles/homepage.css";

function HomePage() {
  const [pkgs, setPkgs] = useState([]);

  useEffect(() => {
    fetch("https://adlizone.pythonanywhere.com/api/tours/")
      .then((response) => response.json())
      .then((data) => {
        setPkgs(data);
      })
      .catch((error) => console.error(`Error caused by : ${error}`));
  }, []);

  const pkgList = pkgs.map((pkg) => (
    <Card
      id={pkg.id}
      key={pkg.id}
      name={pkg.name}
      description={pkg.description}
      duration={pkg.duration}
      price={pkg.price}
      img={pkg.image}
    />
  ));

  const whyChooseUs = [
    {
      id: 1,
      heading: "20+ Year Experience",
      details:
        " Boasting over two decades in the tourism and hospitality industry Mount Eco has amassed invaluable experience that sets us apart",
      color: "#dae5ea",
    },
    {
      id: 2,
      heading: " A Team of Experts",
      details:
        " Our experienced team at Mount Eco is more than just proficient; they are destination experts for every location within the mesmerizing landscape of India. Their knowledge is an invaluable asset for every traveler.",
      color: "#EFF4EF",
    },
    {
      id: 3,
      heading: "Value for Money Tours",
      details:
        " With Mount Eco, your vacation is not just about sightseeing it's about creating memories that last a lifetime. Our holiday packages are hassle-free and designed with a focus on value for money.",
      color: "#FBF2F1",
    },
  ];

  return (
    <>
      <div className=" bottom-10 left-2 md:left-4 z-50 fixed">
        <PopoverContact />
      </div>

      <div className="relative">
        <Hero />
        <div className="absolute -bottom-[34rem]  md:-bottom-28 mx-auto w-full">
          <Form useGrid={true} />
        </div>
      </div>

      <section className="mt-[38rem] md:mt-52">
        <Trending />
      </section>

      <section className="mt-20">
        <CardGrid2 />
      </section>

      {/* why choose us */}
      <div className="container my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
          Why Choose us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {whyChooseUs.map((data) => (
            <div
              id="why-choose-us-card"
              key={data.id}
              className={`text-center px-2 md:px-8 py-6 md:py-12 rounded shadow space-y-8`}
              style={{ backgroundColor: data.color }}
            >
              <p className="text-gray-700 ">
                <span className="material-symbols-outlined">thumb_up</span>
              </p>
              <h3 className="font-semibold text-lg text-gray-700">
                {data.heading}
              </h3>
              <p className="text-gray-600">{data.details}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="container | mt-8 md:mt-16 py-8">
        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-600">
            Explore our
            <span className="text-blue-500"> Tour Packages </span>
          </h1>
        </div>
        <div
          id="tour-package"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pkgList}
        </div>
      </section>

      {/* line  */}
      <div className="inline-flex items-center justify-center w-full mt-8">
        <hr className="w-72 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-[#f9f8f8]  left-1/2 dark:bg-gray-900">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>

      <div className="container my-8">
        <Testimonial />
      </div>
    </>
  );
}

export default HomePage;

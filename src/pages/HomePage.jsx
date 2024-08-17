import { useState, useEffect } from "react";

import Hero from "../component/hero/Hero";
import CardGrid from "../component/cardgrid/CardGrid";
import Form from "../component/form/Form";
import Carousel from "../component/carousel/Carousel";

function HomePage() {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-[30rem]  md:-bottom-28 mx-auto w-full">
          <Form />
        </div>
      </div>

      <section className="mt-[35rem] md:mt-44">
        <CardGrid />
      </section>

      <section className="container | my-6 px-2 md:px-0 py-8">
        <div className="mb-4">
          <h1 className=" text-3xl md:text-4xl font-bold text-gray-600">
            Explore our
            <span className="text-blue-500"> Tour Packages </span> by Region
          </h1>
        </div>
        <div>
          <Carousel />
        </div>
      </section>
    </>
  );
}

export default HomePage;

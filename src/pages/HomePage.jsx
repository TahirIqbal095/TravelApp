import { useState, useEffect, lazy } from "react";

import Hero from "../component/hero/Hero";
import CardGrid from "../component/cardgrid/CardGrid";
import Form from "../component/form/Form";
import Card from "../component/card/Card";

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

  // const Grid = lazy(() => import("../component/cardgrid/CardGrid"));

  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-[34rem]  md:-bottom-28 mx-auto w-full">
          <Form useGrid={true} />
        </div>
      </div>

      <section className="mt-[35rem] md:mt-44">
        <CardGrid />
      </section>

      <section className="container | my-6 px-2 md:px-0 py-8">
        <div className="mb-4">
          <h1 className=" text-3xl md:text-4xl font-bold text-gray-600">
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
    </>
  );
}

export default HomePage;

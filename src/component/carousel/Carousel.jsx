import React from "react";
import "@splidejs/splide/css";

import { Splide } from "@splidejs/splide";
import TourPackage from "../tourpackage/TourPackage";

function Carousel() {
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/api/tours/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPackages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      perPage: 2,
      perMove: 1,
      gap: "1rem",

      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <section className="splide" aria-label="Splide Basic HTML Example">
      <div className="splide__track">
        <ul className="splide__list">
          {packages &&
            packages.map((pkg) => (
              <li className="splide__slide">
                <TourPackage name={pkg.name} key={pkg.id} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Carousel;

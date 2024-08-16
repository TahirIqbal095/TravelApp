import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import { useEffect } from "react";

import { assets } from "../../assets/assets";

function Slider() {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      width: "100%",
      heightRatio: 0.5,
      autoplay: true,
      interval: 3000,
      speed: 900,

      breakpoints: {
        768: {
          heightRatio: 0.7,
        },
      },
    }).mount();
  });
  return (
    <section className="splide" aria-label="carousel">
      <div className="splide__track | w-full h-full">
        <ul className="splide__list">
          <li className="splide__slide">
            <div className="splide__slide__container">
              <img
                src={assets.img1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </li>
          <li className="splide__slide">
            <div className="splide__slide__container">
              <img
                src={assets.img2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </li>
          <li className="splide__slide">
            <div className="splide__slide__container">
              <img
                src={assets.img3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Slider;

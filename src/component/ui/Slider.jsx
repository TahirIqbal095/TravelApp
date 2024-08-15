import { Splide, SplideSlide } from "@splidejs/react-splide";
import { assets } from "../assets/assets";
import "@splidejs/react-splide/css";

function Slider() {
  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",
        speed: 1000,
        autoplay: true,
        gap: "1rem",
      }}
    >
      <SplideSlide>
        <img src={assets.img1} alt="Image 1" className="object-cover rounded" />
      </SplideSlide>
      <SplideSlide>
        <img src={assets.img2} alt="Image 2" className="object-cover rounded" />
      </SplideSlide>
    </Splide>
  );
}

export default Slider;

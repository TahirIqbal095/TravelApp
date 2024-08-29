import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

import { assets } from "../../assets/assets";

function Testimonial() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  const testmonialData = [
    {
      rating: 4.9,
      review:
        "My experience with Mount Eco was simply unforgettable. From the breathtaking landscapes of Kashmir to the warm hospitality, everything was perfect. The team at Mount Eco planned our trip meticulously, ensuring we experienced the true beauty of Kashmir. I highly recommend them for anyone looking to explore this paradise on Earth.",
      name: "Vikas Sharma",
      slideNumber: "number-slide1",
    },
    {
      rating: 4.7,
      review:
        "Mount Eco made our dream vacation in Kashmir a reality. The customized itinerary was exactly what we were looking for. We explored pristine valleys, stayed in cozy houseboats, and enjoyed authentic Kashmiri cuisine. The guides were knowledgeable and friendly, making our trip even more enjoyable. We’ll definitely be returning!",
      name: "Yogita Kushik",
      slideNumber: "number-slide2",
    },
    {
      rating: 4.8,
      review:
        "Our trip with Mount Eco was exceptional from start to finish. The team provided top-notch service, and every aspect of our tour was carefully curated. The accommodations were comfortable, and the activities were diverse, giving us a true taste of Kashmir’s culture and landscapes. I couldn’t have asked for a better travel experience.",
      name: "K K Sharma",
      slideNumber: "number-slide3",
    },
    {
      rating: 4.5,
      review:
        "Mount Eco delivered an incredible travel experience in Kashmir. From the moment we arrived, we were treated like family. The itinerary was well-planned, offering a perfect mix of adventure and relaxation. The guides shared fascinating insights about the region, and the stunning scenery left us in awe. I can’t recommend Mount Eco enough!",
      name: "Somnath Kumar",
      slideNumber: "number-slide4",
    },
  ];
  return (
    <section className="container my-8">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-600">
          Testimonials
        </h1>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {testmonialData.map((data) => (
          <div
            className={`keen-slider__slide ${data.slideNumber} bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm`}
          >
            <div className="">
              <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-base font-semibold text-indigo-600">
                  {data.rating}
                </span>
              </div>
              <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                {data.review}
              </p>
            </div>
            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
              <img
                className="rounded-full h-10 w-10"
                src={assets.testimonialuser}
                alt="avatar"
              />
              <div className="block">
                <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                  {data.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;

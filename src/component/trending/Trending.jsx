// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Trending() {
  const [trendingPkg, setTrendingPkg] = useState([]);

  useEffect(() => {
    fetch("https://adlizone.pythonanywhere.com/api/tours/")
      .then((res) => res.json())
      .then((data) => setTrendingPkg(data))
      .catch((err) => console.log("error fetching data" + err));
  });

  return (
    <>
      <section className="container">
        <div className="">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-600">
              Trending Now 🔥
            </h1>
            <p className="text-gray-600 mt-1 text-sm flex items-center">
              <span>Most Loved Packages on Mount Eco</span>
              <span className="material-symbols-outlined text-blue-600">
                keyboard_arrow_down
              </span>
            </p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-4"
            breakpoints={{
              486: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {trendingPkg.map((pkg) => (
              <SwiperSlide key={pkg.id} content="center">
                <Link to={`/package/details/${pkg.id}`}>
                  <div className="mb-12">
                    <div className="h-96 w-auto overflow-hidden rounded-lg">
                      <img
                        src={pkg.image}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-600">
                        {pkg.duration} Days Package
                      </p>
                      <p className="mt-2 text-lg font-medium hover:text-blue-500">
                        {pkg.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Trending;

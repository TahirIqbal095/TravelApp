import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Accord from "../component/accordion/Accordion";
import Form from "../component/form/Form";
import SmallCard from "../component/smallcard/SmallCard";
import Card from "../component/card/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

const API_URL = import.meta.env.VITE_API_URL;

function DetailPage() {
    const { id } = useParams();
    const [pkg, setPkg] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const [pkgResponse, categoriesResponse, cardResponse] =
                    await Promise.all([
                        fetch(`${API_URL}/api/tours/${id}/`),
                        fetch(`${API_URL}/api/tours/${id}/categories/`),
                        fetch(`${API_URL}/api/tours/`),
                    ]);

                const pkgData = await pkgResponse.json();
                const categoriesData = await categoriesResponse.json();
                const cardData = await cardResponse.json();

                setPkg(pkgData);
                setCategories(categoriesData);
                setCards(cardData);
            } catch (err) {
                console.error(`Error caused by: ${err}`);
            }
        };

        fetchData();
    }, [id]);

    const categoriesList = categories.map((cat) => (
        <div
            key={cat.id}
            className="bg-green-200 text-green-700 border-1 border-green-700 text-[0.7rem] rounded-full px-2 py-1"
        >
            {cat.name}
        </div>
    ));

    return (
        <>
            <div className="container lg:grid lg:grid-cols-3 items-start">
                <section className="md:col-span-2 space-y-8 mt-8">
                    <div>
                        <AsyncImage
                            src={pkg.image}
                            style={{ width: "100%", height: 250 }}
                            Transition={(props) => (
                                <Blur radius={10} {...props} />
                            )}
                            loader={<div style={{ background: "#94b8f2" }} />}
                        />
                    </div>
                    <div className="bg-white shadow p-6">
                        <div>
                            <div className="flex justify-between py-2 border-b-1">
                                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                                    <span>Tour Package</span>
                                    <span className="material-symbols-outlined | text-xl text-gray-600">
                                        checked_bag
                                    </span>
                                </p>
                                <p className="text-base text-gray-600">
                                    {pkg.name}
                                </p>
                            </div>
                            <div className="flex justify-between py-2 border-b-1">
                                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                                    <span>Duration</span>
                                    <span className="material-symbols-outlined | text-xl text-gray-600">
                                        schedule
                                    </span>
                                </p>
                                <p className="text-base text-gray-600">
                                    {pkg.duration} days
                                </p>
                            </div>
                            <div className="flex justify-between py-2 border-b-1">
                                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                                    <span>Price</span>
                                    <span className="material-symbols-outlined | text-xl text-gray-600">
                                        currency_rupee
                                    </span>
                                </p>
                                <p className="text-base text-gray-600">
                                    ₹ {pkg.price}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white mt-6 p-4 shadow">
                        <h2 className="text-lg md:text-xl text-gray-700 font-bold">
                            Tour Description
                        </h2>
                        <div className="flex gap-1 flex-wrap mt-1">
                            {categoriesList}
                        </div>
                        <p className="text-sm md:text-base text-gray-500 mt-2">
                            {pkg.description}
                        </p>
                    </div>

                    <div>
                        <Accord />
                    </div>

                    <div className="bg-white p-4 shadow mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">
                            Places you will{" "}
                            <span className="text-blue-500">Explore</span>
                        </h2>

                        <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <SmallCard />
                        </div>
                    </div>
                </section>

                <aside className="mt-8 lg:col-span-1 sticky top-0">
                    <Form useGrid={false} />
                </aside>
            </div>

            <div className="inline-flex items-center justify-center w-full mt-12">
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

            <section className="container my-12">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">
                    <span className="text-blue-500">Explore</span> more{" "}
                    <span className="text-4xl">&#10549;</span>
                </h1>
                <div>
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
                        }}
                    >
                        {cards.map((card) =>
                            card.id != id ? (
                                <SwiperSlide key={card.id}>
                                    <div className="mb-12">
                                        <Card
                                            id={card.id}
                                            name={card.name}
                                            description={card.description}
                                            duration={card.duration}
                                            price={card.price}
                                            img={card.image}
                                        />
                                    </div>
                                </SwiperSlide>
                            ) : (
                                " "
                            )
                        )}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default DetailPage;

import { assets } from "../../assets/assets";

function CardGrid2() {
  return (
    <>
      <section className="container">
        <div className="mb-4">
          <h1 className=" text-2xl md:text-3xl font-bold text-gray-600">
            Top <span className="text-blue-500">Locations</span> in Kashmir
          </h1>
          <p className="text-gray-600 mt-1 text-sm flex items-center">
            <span>Most Loved Locations on Mount Eco</span>
            <span className="material-symbols-outlined text-blue-600">
              keyboard_arrow_down
            </span>
          </p>
        </div>
        <div className="py-4 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="relative col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img
                  src={assets.gridimg1}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 opacity-75 transition-opacity duration-500 ease-in-out"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Dal Lake
                </h3>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <div
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={assets.gridimg2}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Shikara
                </h3>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <div
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={assets.gridimg3}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Daksum
                  </h3>
                </div>
                <div
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={assets.gridimg4}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Ladakh
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <div
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={assets.gridimg5}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Doodhpathri
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardGrid2;

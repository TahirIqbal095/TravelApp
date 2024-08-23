import "./hero.css";

function Hero() {
  return (
    <section className="hero-section | relative bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/55"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us plan you a perfect
            <strong className="block font-extrabold text-blue-500">
              {" "}
              Kashmir Holiday.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#tour-package"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Book Now
            </a>

            <a
              href="#tour-package"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              View Tour Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import "./hero.css";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section | relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gray-900/55"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
          <h1 className="hero-heading | text-center font-semibold md:font-bold text-white">
            Let us plan you a perfect
            <spna className="block font-bold md:font-extrabold text-blue-600">
              Kashmir Holiday
            </spna>
          </h1>
          <p className="text-gray-200 text-center text-lg md:text-xl">
            Journey to the Heart of Kashmir, Adventure Awaits with Mount Eco
          </p>
          <div className="mt-8 flex flex-col text-center gap-4">
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

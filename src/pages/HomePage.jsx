import TravelPackage from "../component/travelPackage/TravelPackage";

function HomePage() {
  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-6 mt-10 mb-5">
        <TravelPackage />
        <TravelPackage />
        <TravelPackage />
        <TravelPackage />
        <TravelPackage />
      </section>
    </>
  );
}

export default HomePage;

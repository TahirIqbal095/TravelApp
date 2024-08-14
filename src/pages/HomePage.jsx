import { Link } from "react-router-dom";
import TravelPackage from "../component/travelPackage/TravelPackage";

function HomePage() {
  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-6 mt-10 mb-5">
        <TravelPackage />
        <TravelPackage />
      </section>
      <Link
        to="enquiry-form"
        className="bg-green-600 text-white px-5 py-2 mt-4 rounded-md shadow text-sm font-medium"
      >
        Send Enquiry
      </Link>
    </>
  );
}

export default HomePage;

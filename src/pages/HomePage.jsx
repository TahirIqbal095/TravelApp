import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import TravelPackage from "../component/travelPackage/TravelPackage";

function HomePage() {
  const [packages, setPackages] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((res) => res.json())
  //     .then((data) => setPackages(data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const packageList = packages.map((pkg) => (
  //   <TravelPackage
  //     key={pkg.id}
  //     destination={pkg.destination}
  //     location={pkg.location}
  //     noOfDays={pkg.noOfDays}
  //     noOfPerson={pkg.noOfPerson}
  //     price={pkg.price}
  //     discount={pkg.discount}
  //   />
  // ));

  return (
    <>
      <section className="container |  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-6 mt-10 mb-5">
        <TravelPackage />
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

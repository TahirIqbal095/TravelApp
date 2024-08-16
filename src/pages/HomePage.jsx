import { useState, useEffect } from "react";

import Slider from "../component/ui/Slider";
import { assets } from "../assets/assets";
import TravelPackage from "../component/travelPackage/TravelPackage";
import { Footer } from "../component/footer/Footer";

function HomePage() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/package/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPackages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const packageList = packages.map((pkg) => (
    <TravelPackage
      key={pkg.id}
      destination={pkg.destinations}
      location={pkg.name}
      noOfDays={pkg.duration}
      price={pkg.price}
      name={pkg.name}
    />
  ));

  return (
    <>
      <header>
        <div className="">
          <Slider />
        </div>
      </header>
      <section className="container |  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-6 mt-10 mb-5">
        {packageList}
      </section>
      <Footer />
    </>
  );
}

export default HomePage;

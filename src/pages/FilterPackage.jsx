import { useEffect, useState } from "react";
import Card from "../component/card/Card";
import { useParams } from "react-router-dom";

function FilterPackage() {
  const [filterPkgs, setFilterPkgs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/search/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setFilterPkgs(data);
      })
      .catch((error) => console.error("error fetching data :" + error));
  }, [id]);

  const pkgList = filterPkgs.map((pkg) => (
    <Card
      id={pkg.id}
      key={pkg.id}
      name={pkg.name}
      description={pkg.description}
      duration={pkg.duration}
      price={pkg.price}
      img={pkg.image}
    />
  ));

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {pkgList}
      </div>
    </section>
  );
}

export default FilterPackage;

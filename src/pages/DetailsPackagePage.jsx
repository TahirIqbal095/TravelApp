import { useState } from "react";
import DetailsOfPackage from "../component/travelPackage/DetailsOfPackage";
import { useEffect } from "react";

function DetailsPackagePage() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/package/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {details.map((detail) => (
        <DetailsOfPackage
          key={detail.id}
          name={detail.name}
          price={detail.price}
        />
      ))}
    </>
  );
}

export default DetailsPackagePage;

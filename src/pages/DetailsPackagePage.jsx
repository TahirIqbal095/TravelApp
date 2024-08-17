import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailsOfPackage from "../component/travelPackage/DetailsOfPackage";

function DetailsPackagePage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/tours/${id}/itineraries`)
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
          name={detail.title}
          noOfDays={detail.day_number}
          description={detail.description}
        />
      ))}
    </>
  );
}

export default DetailsPackagePage;

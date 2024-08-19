import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardDetails from "../component/card/CardDetails";

function DetailPage() {
  const { id } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/tours/${id}/itineraries`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItineraries(data);
      })
      .catch((err) => console.error(`Error caused by : ${err}`));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/tours/${id}/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => console.error(`Error caused by : ${err}`));
  }, [id]);

  return (
    <>
      {itineraries &&
        itineraries.map((it) => (
          <CardDetails
            id={it.id}
            key={it.id}
            title={it.title}
            description={it.description}
            noOfDays={it.day_number}
            categories={categories}
          />
        ))}
    </>
  );
}

export default DetailPage;

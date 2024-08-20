import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardDetails from "../component/card/CardDetails";
import Accord from "../component/accordion/Accordion";

function DetailPage() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [pkg, setPkg] = useState([]);

  useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPkg(data);
      })
      .catch((err) => console.error("Error caused by : " + err));
  }, []);

  useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/categories/`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(`Error caused by : ${err}`));
  }, [id]);

  return (
    <>
      <div className="container | mt-10">
        <div className="bg-white p-6">
          <div>
            <div className="flex justify-between py-2 border-b-1">
              <p className="font-medium text-base md:text-lg text-gray-700">
                Tour Package
              </p>
              <p className="text-base text-gray-600">{pkg.name}</p>
            </div>
            <div className="flex justify-between py-2 border-b-1">
              <p className="font-medium text-base md:text-lg text-gray-700">
                Duration
              </p>
              <p className="text-base text-gray-600">{pkg.duration} days</p>
            </div>
            <div className="flex justify-between py-2 border-b-1">
              <p className="font-medium text-base md:text-lg text-gray-700">
                Price
              </p>
              <p className="text-base text-gray-600">₹ {pkg.price}</p>
            </div>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 shadow">
          <h2 className="text-lg md:text-xl text-gray-700 font-medium">
            Tour Description
          </h2>
          <p className="text-base text-gray-700 mt-2">{pkg.description}</p>
        </div>
      </div>

      <div className="container | mt-8">
        <Accord />
      </div>
      <div className="container | my-8 bg-white p-4 shadow">
        <h2 className="text-2xl mb-3 text-gray-700">Categories</h2>
        <div className="flex gap-2 flex-wrap">
          {categories &&
            categories.map((cat) => (
              <div className="bg-green-200 text-green-700 border-2 border-green-700 rounded-full px-3 py-1">
                {cat.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default DetailPage;

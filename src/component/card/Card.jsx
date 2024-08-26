import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [categories, setCategories] = useState([]);

  const categoriesList =
    categories &&
    categories.map((cat) => (
      <div
        key={cat.id}
        className="bg-green-200 text-green-700 border-1 border-green-700 text-[0.7rem] rounded-full px-2 py-1"
      >
        {cat.name}
      </div>
    ));

  useEffect(() => {
    fetch(
      `https://adlizone.pythonanywhere.com/api/tours/${props.id}/categories/`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(`Error caused by : ${err}`));
  });
  return (
    <div className="rounded-xl shadow-lg px-4 py-6 mx-auto border bg-white">
      <div className="w-full h-60 overflow-hidden rounded-xl">
        <img
          src={props.img}
          alt={props.name}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
      <div className="bg-white flex flex-col space-y-2 py-4">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium text-sm">Tour Package</p>

          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
            {props.duration} days
          </div>
        </div>
        <h3 className="font-extrabold text-gray-800 md:text-3xl text-xl">
          {props.name}
          <div className="flex gap-1 flex-wrap mt-1 text-xs font-light">
            {categoriesList}
          </div>
        </h3>
        <p className="md:text-base text-gray-500 text-base">
          {props.description.split(" ").slice(0, 14).join(" ")}
          <Link to={`package/details/${props.id}`} className="text-indigo-700">
            ...more
          </Link>
        </p>
        <p className="text-xl font-black text-gray-800">₹{props.price}</p>
      </div>
      <div className="">
        <Link
          to={`package/details/${props.id}`}
          className=" rounded bg-blue-600 px-10 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function TravelPackage(props) {
  return (
    <>
      <div className="bg-white shadow-md duration-500 hover:scale-100 hover:shadow-xl">
        <img
          src={assets.doodhpatri}
          alt="Product"
          className="max-w-80 object-cover"
        />
        <div className="px-4 py-6 max-w-80 mx-auto">
          <p className="text-lg font-bold text-gray-800 truncate block capitalize">
            {props.name}
          </p>
          <div className="text-gray-500 mt-2 flex justify-between items-center mr-3 uppercase text-sm">
            <div className="flex items-center">
              <span className="material-symbols-outlined | text-green-600 text-[1.2rem]">
                pin_drop
              </span>
              <p className="ml-1">Srinagar</p>
            </div>
            <div className="flex items-center">
              <span className="material-symbols-outlined | text-green-600 text-[1.2rem]">
                calendar_month
              </span>
              <p className="ml-1">{props.noOfDays} days</p>
            </div>
            <div className="flex items-center">
              <span className="material-symbols-outlined | text-green-600 text-[1.2rem]">
                person
              </span>
              <p className="ml-1">2 Person</p>
            </div>
          </div>
          <div className="flex items-center text-gray-800 mt-2">
            <p className="text-lg font-semibold cursor-auto my-3">
              ${props.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">15000</p>
            </del>
            <div className="ml-auto">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
          </div>

          <Link
            to={`package/details/${props.id}`}
            className="bg-green-600 text-white px-5 py-2 mt-4 rounded-md shadow text-sm font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default TravelPackage;

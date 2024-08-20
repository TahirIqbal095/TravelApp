import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Card(props) {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative rounded-xl shadow-lg p-6 max-w-lg md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full bg-white grid place-items-center">
          <img src={props.img} alt="" className="rounded-xl" />
        </div>
        <div className="w-full bg-white flex flex-col space-y-2 py-4">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">
              Vacations
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span className="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Superhost
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {props.name}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {props.description}
          </p>
          <p className="text-xl font-black text-gray-800">
            ₹{props.price}
            <span className="font-normal text-gray-600 text-base">/night</span>
          </p>
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
    </div>
  );
}

export default Card;

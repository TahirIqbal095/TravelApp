import { assets } from "../../assets/assets";

function TravelPackage() {
  return (
    <>
      <div className="bg-white shadow-md duration-500 hover:scale-100 hover:shadow-xl">
        <img
          src={assets.doodhpatri}
          alt="Product"
          className="h-60 w-80 object-cover"
        />
        <div className="px-4 py-6 w-80">
          <p className="text-lg font-bold text-gray-800 truncate block capitalize">
            Doodhpatri
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
              <p className="ml-1">3 days</p>
            </div>
            <div className="flex items-center">
              <span className="material-symbols-outlined | text-green-600 text-[1.2rem]">
                person
              </span>
              <p className="ml-1">2 Person</p>
            </div>
          </div>
          <div className="flex items-center text-gray-800 mt-2">
            <p className="text-lg font-semibold cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <span class="material-symbols-outlined">shopping_bag</span>
            </div>
          </div>

          {/* <div className="flex justify-between items-center text-center my-4 text-gray-500">
              <div>
                <span class="material-symbols-outlined">
                  emoji_transportation
                </span>
                <p>Hotels</p>
              </div>
              <div>
                <span class="material-symbols-outlined">skillet</span>
                <p>Food</p>
              </div>
              <div>
                <span class="material-symbols-outlined">car_rental</span>
                <p>car rental</p>
              </div>
            </div> */}

          <button className="bg-green-600 text-white px-5 py-2 mt-4 rounded-md shadow text-sm font-medium">
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default TravelPackage;

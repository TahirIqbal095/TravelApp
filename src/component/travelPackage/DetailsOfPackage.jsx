import "./detailsOfPackage.css";

function DetailsOfPackage(props) {
  return (
    <div className="container">
      <div>
        <div className=" bg-white shadow p-4">
          <div className="flex flex-col gap-8 md:flex-row justify-between border-b py-4">
            <div>
              <div className="flex items-center">
                <span className="material-symbols-outlined | text-blue-600">
                  location_on
                </span>
                <h2 className="ml-1 text-blue-800 text-lg">{props.name}</h2>
              </div>
              <p className="text-base text-gray-700 ml-2">
                Srinagar » Pahalgam » Gulmarg
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <span className="material-symbols-outlined | text-blue-600">
                  schedule
                </span>
                <h2 className="ml-1 text-blue-800 text-lg">Duration</h2>
              </div>
              <p className="text-base text-gray-700 ml-2">4 Nights / 3 days</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row justify-between py-4">
            <div className="">
              <div className="flex items-center">
                <span className="material-symbols-outlined | text-blue-600 text-base">
                  mountain_flag
                </span>
                <h2 className="ml-1 text-blue-800 text-lg">
                  Special Attention
                </h2>
              </div>
              <ul className="text-sm text-gray-700 max-w-[54ch]">
                <li className="ml-2">
                  » Personal assistance by our representative at airports
                </li>
                <li className="ml-2">
                  » Special take care of senior citizens, physically challenged
                  travelers, and kids
                </li>
                <li className="ml-2">
                  » At arrival, you will get a kit of your complete tour
                  documents
                </li>
              </ul>
            </div>

            <div>
              <h2 className="ml-1 text-blue-800 text-lg">Package Cost</h2>

              <p className="text-base text-green-600 ml-2 flex">
                Staring From:
                <span className="material-symbols-outlined | text-base">
                  currency_rupee
                </span>
                12,800
              </p>
              <p className="text-xs text-gray-600 ml-2 max-w-[24ch]">
                (Customize this tour as per your requirements)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 shadow">
          <h2 className="text-xl text-blue-800 font-medium">
            Tour Description
          </h2>
          <p className="text-base text-gray-700 mt-2">
            We know the feeling when there are long weekends or holidays or
            simply its yearning to bunk from work and take off with family or
            friends to explore some interesting places of India. So, when you
            are short on time, you may choose our below tour package, which will
            energize and rejuvenate you and it also help you to discover the
            hidden treasures of India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsOfPackage;

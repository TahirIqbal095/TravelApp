function CardDetails(props) {
  return (
    <div className="container | my-10">
      <div className="bg-white p-6">
        <div className="flex justify-between py-2 border-b-1">
          <p className="font-medium text-base md:text-lg text-gray-700">
            Tour Package
          </p>
          <p className="text-base text-gray-600">{props.title}</p>
        </div>
        <div className="flex justify-between py-2 border-b-1">
          <p className="font-medium text-base md:text-lg text-gray-700">
            Duration
          </p>
          <p className="text-base text-gray-600">{props.noOfDays}</p>
        </div>
        <div className="flex justify-between py-2 border-b-1">
          <p className="font-medium text-base md:text-lg text-gray-700">
            Price
          </p>
          <p className="text-base text-gray-600">12000</p>
        </div>
      </div>

      <div className="bg-white mt-6 p-4 shadow">
        <h2 className="text-lg md:text-xl text-gray-700 font-medium">
          Tour Description
        </h2>
        <p className="text-base text-gray-700 mt-2">{props.description}</p>
      </div>
    </div>
  );
}

export default CardDetails;

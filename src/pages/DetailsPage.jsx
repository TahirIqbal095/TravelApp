import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import Accord from "../component/accordion/Accordion";
import Form from "../component/form/Form";

function DetailPage() {
  const { id } = useParams();
  const [pkg, setPkg] = useState([]);
  const [pkgname, setPkgName] = useState([]);
  const [categories, setCategories] = useState([]);
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const [pkgResponse, categoriesResponse, destinationsResponse] =
          await Promise.all([
            fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/`),
            fetch(
              `https://adlizone.pythonanywhere.com/api/tours/${id}/categories/`
            ),
            fetch(
              `https://adlizone.pythonanywhere.com/api/tours/${id}/destinations/`
            ),
          ]);

        const pkgData = await pkgResponse.json();
        const categoriesData = await categoriesResponse.json();
        const destinationsData = await destinationsResponse.json();

        setPkg(pkgData);
        setCategories(categoriesData);
        setDestination(destinationsData);

        const packageNames = pkgData.name;
        setPkgName(packageNames);
      } catch (err) {
        console.error(`Error caused by: ${err}`);
      }
    };

    fetchData();
  }, [id]);

  const categoriesList = categories.map((cat) => (
    <div
      key={cat.id}
      className="bg-green-200 text-green-700 border-1 border-green-700 text-[0.7rem] rounded-full px-2 py-1"
    >
      {cat.name}
    </div>
  ));

  return (
    <>
      <div className=" container lg:grid lg:grid-cols-3 mb-4">
        <section className="md:col-span-2 space-y-8 mt-8">
          <div>
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full max-h-60 object-cover"
            />
          </div>
          <div className="bg-white shadow p-6">
            <div>
              <div className="flex justify-between py-2 border-b-1">
                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                  <span>Tour Package</span>
                  <span className="material-symbols-outlined | text-xl text-gray-600">
                    checked_bag
                  </span>
                </p>
                <p className="text-base text-gray-600">{pkg.name}</p>
              </div>
              <div className="flex justify-between py-2 border-b-1">
                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                  <span>Duration</span>
                  <span className="material-symbols-outlined | text-xl text-gray-600">
                    schedule
                  </span>
                </p>
                <p className="text-base text-gray-600">{pkg.duration} days</p>
              </div>
              <div className="flex justify-between py-2 border-b-1">
                <p className="font-medium text-lg md:text-xl text-gray-700 flex items-center gap-2">
                  <span>Price</span>
                  <span className="material-symbols-outlined | text-xl text-gray-600">
                    currency_rupee
                  </span>
                </p>
                <p className="text-base text-gray-600">₹ {pkg.price}</p>
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 p-4 shadow">
            <h2 className="text-lg md:text-xl text-gray-700 font-bold">
              Tour Description
            </h2>
            <div className="flex gap-1 flex-wrap mt-1">{categoriesList}</div>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              {pkg.description}
            </p>
          </div>

          <div>
            <Accord />
          </div>

          <div className="bg-white p-4 shadow mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              Places you will <span className="text-blue-500">Explore</span>
            </h2>

            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {destination &&
                destination.map((item) => (
                  <Card
                    shadow="sm"
                    key={item.id}
                    isPressable
                    onPress={() => console.log("item pressed")}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.name}
                        className="w-full object-cover h-[140px]"
                        src={item.image}
                      />
                    </CardBody>
                    <CardFooter className="text-small font-medium text-gray-600 justify-between">
                      <p>{item.name}</p>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <aside className="mt-8 lg:col-span-1">
          <Form name={pkgname} useGrid={false} />
        </aside>
      </div>
    </>
  );
}

export default DetailPage;

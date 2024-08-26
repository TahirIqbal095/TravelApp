import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function SmallCard() {
  const [destination, setDestination] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/destinations/`)
      .then((response) => response.json())
      .then((data) => setDestination(data))
      .catch((err) => console.error(`error caused by ${err}`));
  }, []);

  return (
    destination &&
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
    ))
  );
}

export default SmallCard;

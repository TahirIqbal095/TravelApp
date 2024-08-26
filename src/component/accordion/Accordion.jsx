import React from "react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accord() {
  // const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  const [itineraries, setItineraries] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/itineraries/`)
      .then((res) => res.json())
      .then((data) => {
        setItineraries(data);
      })
      .catch((err) => console.error(`Error caused by : ${err}`));
  }, [id]);

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-medium text-medium text-gray-800",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small md:text-medium px-2",
  };

  return (
    <Accordion
      // selectedKeys={selectedKeys}
      // onSelectionChange={setSelectedKeys}
      defaultExpandedKeys={["1"]}
      itemClasses={itemClasses}
    >
      {itineraries &&
        itineraries.map((it) => (
          <AccordionItem
            key={it.id}
            aria-label={`accordion ${it.id}`}
            title={it.title}
            className="text-gray-500"
          >
            {it.description}
          </AccordionItem>
        ))}
    </Accordion>
  );
}

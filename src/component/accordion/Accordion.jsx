import React from "react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accord() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  const [itineraries, setItineraries] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://adlizone.pythonanywhere.com/api/tours/${id}/itineraries/`)
      .then((res) => res.json())
      .then((data) => setItineraries(data))
      .catch((err) => console.error(`Error caused by : ${err}`));
  }, []);

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="bg-white px-4 shadow"
    >
      {itineraries &&
        itineraries.map((it) => (
          <AccordionItem key={it.key} aria-label="Accordion 1" title={it.title}>
            {it.description}
          </AccordionItem>
        ))}
    </Accordion>
  );
}

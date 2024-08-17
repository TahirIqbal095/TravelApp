import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

import { assets } from "../../assets/assets";

export default function TourPackage(props) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none relative">
      <Image
        alt="package available"
        className="object-cover brightness-50"
        src={assets.doodhpatri}
      />
      <div className="z-20 absolute p-2 md:p-4 text-white">
        <p className="text-xl font-semibold text-blue-500">
          Gulmarg ({props.key})
        </p>
        <p className="text-gray-200 max-w-[32ch]">
          The scenic beauty of the Himalayan Mountains in the back drop
        </p>
      </div>
      <CardFooter className="justify-between before:bg-white/0.5 border-white/0.5 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-base text-white">{props.name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="md"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { AsyncImage } from "loadable-image";

import { assets } from "../../assets/assets";

export default function PopoverContact() {
  return (
    <Popover placement="top" offset={20} showArrow>
      <PopoverTrigger className="">
        <Button className="rounded-[50%] h-20  md:h-20 md:w-20 bg-blue-600 text-white">
          <span className="material-symbols-outlined w-6 inline">call</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <a href="https://wa.me/7006906718">
            <AsyncImage
              src={assets.whatsapp}
              style={{ width: 50, height: 50 }}
              alt="image"
              loader={<div style={{ background: "#94b8f2" }} />}
            />
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

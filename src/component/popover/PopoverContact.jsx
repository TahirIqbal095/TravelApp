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
      <PopoverTrigger className="flex items-center justify-center text-center">
        <div className="rounded-[50%] h-14 w-14  md:h-16 md:w-16 bg-blue-600 text-white cursor-pointer">
          <span className="material-symbols-outlined w-10">call</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <a href="https://wa.me/8991000921">
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

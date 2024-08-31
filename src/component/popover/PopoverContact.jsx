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
      <PopoverTrigger>
        <Button
          color="primary"
          className="rounded-full md:rounded-[50%] h-[3rem] w-[3rem] md:h-20 md:w-20"
        >
          <span className="material-symbols-outlined">call</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <a href="">
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

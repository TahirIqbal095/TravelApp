import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { assets } from "../../assets/assets";

export default function PopoverContact() {
  return (
    <Popover placement="top" offset={20} showArrow>
      <PopoverTrigger>
        <Button color="primary" className="rounded-[50%] h-20 w-20">
          <span class="material-symbols-outlined">call</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <a href="">
            <img src={assets.whatsapp} className="w-20" alt="" />
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

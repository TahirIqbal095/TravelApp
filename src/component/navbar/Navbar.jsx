import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "../../assets/searchIcon";

export default function Nav() {
  return (
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="font-bold text-gray-700">TourAndTravel</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem isActive>
            <Link aria-current="page" aria-label="home" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-label="package" color="foreground">
              Packages
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" aria-label="contact" href="#">
              Contact us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold" aria-label="Signed in as">
                Signed in as
              </p>
              <p className="font-semibold" aria-label="Signed in as">
                tahir@example.com
              </p>
            </DropdownItem>
            <DropdownItem key="settings">Home</DropdownItem>
            <DropdownItem key="team_settings">Tour Packages</DropdownItem>
            <DropdownItem key="analytics">About Us</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

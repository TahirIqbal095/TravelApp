import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Packages",
    "Offers",
    "Trending packages",
    "J&k Tourism",
    "Offers",
    "Contact Us",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to={"/"} className="flex items-center">
            <img src={assets.logo} alt="" className="w-16" />
            <p className="font-bold text-inherit">Mount Eco</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to={"/"}>Home</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"/packages"}>Packages</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"/about-us"}>About Us</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to={"/"}>Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/packages"}>Tour Packages</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/"}>Trending Packages</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/about-us"}>About Us</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/"}>Offers</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/"}>Contact Us</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

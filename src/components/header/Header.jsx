import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-[#2c3033] font-marcellus h-[6rem]" onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="text-inherit text-white underline underline-offset-4 text-4xl">GUSSAB</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
         <NavbarItem>{/*isActive*/}
          <Link color="orange" name="Inicio" className="text-white hover:text-orange-300" aria-current="page" href="/">
            INICIO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" name="Menu" href="/menu" className="text-white hover:text-orange-300">
            MENU
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" name="Servicio" href="/servicios" className="text-white hover:text-orange-300">
            SERIVICIOS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" name="Sucursales" href="/sucursales" className="text-white hover:text-orange-300">
            SUCURSALES
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary"  href="/login" variant="flat" className="text-white bg-[#cd9b4a]">
            <h3>Iniciar Sesión</h3>
          </Button>
          {/* <Link className="text-white" name ="Login" href="/login">Login</Link> */}
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary"  href="#" variant="flat" className="text-white">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

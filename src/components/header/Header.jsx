import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, 
        NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Dropdown,
        DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem  
       } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";


export default function Header() {
  const isLoggedIn = localStorage.getItem('auth') === 'yes';
  const idrol = localStorage.getItem('idrol');

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "List_users",
    "Tablero",
    "My Settings",
    "Log Out",
  ];

  const logout = () =>{
    localStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    Navigate('/')
  }

  const isAdmin = idrol === '2';

  return (
    <Navbar className="bg-[#2c3033] font-marcellus h-[6rem] z-0" 
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link color="foreground" name="Inicio" href="/">
            <h1 className="text-inherit text-white underline underline-offset-4 text-4xl">GUSSAB</h1>
          </Link>
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
      {!isLoggedIn && (
        <NavbarItem>
            <Button as={Link} color="primary" name="Registro" href="/registro" variant="flat" className="text-white bg-transparent hover:text-orange-300">
              Registrarse
            </Button>
          </NavbarItem>
      )}
      {!isLoggedIn && (
        <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary"  href="/login" variant="flat" className="text-white bg-[#cd9b4a]">
              <h3>Iniciar Sesión</h3>
            </Button>
          </NavbarItem>
      )}
      {isLoggedIn && (
        <NavbarItem className="flex gap-2 items-center">
          <Button as={Link} href="/carrito" isIconOnly color="warning" variant="flat" className="bg-[#092A3A] pr-0.5 pl-1">
            <AiOutlineShoppingCart color="white" size="1.5em"/>
            <span className="bg-red-500 rounded-xl w-1.5 h-1.5 -mt-5 overflow-hidden"></span>
          </Button>
            <Button as={Link} onClick={logout} href="/" color="primary" variant="flat" className="text-orange-300 bg-transparent hover:text-orange-500">
              Cerrar Sesión
            </Button>
        </NavbarItem>
      )}    
      {isAdmin && isLoggedIn && (
        <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="bordered" className="text-white border-orange-300"  
                >
                  + Opciones
                </Button>
              </DropdownTrigger>
              
              <DropdownMenu aria-label="Static Actions">
                <DropdownSection showDivider>
                  <DropdownItem key="prove" className="text-gray-900" as={Link} href="/proveedores">
                    Proveedores
                  </DropdownItem>
                  <DropdownItem key="invent" className="text-gray-900" as={Link} href="/inventario">
                    Inventario
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem key="new" className="text-gray-900" as={Link} href="#">
                    Usuarios
                  </DropdownItem>
                  <DropdownItem key="copy" className="text-gray-900" as={Link} href="#">
                    Reservaciones
                  </DropdownItem>
                </DropdownSection>      
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
      )}    
          
          
      </NavbarContent> {/*className="sm:hidden" */}
        {/* <NavbarContent justify="start">  
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent> */}      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
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

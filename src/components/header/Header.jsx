import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,
  NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown,
  DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import { Navigate } from "react-router-dom";


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

  const logout = () => {
    localStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    Navigate('/')
  }

  const isAdmin = idrol === '2';
  const isCliente = idrol === '1';

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
            MENÚ
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
            <Button as={Link} color="primary" href="/login" variant="flat" className="text-white bg-[#cd9b4a]">
              <h3>Iniciar Sesión</h3>
            </Button>
          </NavbarItem>
        )}
        {isCliente && isLoggedIn && (
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
                <DropdownSection title="Servicios" showDivider>
                  <DropdownItem key="services" className="text-gray-900" as={Link} href="/servicios/solicitud-de-servicio">
                    Reservar servicio
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Ordenes realizadas" showDivider>
                  <DropdownItem key="order" className="text-gray-900" as={Link} href="/ordenes/cliente">
                    Mis ordenes
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem key="logout" className="text-orange-500 hover:text-orange-500" as={Link} onClick={logout} href="/" variant="flat">
                    {/* <Button    color="primary" variant="flat" className="text-orange-300 bg-transparent hover:text-orange-500">
                      Cerrar Sesión
                    </Button>   */}
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
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
                <DropdownSection title="Administración" showDivider>
                  <DropdownItem key="users" className="text-gray-900" as={Link} href="/usuarios/admin">
                    Usuarios
                  </DropdownItem>
                  <DropdownItem key="reservation" className="text-gray-900" as={Link} href="/servicios/reservaciones">
                    Reservaciones
                  </DropdownItem>
                  <DropdownItem key="orderadmin" className="text-gray-900" as={Link} href="/ordenes/admin">
                    Ordenes realizadas
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider>
                  <DropdownItem key="menuadmin" className="text-gray-900" as={Link} href="/menu/admin">
                    Menú
                  </DropdownItem>
                  <DropdownItem key="sucursaladmin" className="text-gray-900" as={Link} href="/sucursales/admin">
                    Sucursales
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Productos" showDivider>
                  <DropdownItem key="inv" className="text-gray-900" as={Link} href="/inventario">
                    Inventario
                  </DropdownItem>
                  <DropdownItem key="prove" className="text-gray-900" as={Link} href="/proveedores">
                    Proveedores
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem key="logout" className="text-orange-500" as={Link} onClick={logout} href="/" variant="flat">
                    {/* <Button    color="primary" variant="flat" className="text-orange-300 bg-transparent hover:text-orange-500">
                      Cerrar Sesión
                    </Button>   */}
                    Cerrar Sesión
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
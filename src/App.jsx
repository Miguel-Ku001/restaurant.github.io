import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ShowNavbar from './components/shownavbar/Shownavbar'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import Registro from './pages/registro/Registro'
import Login from './pages/login/Login'
import MenuAdmin from './pages/menu/MenuAdmin'
import Menu from './pages/menu/Menu'
import Ordenes from './pages/ordenes/Ordenes'
import Ordenespago from './pages/ordenes-pago/Ordenespago'
import Servicios from './pages/servicios/Servicios'
import Eventos from './pages/eventos/Eventos'
import Catering from './pages/catering/Catering'
import Bodas from './pages/bodas/Bodas'
import Sucursales from './pages/sucursales/Sucursales'
import SucursalesAdmin from './pages/sucursales/Sucursalesadmin'
import Proveedores from './pages/proveedores/Proveedores'
import Inventario from './pages/inventario/Inventario'
import Solicitudservicio from './pages/solicitud-servicio/Solicitudservicio'
import ListadoOrdenAdmin from './pages/ordenes/ListadoOrdenAdmin'
import ListadoOrdenCliente from './pages/ordenes/ListadoOrdenCliente'
import OrdenCart from './pages/orden-cart/OrdenCart'
<<<<<<< HEAD
import ListadoUsuarios from './pages/usuarios/UsuariosListado'
import TableroReservacion from './pages/solicitud-servicio/TableroReservacion'
=======
>>>>>>> 921c359 (appjsx cambiado)

function App() {

  return (
    <>
    <Router>
      <ShowNavbar>
        <Header />
      </ShowNavbar>
        <Routes>
          <Route exact path='/' element={ <Inicio /> } />
          <Route exact path='/registro' element={ <Registro /> } />
          <Route exact path='/login' element={ <Login /> } />
          <Route exact path='/menu/admin' element={ <MenuAdmin /> } />
          <Route exact path='/menu' element={ <Menu /> } />
          <Route exact path='/menu/ordenes' element={ <Ordenes /> } />
          <Route exact path='/menu/ordenes/forma-de-pago' element={ <Ordenespago /> } /> 
          <Route exact path='/ordenes/admin' element={ <ListadoOrdenAdmin /> } />
          <Route exact path='/ordenes/cliente' element={ <ListadoOrdenCliente /> } />
          <Route exact path='/servicios' element={ <Servicios /> } />
          <Route exact path='/servicios/eventos' element={ <Eventos /> } />
          <Route exact path='/servicios/catering' element={ <Catering /> } />
          <Route exact path='/servicios/bodas' element={ <Bodas /> } />
          <Route exact path='/servicios/solicitud-de-servicio' element={ <Solicitudservicio /> } />
          <Route exact path='/sucursales' element={ <Sucursales /> } />
          <Route exact path='/sucursales/admin' element={ <SucursalesAdmin /> } />
          <Route exact path='/proveedores' element={ <Proveedores /> } />
          <Route exact path='/inventario' element={ <Inventario /> } /> 
          <Route exact path='/orden' element={ <OrdenCart /> } /> 
          <Route exact path='/usuarios/admin' element={ <ListadoUsuarios /> } /> 
        </Routes>
      <ShowNavbar>
        <Footer />
      </ShowNavbar>
      
      
    </Router>
      
    </>
  )
}

export default App
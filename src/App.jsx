import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import Login from './pages/login/Login'
import Menu from './pages/menu/Menu'
import Ordenes from './pages/ordenes/Ordenes'
import Ordenespago from './pages/ordenes-pago/Ordenespago'
import Servicios from './pages/servicios/Servicios'
import Eventos from './pages/eventos/Eventos'
import Catering from './pages/catering/Catering'
import Bodas from './pages/bodas/Bodas'
import Sucursales from './pages/sucursales/Sucursales'
import Proveedores from './pages/proveedores/Proveedores'
import Inventario from './pages/inventario/Inventario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={ <Inicio /> } />
        <Route exact path='/login' element={ <Login /> } />
        <Route exact path='/menu' element={ <Menu /> } />
        {/* <Route exact path='/menu/ordenes' element={ <Ordenes /> } />
        <Route exact path='/menu/ordenes/forma-de-pago' element={ <Ordenespago /> } /> */}
        <Route exact path='/servicios' element={ <Servicios /> } />
        {/* <Route exact path='/servicios/eventos' element={ <Eventos /> } /> */}
        <Route exact path='/servicios/catering' element={ <Catering /> } />
        {/*<Route exact path='/servicios/bodas' element={ <Bodas /> } />
        <Route exact path='/servicios/solicitud-de-servicio' element={ <Solicitudservicio /> } />*/}
        <Route exact path='/sucursales' element={ <Sucursales /> } />
        {/* <Route exact path='/proveedores' element={ <Proveedores /> } />
        <Route exact path='/inventario' element={ <Inventario /> } />  */}
      </Routes>

      <Footer />
      
    </Router>
      
    </>
  )
}

export default App

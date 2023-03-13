import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="nav-main-ctn">
      <ul>
        <li><img src="../images/logo.png" className="nav-logo" /></li>
      </ul>
      <ul>
        <Link to="/" className="nav-link"><li>Inicio</li></Link>
        <Link to="/about-me" className="nav-link"><li>Sobre Mi</li></Link>
        <Link to="/clients" className="nav-link"><li>Mis Clientes</li></Link>
        <Link to="/contact" className="nav-link"><li>Contacto</li></Link>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar

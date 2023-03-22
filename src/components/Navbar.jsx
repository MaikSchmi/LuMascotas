import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="nav-main-ctn">
      <div className="nav-left">
        <p><Link to="/"><img src="../images/logo.png" className="nav-logo" /></Link></p>
      </div>
      <ul className="nav-right">
        <Link to="/proceso" className="nav-link"><li>El Proceso</li></Link>
        <Link to="/sobre-mi" className="nav-link"><li>Sobre Mi</li></Link>
        <Link to="/resenas" className="nav-link"><li>Reseñas</li></Link>
        <Link to="/contacto" className="nav-link"><li>Contacto</li></Link>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar

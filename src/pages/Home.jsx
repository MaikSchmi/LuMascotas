import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-main-ctn">
      <h2>LuMascotas</h2>
      <div>
        <p className="text-center">Bienvenido al sitio web oficial de LuMascotas!</p>
      </div>
      <div className="home-iframe-ctn">
        <iframe src='https://my.spline.design/peachandgomacopy-1d2b7de64213d2da1fcd7fb92950b694/' frameborder='0' width='400px' height='400px'></iframe>
      </div>
      <div className="home-btn-ctn text-center p-5">
        <h4>¿Qué estás buscando?</h4>
        <div className="home-link-ctn">
          <Link to="/sobre-mi" className="home-link">Sobre Mi</Link>
          <Link to="/proceso" className="home-link">El Proceso</Link>
          <Link to="/resenas" className="home-link">Reseñas</Link>
          <Link to="/contacto" className="home-link">Contacto</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

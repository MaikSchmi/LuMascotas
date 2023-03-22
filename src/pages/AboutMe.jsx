import React from 'react'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div id="about">
      <div>
        <h2>Sobre Mi</h2>
        <p>Mi nombre es Luciana y llevo 6 años viviendo en Barcelona. Soy Bióloga de formación y tengo un máster en Educación.</p>
        <p>Trabajé durante muchos años con educación ambiental porque me encanta cuidar del medio ambiente y estar en contacto con la gente.</p>
      </div>
      <div>
        <h2>Mis Gatos</h2>
        <p>Cuando me mudé a Barcelona traje a mi gata, Fúria, y un par de años después adopté a mi segundo gato, Knödel de <Link to="https://www.degats.org/">DeGats</Link>. Luego vino mi tercer gato, Link, también de degats. Ahora tengo a tres gatitos rubios preciosos!</p>
      </div>
      <div className="about-img-ctn">
        <div className="about-img-sub-ctn">
          <img src="../images/g1.jpg" className="about-img" />
          <p>Knödel 😻</p>
        </div>
        <div className="about-img-sub-ctn">
          <img src="../images/g2.jpg" className="about-img" /> 
          <p>Fúria 😽</p>
        </div>
        <div className="about-img-sub-ctn">
          <img src="../images/g3.jpg" className="about-img" />
          <p>Link 😸</p>
        </div>
      </div>
      <div>
        <p>Amo a los animales así que decidí cuidar las mascotas de otras personas, además de mi trabajo como voluntaria en el refugio de DeGats, para poder dedicar mi tiempo a hacer algo que me apasiona.</p>
        <p>Si necesitas alguien que cuide a tu gato, perro, pájaro, hámster o cualquier otro bichito, ¡no dudes escribirme!</p>
        <h2>Ver Más</h2>
        <p>Suígeme en mi <Link to="https://www.instagram.com/lu.mascotas/">Instagram profesional</Link>, donde también aparecerán fotos de tus gatos si trabajas conmigo, y también mi <Link to="https://www.instagram.com/insta_furia/">Instagram personal</Link> para ver más fotos de mis propios gatos!</p>
      </div>
    </div>
  )
}

export default AboutMe

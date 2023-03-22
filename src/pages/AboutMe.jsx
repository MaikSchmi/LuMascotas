import React from 'react'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div id="about">
      <div>
        <h2 className="text-center">Sobre Mi</h2>
        <p className="text-center">Mi nombre es Luciana, soy brasileña y llegué a Barcelona en 2017. Soy bióloga de formación y tengo un máster en Educación.</p>
        <p className="text-center">Trabajé durante muchos años con educación ambiental porque me encanta cuidar del medio ambiente y estar en contacto con la gente. Desde mis 15 años de edad, también actúo como voluntaria en refugios de animales.  </p>
      </div>
      <div className="about-me-img-ctn">
        <img src="../images/img6.jpg" alt="" />
        <img src="../images/img7.jpg" alt="" />
        <img src="../images/img0.jpg" alt="" />
      </div>
      <div>
        <h2 className="text-center pt-5">Mis Gatos</h2>
        <p className="text-center">Cuando me mudé a Barcelona traje a mi gata, Fúria, y un par de años después adopté a mi segundo gato, Knödel de <Link to="https://www.degats.org/">DeGats</Link>. Luego vino mi tercer gato, Link, también de DeGats. Ahora tengo a tres gatitos rubios preciosos!</p>
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
        <p className="text-center">En Marzo de 2020, en plena pandemia, me di cuenta que no quería continuar trabajando en oficinas. Pensando en mi amor a los animales, decidí empezar mi propio negocio como canguro de mascotas. </p>
        <p className="text-center">Si necesitas a alguien que cuide a tu gato, perro, pájaro, hámster o cualquier otro bichito, ¡no dudes en escribirme!</p>
      </div>
      <div>
        <h2 className="text-center">Ver Más</h2>
        <p className="text-center">Suígeme en mi <Link to="https://www.instagram.com/lu.mascotas/">Instagram profesional</Link>, donde también aparecerán fotos de tus gatos si trabajas conmigo!</p>
      </div>
    </div>
  )
}

export default AboutMe

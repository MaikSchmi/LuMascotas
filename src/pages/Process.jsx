import React from 'react'
import { Link } from 'react-router-dom'


function Process() {
  return (
    <div id="process">
      <h2>¿Cómo funciona?</h2>
      <div>
        <ol className="process-list">
          <li>Envíame un mensaje comentando las fechas que necesitas canguro a través del <Link to="/contacto">formulario de contacto</Link>.</li>
          <li>Hago una primera visita corta de 15 - 20 min (que no se cobra) para conocerte a ti y a los gatos un poco antes de tu viaje. Así me puedes explicar su rutina, qué pienso comen, si comen latita, sus juguetes favoritos, etc.</li> 
          <li>Luego las visitas a los michis tienen duración de 1 hora y el precio es de 20 euros la visita.</li> 
          <li>Mientras estés fuera te envío fotos y vídeos a diario y te cuento cómo va todo para que te quedes tranquilo. 😻</li>
          <li>También está incluido el riego de plantas 🪴</li>
        </ol>
      </div>
      <div>
        <p className="text-center">Si tienes alguna duda, simplemente contácteme y voy a responder lo antes posible.</p>
      </div>
    </div>
  )
}

export default Process

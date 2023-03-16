import React from 'react'
import { Link } from 'react-router-dom'

function Clients() {
  return (
    <div>
      <div>
        <h2>All kinds of animals</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis temporibus numquam sapiente labore culpa ipsam aspernatur consequuntur error? Necessitatibus dignissimos a delectus debitis reprehenderit id? Exercitationem dolorem officia vitae? 🙀</p>
      </div>
      <div>
        <h2>Ver todas las resenas</h2>
        <Link to="https://www.instagram.com/stories/highlights/18102556177255428/?hl=de">En Instagram</Link>
      </div>
    </div>
  )
}

export default Clients

import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="contact-main-ctn">
      <h1>Contacto</h1>
      <p>Contáctame a través de un de los métodos abajo!</p>
      <div className="contact-method-ctn">
        <div>
          <ul>
            <li><Link to="https://wa.me/34600381508"><img src="../images/whatsapp.webp" className="whatsapp"/>+34 600 38 15 08</Link></li>
            <li><Link to="https://www.instagram.com/lu.mascotas/?hl=de"><img src="../images/instagram.png" className="whatsapp"/>lu.mascotas</Link></li>
          </ul>
        </div>
        <div>
          {/* <iframe className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeMSDasy1fVFmA6jfgYagmY6JQVDLC0i6ntQRJRc_ajdJRrVQ/viewform?embedded=true" frameborder="0"></iframe> */}
          <iframe className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdIrs3XqSEr3kXcU2DaFuKkeZ6RQZDJE245ZJrw_jUecnuYEw/viewform?embedded=true" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact

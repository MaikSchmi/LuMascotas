import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="contact-main-ctn">
      <h2>Contacto</h2>
      <p>Contáctame a través de un de los siguientes métodos!</p>
      <div className="contact-method-ctn">
        <div>
          <ul>
            <li><Link to="https://wa.me/34600381508"><img src="../images/whatsapp.webp" className="whatsapp"/>+34600381508</Link></li>
            <li><Link to="https://www.instagram.com/lu.mascotas/?hl=de"><img src="../images/instagram.png" className="whatsapp"/>lu.mascotas</Link></li>
            <li><Link to="https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=AJOqlzVgYCuNelCXj0IGZye3p6MGURKaig:1679490945828&q=lu%20mascotas%20barcelona&ved=2ahUKEwjL2Oqpz-_9AhVU_7sIHTvFBTQQvS56BAgtEAE&biw=1466&bih=1278&dpr=1&tbs=lf:1,lf_ui:10&tbm=lcl&rflfq=1&num=10&rldimm=11680812404017756683&lqi=ChVsdSBtYXNjb3RhcyBiYXJjZWxvbmFaFyIVbHUgbWFzY290YXMgYmFyY2Vsb25heglCYXJjZWxvbmGSAQpwZXRfc2l0dGVyqgFICggvbS8wNjhoeQoIL20vMDFmNjIQASoPIgtsdSBtYXNjb3RhcygFMh8QASIbT5WNjTRHPG7KIL0i7t46vhjvRbpTcLsatl8C&phdesc=4IBWbLDdo94&rlst=f#rlfi=hd:;si:11680812404017756683,l,ChVsdSBtYXNjb3RhcyBiYXJjZWxvbmFaFyIVbHUgbWFzY290YXMgYmFyY2Vsb25heglCYXJjZWxvbmGSAQpwZXRfc2l0dGVyqgFICggvbS8wNjhoeQoIL20vMDFmNjIQASoPIgtsdSBtYXNjb3RhcygFMh8QASIbT5WNjTRHPG7KIL0i7t46vhjvRbpTcLsatl8C,y,4IBWbLDdo94;mv:[[41.4520266,2.2229645],[41.225026199999995,1.7837570999999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"><img src="../images/google.png" className="whatsapp"/>En Google</Link></li>
          </ul>
        </div>
        <div>
          <iframe className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeMSDasy1fVFmA6jfgYagmY6JQVDLC0i6ntQRJRc_ajdJRrVQ/viewform"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact

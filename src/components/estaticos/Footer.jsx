import React from 'react'
import './styleEstatico.css'
const Footer = () => {
  return (

    <footer class="footer-distributed">

      <div class="footer-left">

        <h2 className="logo">Melomanodisco.com</h2>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>

          <a href="acercade">Sobre Nosotros</a>

          <a href="productos">Productos</a>

          <a href="login">Login</a>

          <a href="contacto">Contacto</a>
        </p>

        <p class="footer-company-name">Melomanodisco.com © 2025</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>134 San Carlos</span> La Plata, Buenos Aires</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@melomanosdisco.com">support@melomanosdisco.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>



    // <footer>
    //   <p>&copy;2025 - Jose Tablante todos los derechos reservados </p>
    // </footer>
  )
}

export default Footer

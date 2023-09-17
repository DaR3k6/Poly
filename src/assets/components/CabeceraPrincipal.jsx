import React from "react";

const CabeceraPrincipal = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="./index.html">
                <img
                  src="./src/assets/img/logopoly.png"
                  alt=""
                  className="w-100 rounded-circle"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav__option">
              <nav className="header__nav__menu mobile-menu">
                <ul>
                  <li className="active">
                    <a href="./index.html">Inicio</a>
                  </li>
                  <li>
                    <a href="./index.html">Sobre</a>
                  </li>
                  <li>
                    <a href="./index.html">Portafolio</a>
                  </li>
                  <li>
                    <a href="./index.html">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Paginas</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./index.html">Sobre</a>
                      </li>
                      <li>
                        <a href="./index.html">Blog</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./index.html">Contacto</a>
                  </li>
                </ul>
              </nav>
              <div className="header__nav__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://polycommercial.com/login">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </>
  );
};

export default CabeceraPrincipal;

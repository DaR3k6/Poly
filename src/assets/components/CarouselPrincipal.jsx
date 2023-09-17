import React from "react";

const CarouselPrincipal = () => {
  return (
    <>
      <div className="hero__slider owl-carousel">
        <div
          className="hero__item set-bg"
          data-setbg="./src/assets/img/hero/fondo.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>Poly Commercial</span>
                  <h2>Bienvenido al Foro de Poly</h2>
                  <a
                    href="https://polycommercial.com/login"
                    className="primary-btn"
                  >
                    Comienza a trabajar con nosotros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__item set-bg" data-setbg="img/hero/fondo2.png">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>Poly Commercial </span>
                  <h2>Trabaja desde casa y Facil</h2>
                  <a
                    href="https://polycommercial.com/login"
                    className="primary-btn"
                  >
                    Mira mas sobre nosotros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__item set-bg" data-setbg="img/hero/fondo.png">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>Poly Commercial</span>
                  <h2>Gana dinero con tus Redes sociales Favoritas</h2>
                  <a
                    href="https://polycommercial.com/login"
                    className="primary-btn"
                  >
                    Mirar mas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPrincipal;

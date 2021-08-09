import React from "react";
import styles from "styles/Home.module.css";

export const Slider = () => {
  return (
    <section className={styles.video}>
      <video autoPlay playsInline src="02.mp4" loop muted></video>
      {/* esto falta */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 offset-md-1 pt-5 mt-5 p-4">
            <div className={styles.slider_content}>
              <h1 className=" text-white font-weight-bold">
                Soluciones <br /> sostenibles
              </h1>
              <h2 className="text-white mt-4">
                Pensando en nuestro futuro <span>&#160;</span>
              </h2>
              <a
                className={`btn btn-lg mt-4 ${styles.btn_services}`}
                href="#servicios"
              >
                Conozca nuestros servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

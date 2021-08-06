import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Licencia from "public/licencia_ambiental.jpg"; // import moduleName from 'public'
import Logo from "public/logo.png";
import { Header } from "components/Header";
import { Slider } from "components/Slider";
import { Services } from "components/Services";
import { Nav } from "components/Nav";
import Facebook from "components/icons/Facebook";
import Document from "components/icons/Document";
import Archive from "components/icons/Archive";
import Checkbox from "components/icons/Checkbox";
import DocumentList from "components/icons/DocumentList";
import Create from "components/icons/Create";
import Newspaper from "components/icons/Newspaper";

// Licencias Ambientales
// Registros Ambientales
// Certificados Ambientales
// Informes Ambientales de Cumplimiento
// Auditorias Ambientales
// Estudios de Impactos Ambientales (EIA)
// Elaboracion de Terminos de Regenrencia (TDRs)
// Informes de Vialidad Tecnica Ambiental

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MG | Consultoria Ambiental</title>
      </Head>
      <Header />
      <Nav />
      <main>
        <Slider />
        <div className="container">
          <div className="row">
            <h2 className="text-capitalize text-center mt-3 text-success fs-1">
              Servicios
            </h2>
          </div>
        </div>
        <section id="servicios" className={`container ${styles.services}`}>
          <div className="row mt-5 bg-bg-gray-300 p-3">
            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <Document className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">Licencias Ambientales</h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <Archive className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">Registros Ambientales</h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <Checkbox className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">
                  Certificados Ambientales
                </h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <DocumentList className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">
                  Informes Ambientales de Cumplimientos
                </h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <Create className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">Auditorias Ambientales</h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-row text-center py-4 ">
              <div>
                <Newspaper className="text-success d-flex flex-column justify-content-center align-self-center" />
              </div>
              <div>
                <h3 className="text-secondary fs-5">
                  Estudios de Impactos Ambientales (EIA)
                </h3>
                <p
                  className={`text-secondary fs-6 ${styles.services_description}`}
                >
                  Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${styles.footer}`}>
        <div className="container pt-2 text-center">
          <div className="row mx-auto ">
            <div className="col-sm-12 col-md-5 d-flex flex-row justify-content-between">
              <div className="align-self-center">
                <a href="">
                  <Facebook className="mx-2" fill="#2874A6" />
                </a>
                <a href="">
                  <Facebook className="mx-2" fill="#2874A6" />
                </a>
                <a href="">
                  <Facebook className="mx-2" fill="#2874A6" />
                </a>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 text-center">
              <p className="text-secondary fw-bold fs-4">Te Interesa</p>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-success fw-bolder" href="">
                    <span>&rsaquo;</span> Nosotros
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-success fw-bolder" href="">
                    <span>&rsaquo;</span> Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-success fw-bolder"
                    href="#servicios"
                  >
                    <span>&rsaquo;</span> Servicios
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 ">
              <div className="text-secondary fs-4 fw-bold">Contacto</div>
              <a className="nav-link text-success fw-bolder" href="#">
                Whatsapp:
              </a>
              <a className="nav-link text-success fw-bolder" href="#">
                Email:
              </a>
              <a className="nav-link text-success fw-bolder" href="#">
                Direccion:
              </a>
            </div>
          </div>
        </div>
        {/* <div className={styles.footer_wave}></div> */}
      </footer>
    </>
  );
}

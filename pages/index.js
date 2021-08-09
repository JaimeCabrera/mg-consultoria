import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import bg_contact from "public/bg_contact.jpg";

import { Header } from "components/Header";
import { Slider } from "components/Slider";
import { Service } from "components/Service";
import { Nav } from "components/Nav";
import Facebook from "components/icons/Facebook";
import Document from "components/icons/Document";
import Archive from "components/icons/Archive";
import Checkbox from "components/icons/Checkbox";
import DocumentList from "components/icons/DocumentList";
import Create from "components/icons/Create";
import Newspaper from "components/icons/Newspaper";
import Twitter from "components/icons/Twitter";
import Instagram from "components/icons/Instagram";

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
        <div className="container-fluid pt-5">
          <div className="row" id="servicios">
            <h2
              className={`text-capitalize text-center mt-3 text-success fs-1 ${styles.text_yellow}`}
            >
              Servicios
            </h2>
            <hr className={styles.text_yellow} />
          </div>
        </div>
        <section className={`container ${styles.services}`}>
          <div className="row pt-5 bg-bg-gray-300 p-3">
            <Service
              title="Licencias Ambientales"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <Document />
            </Service>
            <Service
              title="Registros Ambientales"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <Archive />
            </Service>

            <Service
              title="Certificados Ambientales"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <Checkbox />
            </Service>

            <Service
              title="Informes Ambientales de Cumplimientos"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <DocumentList />
            </Service>

            <Service
              title="Auditorias Ambientales"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <Create />
            </Service>

            <Service
              title="Estudios de Impactos Ambientales (EIA)"
              description="Permiso ambiental que otorga la Autoridad Ambiental Competente
                  a una persona natural o jurídica, para la ejecución de un
                  proyecto, obra o actividad."
            >
              <Newspaper />
            </Service>

            <div className="col-2 mx-auto mb-5 mt-5">
              <a
                href="#contacto"
                className={`btn btn-success btn-lg btn_contact ${styles.btn_contact}`}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className={`container-fluid mt-5 ${styles.contact}`}
        >
          <div className="row">
            <div className={`col-md-6 ${styles.contact_image}`}>
              {/* <Image src={bg_contact} alt="contact image" /> */}
            </div>
            <div className="col-md-6 p-5 mt-5 mb-5">
              <div className={`card ${styles.bg_transparent}`}>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Nombre:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Escribe tu nombre"
                        id="exampleInputEmail1"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email@email.com"
                        id="exampleInputEmail1"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mensaje</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Déjanos tu mensaje"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-success btn-lg ${styles.btn_contact}`}
                    >
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={`pt-5 ${styles.footer}`}>
        <div className="container pt-2 text-center">
          <div className="row mx-auto ">
            <div className="col-sm-12 col-md-4">
              <div className="align-self-center">
                <a href="#" target="_blank">
                  <Facebook className="mx-2" />
                </a>
                <a href="" target="_blank">
                  <Twitter className="mx-2" />
                </a>
                <a href="" target="_blank">
                  <Instagram className="mx-2" />
                </a>
              </div>
              <div className="mt-2">
                <span className="text-black-50">
                  Síguenos en nuestras redes sociales
                </span>
              </div>
            </div>

            <div className="col-sm-12 d-none d-sm-block col-md-4 text-center">
              <p className="text-secondary fw-bold fs-4">Te Interesa</p>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-success fw-bolder" href="#inicio">
                    <span>&rsaquo;</span> Incio
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-success fw-bolder"
                    href="#contacto"
                  >
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
      </footer>
    </>
  );
}

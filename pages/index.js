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
            <h2 className="text-capitalize text-center mt-4 text-success fs-1">
              Servicios
            </h2>
          </div>
        </div>
        <section id="servicios" className={`container ${styles.services}`}>
          <Services
            src={Licencia}
            id="services"
            order="order-md-1"
            title="Estudios de impacto ambiental"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-0"
            title="Proceso de regularizacion ambiental 2"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-1"
            title="Auditorias Ambientales"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-0"
            title="Planes de Manejo Ambiental"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-1"
            title="Asesoria de Seguridad Industrial"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-0"
            title="consultorias Ambientales"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-1"
            title="Proteccion del Medio Ambiente"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-0"
            title="Asesoria Minero - Ambiental"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-1"
            title="Asesoria Ambiental para la Gestion de Residuos Solidos"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
          <Services
            src={Licencia}
            id="services"
            order="order-md-0"
            title="Levantamientos Topograficos"
            description="El licenciamiento ambiental es la autorización para la ejecución
                de un proyecto, obra o actividad, se realiza con el fin de
                evaluar y hallar alternativas sobre las cuales sea posible su
                desarrollo, logrando optimizar y racionalizar el uso de los
                recursos ambientales y minimizar los impactos negativos que
                puedan provocarse con la actividad misma de una entidad."
          />
        </section>
      </main>
      <footer className={`${styles.footer}`}>
        <div className="container pt-2">
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

            <div className="col-sm-12 col-md-4">
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
            <div className="col-sm-12 col-md-2 ">
              <div className="text-secondary fs-4 fw-bold">Contacto</div>
              <a className="nav-link" href="#">
                Whatsapp:
              </a>
              <a className="nav-link" href="#">
                Email:
              </a>
              <a className="nav-link" href="#">
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

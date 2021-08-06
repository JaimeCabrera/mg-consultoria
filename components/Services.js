import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export const Services = ({ title, src, description, order }) => {
  return (
    <article className="row">
      <h3 className="text-center text-primary fs-4 mt-3">{title}</h3>
      <div className={`col-sm-12 col-md-4 ${order}`}>
        <Image src={src} alt="licencias ambientales" />
      </div>
      <div className="col-sm-12 col-md-4 d-flex align-self-center">
        <p className={styles.services_description}>{description}</p>
      </div>
    </article>
  );
};

// {[ order-{order}"]}

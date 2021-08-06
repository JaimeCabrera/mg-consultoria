import React, { Children } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Document from "./icons/Document";

export const Service = ({ title, description, children }) => {
  return (
    <article className="col-sm-12 col-md-6 col-lg-4 d-flex flex-row text-center py-4 ">
      <div className="text-success  ">
        {/* <Document /> */}
        {children}
      </div>
      <div>
        <h3 className={` fs-5 ${styles.text_yellow}`}>{title}</h3>
        <p className={`text-secondary fs-6 ${styles.services_description}`}>
          {description}
        </p>
      </div>
    </article>
  );
};

// {[ order-{order}"]}

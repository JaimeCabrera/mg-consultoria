import React from "react";
import Image from "next/image";

import Facebook from "components/icons/Facebook";
import logo from "public/logo.png";

export const Header = () => {
  return (
    <>
      <header className="bg-ligth py-3  " id="inicio">
        <div className="container d-flex flex-row justify-content-between">
          <div className="justify-content-around">
            <a href="">
              <Image src={logo} alt="logo" width="180" height="91"></Image>
            </a>
          </div>
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
      </header>
    </>
  );
};

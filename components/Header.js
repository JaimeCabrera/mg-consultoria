import React from "react";
import Image from "next/image";

import Facebook from "components/icons/Facebook";
import logo from "public/logo.png";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";

export const Header = () => {
  return (
    <>
      <header className="bg-ligth py-3  " id="inicio">
        <div className="container d-flex flex-row justify-content-between">
          <div className="justify-content-around">
            <a href="">
              <Image src={logo} alt="logo" width="200" height="90"></Image>
            </a>
          </div>
          <div className="align-self-center">
            <a href="">
              <Facebook className="mx-2" fill="#2874A6" />
            </a>
            <a href="">
              <Twitter className="mx-2" fill="#2874A6" />
            </a>
            <a href="">
              <Instagram className="mx-2" fill="#2874A6" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

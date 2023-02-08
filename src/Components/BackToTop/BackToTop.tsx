import React, { useState, useEffect } from "react";
import { ArrowSquareUp } from "phosphor-react";
import { ContainerBackToTop } from "./BackToTopStyle";

import {  animateScroll as scroll  } from 'react-scroll';

interface ButtonStyles {
    position: "fixed";
    bottom: string;
    right: string;
    left:string;
    display: "block" | "none";
  }

export function BackToTop (){

        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          });
          return () => {
            window.removeEventListener("scroll", () => {});
          };
        }, []);

        const handleClick = () => {
          scroll.scrollTo(0, {
            duration: 700,

          });
  };

        const buttonStyles: ButtonStyles = {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            left: '0',
            display: showButton ? "block" : "none"
          };


        return (

            <div>
      {showButton && (
        <ContainerBackToTop>
        <button className="  w-fit ml-5" style={buttonStyles} onClick={handleClick}>
         <ArrowSquareUp className="opacity-10 hover:opacity-100 hover:text-fonteVerde transition-all duration-700 " size={52}  weight="thin" />
        </button>
        </ContainerBackToTop>
      )}
    </div>

  );
};

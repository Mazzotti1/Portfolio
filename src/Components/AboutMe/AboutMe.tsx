import imgStyle from "../../assets/circle.svg"
import perfil from "../../assets/perfil.png";

import { ContainerAbout, TextAbout,BorderAbout } from "./AboutStyle";

import {pt , en} from "./LanguageAbout"

interface Props {
    language:string
  }

export const AboutMe: React.FC<Props> = ({language }) => {
    return(
        <ContainerAbout>
        <div id="About" className=" h-full flex    ">
           <div className="  containerResume flex justify-center  items-center gap-28 " >
            <img className="absolute right-3/4 opacity-40 translate-y-96 "  src={imgStyle} alt="Imagem circulo" />
            <img alt="Foto de perfil" src={perfil} className=" imgAbout   h-2/3 rounded-3xl shadow-md hover:shadow-gray-400  hover:scale-110  transition-all " data-anime="top" />

            <div className=" containerText flex w-2/6 flex-col">
            <h1 className="text-fonteVerde text-4xl mb-5 ">{language === 'pt' ? pt.TittleAbout : en.TittleAbout}</h1>
            <TextAbout>
            <p className=" ">{language === 'pt' ? pt.ResumeAbout : en.ResumeAbout}</p>
                  </TextAbout>
                  <div className="buttonsAbout mt-8">

                        <div className=" aboutButtons flex gap-9 ">
                        <BorderAbout className="w-fit text-center flex ">
                        <a className=" p-2  transition-colors    hover:border-fonteVerde " target={"_blank"} href="https://api.whatsapp.com/send?phone=5551994447857&text=Ol%C3%A1,%20Gabriel!"  >{language === 'pt' ? pt.ButtonContact : en.ButtonContact}</a>
                        </BorderAbout>
                        </div>
                  </div>

            </div>

        </div>

        </div>
        </ContainerAbout>

    )
}


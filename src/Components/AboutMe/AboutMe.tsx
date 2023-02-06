
import perfil from "../../assets/perfil.png";

import { ContainerAbout, TextAbout,BorderAbout } from "./AboutStyle";

import {pt , en} from "./LanguageAbout"

interface Props {
    language:string
  }

export const AboutMe: React.FC<Props> = ({language }) => {
    return(
        <ContainerAbout>
        <div id="About" className=" h-full flex justify-center   ">
           <div className="pl-52 pr-52 containerResume flex justify-center items-center gap-8 " >
            <img alt="Foto de perfil" src={perfil} className=" imgAbout  h-1/5 rounded-3xl shadow-md hover:shadow-gray-400  hover:scale-110  transition-all " data-anime="top" />

            <div className=" containerText flex  flex-col">
            <h1 className="text-fonteVerde text-4xl mb-5 ">{language === 'pt' ? pt.TittleAbout : en.TittleAbout}</h1>
            <TextAbout>
            <p className=" ">{language === 'pt' ? pt.ResumeAbout : en.ResumeAbout}</p>
                  </TextAbout>
                  <div className="buttonsAbout mt-8">

                        <div className=" aboutButtons flex gap-9 ">
                        <BorderAbout className="w-fit  text-center flex ">
                        <a className=" p-2  transition-colors    hover:border-fonteVerde " href="https://drive.google.com/file/d/10RI485z3RsBSjKFv2lV1zKGqQQFsyFkr/view?usp=share_link" target={"_blank"} >Download CV</a>
                        </BorderAbout>
                        <BorderAbout className="w-fit text-center flex ">
                        <a className=" p-2  transition-colors    hover:border-fonteVerde " target={"_blank"} href="https://gabrielmazzotti.com.br/"  >{language === 'pt' ? pt.jobs : en.jobs}</a>
                        </BorderAbout>
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


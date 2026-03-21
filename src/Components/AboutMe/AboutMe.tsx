import imgStyle from "../../assets/circle.svg"
import perfil from "../../assets/perfil.png";

import { ContainerAbout, TextAbout, BorderAbout } from "./AboutStyle";
import { Experience } from "../Experience/Experience";

import {pt , en} from "./LanguageAbout"

interface Props {
    language:string
  }

export const AboutMe: React.FC<Props> = ({language }) => {
    const t = language === 'pt' ? pt : en;

    return(
        <ContainerAbout>
        <div id="About" className="h-full flex">
           <div className="containerResume flex justify-center items-center gap-28 w-full aboutPadding">
            <img className="absolute right-3/4 opacity-40 translate-y-96" src={imgStyle} alt="Imagem circulo" />
            <img alt="Foto de perfil" src={perfil} className="imgAbout h-2/3 rounded-3xl shadow-md hover:shadow-gray-400 hover:scale-110 transition-all relative z-10" data-anime="top" />

            <div className="containerText flex flex-col">
              <h1 className="text-fonteVerde text-4xl mb-8 font-bold">{t.TittleAbout}</h1>

              <TextAbout className="mb-4">
                {t.P1Before}
                <span className="text-fonteVerde font-semibold">{t.P1Highlight}</span>
                {t.P1After}
                <span className="text-fonteVerde font-semibold">{t.P1Highlight2}</span>
                {t.P1After2}
                <span className="text-fonteVerde font-semibold">{t.P1Highlight3}</span>
                {t.P1End}
              </TextAbout>

              <TextAbout className="mb-4">
                {t.P2Before}
                <span className="text-fonteVerde font-semibold">{t.P2Highlight}</span>
                {t.P2After}
                <span className="text-fonteVerde font-semibold">{t.P2Highlight2}</span>
                {t.P2After2}
                <span className="text-fonteVerde font-semibold">{t.P2Highlight3}</span>
                {t.P2End}
              </TextAbout>

              <TextAbout className="mb-4">
                {t.P3}
              </TextAbout>

              <TextAbout className="mb-6">
                {t.P4Before}
                <span className="text-fonteVerde font-semibold">{t.P4Highlight}</span>
                {t.P4After}
              </TextAbout>

              <div className="buttonsAbout mt-4">
                <div className="aboutButtons flex gap-9">
                  <BorderAbout className="w-fit text-center flex">
                    <a className="p-2 transition-colors hover:border-fonteVerde" target={"_blank"} href="https://api.whatsapp.com/send?phone=5551994447857&text=Ol%C3%A1,%20Gabriel!">
                      {t.ButtonContact}
                    </a>
                  </BorderAbout>
                </div>
              </div>
            </div>

           </div>
        </div>

        <Experience language={language} />

        </ContainerAbout>
    )
}

import { Envelope, DeviceMobile, MapPin, WhatsappLogo } from "phosphor-react"
import email from "../../assets/email.gif"
import { ContainerContact, BorderContact } from "./ContactStyle"

import {pt, en} from './LanguageContact'

interface Props {
  language:string
}

export const Contact: React.FC<Props> = ({language }) => {
    return(
      <ContainerContact>
        <div id="contact" className="contactContainer ml-10 h-max  ">

          <div className="flex contactContainer  justify-evenly">
                <div >
                <h1 className="titleContact text-fonteVerde mt-12  text-5xl">{language === 'pt' ? pt.Tittle : en.Tittle}</h1>
                    <div className="flex items-center gap-2 ">
                    <MapPin className="mt-5 mb-4" size={32}  />
                    <h1 className=" location font-bold ">{language === 'pt' ? pt.Location : en.Location}</h1>

                    </div>
                    <div className="flex gap-3  items-center  w-fit p-2 h-16 rounded-lg mb-3 transition-all duration-700 hover:bg-zinc-400    ">
                    <Envelope className="mt-5 mb-4" size={32}  />
                    <a className="email" target={"_blank"}  href="mailto:gmazzottidesouza@gmail.com?subject=Olá Gabriel! ">Gmazzottidesouza@gmail.com</a>
                    </div>
                    <div className="flex gap-3 items-center  w-fit p-2 h-16 rounded-lg mb-3 transition-all duration-700  hover:bg-zinc-400    ">
                    <DeviceMobile className="mt-5 mb-4" size={32}  />
                    <a className="tel"   href="tel:+5551994447857">(51) 99444-7857</a>
                    </div>

                    <BorderContact className="w-fit ml-3 mb-10">
                    <div className="  flex gap-3   transition-all duration-700  border-white items-center w-fit h-16 p-4 ">
                    <WhatsappLogo className="mt-5 mb-4 " size={32}  />
                    <a className="" target={"_blank"}  href="https://api.whatsapp.com/send?phone=5551994447857&text=Ol%C3%A1,%20Gabriel!">Whatsapp</a>
                    </div>

                    </BorderContact>



                </div>
                <img className="gifPc w-96" src={email} alt="Imagem para contato" />
          </div>

        </div>
        </ContainerContact>
    )
}
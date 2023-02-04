import { SocialMedias } from "../HomeComponents/SocialMedias";
import { ContainerFooter } from "./FooterStyle";

import {pt, en} from './LanguageFooter'

interface Props {
    language:string
  }

export const Footer: React.FC<Props> = ({language }) => {
    return(
        <ContainerFooter className="">
        <div className="  ">
          <div className="containerFooter flex justify-center items-center  p-4 gap-10">
          <h1 className="footerTittle ">{language === 'pt' ? pt.Tittle : en.Tittle}</h1>

            <SocialMedias  />
            </div>
        </div>
        </ContainerFooter>
    )
}
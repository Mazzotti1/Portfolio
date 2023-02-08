

import {pt ,en} from "./LanguageHome"

interface ButtonProps{
  language: string,
}

export const ButtonContact:React.FC<ButtonProps> = ({ language }) => {
  const handleClick = () => {
    window.scrollTo(948 *4 , 948*4)

  }


    return(

        <div >

              <a className="scroll-smooth cursor-pointer" href='#contato' onClick={handleClick}  >{language === 'pt' ? pt.ButtonContact : en.ButtonContact}</a>

        </div>

    )
}
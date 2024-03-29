
import {  animateScroll as scroll  } from 'react-scroll';
import {pt ,en} from "./LanguageHome"

interface ButtonProps{
  language: string,
}

export const ButtonContact:React.FC<ButtonProps> = ({ language }) => {
  const handleClick = () => {
    scroll.scrollTo(948 * 4, {
      duration: 700,

    });
  }


    return(

        <div >

              <a className="scroll-smooth cursor-pointer" href='#contato' onClick={handleClick}  >{language === 'pt' ? pt.ButtonContact : en.ButtonContact}</a>

        </div>

    )
}
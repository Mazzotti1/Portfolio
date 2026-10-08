
import {pt ,en} from "./LanguageHome"
import { scrollToSection } from '../../utils/scrollToSection';

interface ButtonProps{
  language: string,
}

export const ButtonContact:React.FC<ButtonProps> = ({ language }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
  }


    return(

        <div >

              <a className="scroll-smooth cursor-pointer" href='#contact' onClick={handleClick}  >{language === 'pt' ? pt.ButtonContact : en.ButtonContact}</a>

        </div>

    )
}

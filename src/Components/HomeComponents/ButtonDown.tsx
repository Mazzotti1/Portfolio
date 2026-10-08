import {CaretDown} from "phosphor-react"
import { TextHome } from "./HomeStyles";
import { scrollToSection } from '../../utils/scrollToSection';

export function ButtonDown() {
  const handleClick = () => {
    scrollToSection('About');
  };


    return(

        <div >
            <button aria-label="Descer para a proxima secao" onClick={handleClick}>
            <TextHome>
              <CaretDown alt="Botão para descer de seção" size={60} className="ButtonDown hover:translate-y-5 hover:text-fonteVerde transition " weight="thin" />
             </TextHome>
            </button>
        </div>

    )
}

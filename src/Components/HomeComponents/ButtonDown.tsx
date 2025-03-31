import {CaretDown} from "phosphor-react"
import { TextHome } from "./HomeStyles";
import {  animateScroll as scroll  } from 'react-scroll';

export function ButtonDown() {
  const handleClick = () => {

     scroll.scrollTo(948, {
            duration: 700,

          });
  };


    return(

        <div >
            <button  onClick={handleClick}>
            <TextHome>
              <CaretDown alt="Botão para descer de seção" size={60} className="ButtonDown hover:translate-y-5 hover:text-fonteVerde transition " weight="thin" />
             </TextHome>
            </button>
        </div>

    )
}
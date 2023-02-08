import {CaretDown} from "phosphor-react"
import { TextHome } from "./HomeStyles";


export function ButtonDown() {
  const handleClick = () => {
    window.scrollTo(948, 948)

    ;
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
import {CaretDown} from "phosphor-react"
import {  animateScroll as scroll  } from 'react-scroll'
import { TextHome } from "./HomeStyles";


export function ButtonDown() {
  const handleClick = () => {
    scroll.scrollTo(948, {
      duration: 500,
      smooth: "easeInOutQuint"
    });
  };


    return(

        <div >
            <button  onClick={handleClick}>
            <TextHome>
              <CaretDown size={60} className="hover:translate-y-5 hover:text-fonteVerde transition " weight="thin" />
             </TextHome>
            </button>
        </div>

    )
}
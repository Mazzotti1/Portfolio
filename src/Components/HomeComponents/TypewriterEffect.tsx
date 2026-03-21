import { ButtonContact } from "./ButtonContact";
import { BorderHome, TextHome } from "./HomeStyles";
import { SocialMedias } from "./SocialMedias";
import { ButtonDown } from "./ButtonDown";
import Typed from 'typed.js'
import {useEffect, useRef} from 'react'

import {pt ,en} from "./LanguageHome"



export const TypewriterEffect = (props: {language: string }) => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: [
                props.language === 'pt' ? pt.TypeWrittingBefore : en.TypeWrittingBefore,
                props.language === 'pt' ? pt.TypeWrittingAfter : en.TypeWrittingAfter
            ],
            typeSpeed: 35,
            backSpeed: 55,
            backDelay: 300,
        });
        return () => typed.destroy();
    }, [props.language]);

    return(
        <TextHome className="flex-1 flex">
        <div className="flex-1 flex flex-col">

            <div className=" HomeMenu flex flex-col justify-center items-center flex-1">
            <h1  className=" tittle text-4xl flex  justify-center items-center " >Hello World!💻</h1>
        <div className=" typeWritting flex text-center   text-2xl mt-3 ">
            <span ref={el} />
          </div>

                 <div className="btn text-fonteVerde text-2xl transition-colors mb-5  mt-5  hover:text-black hover:bg-white border  " >
                 <BorderHome className="transition-all duration-500 p-2">
                <ButtonContact language={props.language}/>
                </BorderHome>
                </div>

                <SocialMedias />
                <ButtonDown />

            </div>

        </div>
</TextHome>
    )
}

export default TypewriterEffect;
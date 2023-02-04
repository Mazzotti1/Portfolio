import { ButtonContact } from "./ButtonContact";
import { BorderHome, TextHome } from "./HomeStyles";
import Typed from 'react-typed'
import {useState , useEffect} from 'react'

import {pt ,en} from "./LanguageHome"



export const TypewriterEffect = (props: {language: string }) => {
    const [language, setLanguage] = useState(props.language);
    const [key, setKey] = useState(1);

    useEffect(() => {
        setLanguage(props.language);
        setKey(key + 1);
      }, [props.language]);

    return(
        <TextHome>
        <div>

            <div className=" HomeMenu mt-52 flex flex-col justify-center items-center  ">
            <h1  className=" tittle text-4xl flex  justify-center items-center " >Hello World!💻</h1>
        <div className=" typeWritting flex text-center   text-2xl mt-3 ">
            <Typed
            key={key}
                strings={[
                    props.language === 'pt' ? pt.TypeWrittingBefore : en.TypeWrittingBefore,
                    props.language === 'pt' ? pt.TypeWrittingAfter : en.TypeWrittingAfter
                ]}
                typeSpeed={35}
                backSpeed={55}
                backDelay={300}

            />
          </div>

                 <div className="btn text-fonteVerde text-2xl transition-colors mb-5  mt-5  hover:text-black hover:bg-white border  " >
                 <BorderHome className="transition-all duration-500 p-2">
                <ButtonContact language={props.language}/>
                </BorderHome>
                </div>

            </div>

        </div>
</TextHome>
    )
}

export default TypewriterEffect;
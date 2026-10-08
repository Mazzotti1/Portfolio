import imgKnow from "../../assets/geometria.png"

import { useState } from "react";
import "../../styles/KnowledgeTableSlide.css"

import { KnowledgeMenu } from "./KnowledgeMenu"
import { KnowledgeTable } from "./KnowledgeTable"



import { ContainerKnowledge, Text } from "./KnowledgeStyle";
import {pt, en} from './LanguageKnowledge'


export const Knowledges = (props: { language: string }) => {
    const [id, setId] = useState(1);

    return(
        <ContainerKnowledge>
        <div id="knowledges" className=" containerKnowledge relative flex flex-col justify-center h-screen min-h-[1000px] overflow-hidden">
             <div className="justify-center  flex">
                <h1 className="tittleKnowledge text-center  text-fonteVerde  text-5xl">{props.language === 'pt' ? pt.Tittle : en.Tittle}</h1>
             </div>
             <img 
                className="imgKnow absolute opacity-20 right-0 -rotate-180 z-0" 
                width={800} 
                src={imgKnow} 
                alt="Circulo com formas" 
            />

        <div className=" menusKnowledge relative flex justify-center flex-col z-10">
       <KnowledgeMenu id={id} setId={setId} language={props.language} />
       <div>
        <div
        >
            <Text>
       <KnowledgeTable id={id} language={props.language} />
       </Text>
       </div>
       </div>
        </div>


        </div>
        </ContainerKnowledge>
    )
}
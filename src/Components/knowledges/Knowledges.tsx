import imgKnow from "../../assets/geometria.png"

import { useState } from "react";
import "../../styles/KnowledgeTableSlide.css"

import { KnowledgeMenu } from "./KnowledgeMenu"
import { KnowledgeTable } from "./KnowledgeTable"



import { ContainerKnowledge, SubContainerKnowledge, Text } from "./KnowledgeStyle";
import {pt, en} from './LanguageKnowledge'


export const Knowledges = (props: { language: string }) => {
    const [id, setId] = useState(1);


    const handleClick = (newId: number) => {
        setId(newId);
      };

    return(
        <ContainerKnowledge>
        <div className=" containerKnowledge flex flex-col justify-center h-screen  ">
             <div className="justify-center  flex">
                <h1 className="tittleKnowledge text-center  text-fonteVerde  text-5xl">{props.language === 'pt' ? pt.Tittle : en.Tittle}</h1>
             </div>
             <img className="absolute opacity-20 right-0 -rotate-180" width={800} src={imgKnow} alt="Circulo com formas" />

        <div className=" menusKnowledge flex justify-center flex-col ">
       <KnowledgeMenu  handleClick={handleClick} name={""} id={id}  setId={setId} language={props.language}/>
       <div>
        <div
        >
            <Text>
       <KnowledgeTable icons={[]} description={""} id={id} language={props.language} />
       </Text>
       </div>
       </div>
        </div>


        </div>
        </ContainerKnowledge>
    )
}
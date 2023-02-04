
import { useState } from "react";
import "../../styles/KnowledgeTableSlide.css"

import { KnowledgeMenu } from "./KnowledgeMenu"
import { KnowledgeTable } from "./KnowledgeTable"

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ContainerKnowledge, SubContainerKnowledge, Text } from "./KnowledgeStyle";
import {pt, en} from './LanguageKnowledge'


export const Knowledges = (props: { language: string }) => {
    const [id, setId] = useState(1);


    const handleClick = (newId: number) => {
        setId(newId);
      };

    return(
        <ContainerKnowledge>
        <div className=" h-screen  ">
             <div className="justify-center  flex">
                <h1 className="tittleKnowledge text-center text-fonteVerde  mt-52   text-5xl">{props.language === 'pt' ? pt.Tittle : en.Tittle}</h1>
             </div>
             <SubContainerKnowledge>
        <div className=" menusKnowledge flex justify-center gap-20">
       <KnowledgeMenu  handleClick={handleClick} name={""} id={id}  setId={setId} language={props.language}/>
       <TransitionGroup>
        <CSSTransition
            key={id}
            timeout={500}
            classNames="fade"
        >
            <Text>
       <KnowledgeTable icons={[]} description={""} id={id} language={props.language} />
       </Text>
       </CSSTransition>
       </TransitionGroup>
        </div>
        </SubContainerKnowledge>

        </div>
        </ContainerKnowledge>
    )
}

import ts from "../../assets/typescript-original.png"
import node from "../../assets/nodejs-original.png"
import react from "../../assets/react-original.png"
import tw from "../../assets/tailwindcss-original.png"
import redux from "../../assets/redux-original.png"
import mongo from "../../assets/mongodb-original.png"
import socketio from "../../assets/socketio-original.png"

import {pt, en} from './LanguageKnowledge'
interface Techs{
    icons: string[];
    description:string;
    id:number;
    language:string
}[];

export function KnowledgeTable(props: Techs) {
    const { icons,description, id, language} = props;

    const allTechs = [
        {
            icons:[ts,react,tw,redux],
            description:(props.language === 'pt' ? pt.FrontDesc : en.FrontDesc),
            id:1,
        },
        {
            icons:[node,mongo,socketio],
            description:(props.language === 'pt' ? pt.BackDesc : en.BackDesc),
            id:2,
        },
        {
            icons:[react],
            description:(props.language === 'pt' ? pt.MobileDesc : en.MobileDesc),
            id:3,
        },
    ]

    return(
        <div className="  flex justify-center item">
            <div className="flex justify-center mb-10 mt-10   ">
            {allTechs.filter(allTech => allTech.id === id)
        .map((allTech) => (
          <div className="containerTable flex flex-col  justify-center  shadow-lg shadow-black gap-8 items-center w-96 bg-gradient-to-r p-8 ">
            <div className="flex  gap-4 border bg-neutral-900 border-white rounded-full p-3 justify-center">
              {allTech.icons.map((icon) => (
                <img width={56} src={icon} />
              ))}
            </div>
            <div><h1 className="w-full text-center text-xl">{allTech.description}</h1></div>
          </div>

        ))}

        </div>
        </div>
    )
}
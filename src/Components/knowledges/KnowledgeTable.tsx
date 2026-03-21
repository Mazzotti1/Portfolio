
import kotlin from "../../assets/kotlin.png"
import java from "../../assets/java.png"
import docker from "../../assets/docker.png"
import postgres from "../../assets/postgres.png"
import flutter from "../../assets/flutter.png"
import react from "../../assets/react-original.png"

import {pt, en, Segment} from './LanguageKnowledge'
interface Techs{
    icons: string[];
    description:string;
    id:number;
    language:string
}[];

export function KnowledgeTable(props: Techs) {
    const { icons,description, id, language} = props;
    const t = language === 'pt' ? pt : en;

    const allTechs = [
        {
            icons:[kotlin,java,docker,postgres],
            segments: t.BackendDesc,
            id:1,
        },
        {
            icons:[java,kotlin],
            segments: t.securityDesc,
            id:2,
        },
        {
            icons:[flutter,react,kotlin,java],
            segments: t.MobileDesc,
            id:3,
        },
    ]

    return(
        <div className="  flex justify-center  item">
            <div className="flex justify-center mb-10 mt-10   ">
            {allTechs.filter(allTech => allTech.id === id)
        .map((allTech) => (
          <div className="containerTable flex flex-col   justify-center  shadow-lg shadow-black gap-8 items-center w-2/5 bg-gradient-to-r p-8 ">
            <div className="flex  gap-4 border  bg-neutral-900 border-zinc-800 rounded-md p-3 justify-center">
              {allTech.icons.map((icon) => (
                <img alt="Icone das tecnologias " width={36} src={icon} />
              ))}
            </div>
            <div><h1 className="w-full text-center  text-xl">
              {allTech.segments.map((seg, i) =>
                seg.highlight
                  ? <span key={i} className="text-fonteVerde font-semibold">{seg.text}</span>
                  : <span key={i}>{seg.text}</span>
              )}
            </h1></div>
          </div>

        ))}

        </div>
        </div>
    )
}

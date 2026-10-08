
import { useEffect, useState } from "react"

import kotlin from "../../assets/kotlin.png"
import java from "../../assets/java.png"
import docker from "../../assets/docker.png"
import postgres from "../../assets/postgres.png"
import flutter from "../../assets/flutter.png"
import react from "../../assets/react-original.png"
import node from "../../assets/nodejs-original.png"
import nestjs from "../../assets/nestjs.png"
import firebase from "../../assets/firebase.png"

import { Chip } from "../../styles/Chip"
import { ShowMoreButton } from "../../styles/ShowMoreButton"
import {pt, en} from './LanguageKnowledge'

interface Techs {
    id: number;
    language: string;
}

export function KnowledgeTable(props: Techs) {
    const { id, language } = props;
    const t = language === 'pt' ? pt : en;

    // no mobile o texto fica muito comprido num container estreito,
    // entao nasce colapsado. No desktop o botao esta escondido via CSS
    // e o texto nunca recebe a classe de clamp.
    const [expanded, setExpanded] = useState(false);

    // trocar de aba volta ao estado colapsado
    useEffect(() => { setExpanded(false); }, [id]);

    /* icons: apenas as techs que tem asset local em src/assets.
       stack: nomes sem icone proprio, renderizados como chip de texto. */
    const allTechs = [
        {
            id: 1,
            icons: [java, kotlin, node, nestjs, postgres],
            stack: ['Spring Boot', 'Oracle', 'REST'],
            segments: t.BackendDesc,
        },
        {
            id: 2,
            icons: [],
            stack: ['Kafka', 'RabbitMQ', 'Redis', 'Event-Driven', 'Clean Architecture', 'SQL Gateway'],
            segments: t.ArchitectureDesc,
        },
        {
            id: 3,
            icons: [docker],
            stack: ['Kubernetes', 'AWS', 'EC2', 'S3', 'RDS', 'SQS', 'Lambda', 'Nginx', 'GitHub Actions', 'Jenkins', 'Grafana'],
            segments: t.InfraDesc,
        },
        {
            id: 4,
            icons: [flutter, react, kotlin, java, firebase],
            stack: ['Swift', 'Android', 'iOS', 'Google Play'],
            segments: t.MobileDesc,
        },
        {
            id: 5,
            icons: [],
            stack: ['Jadx', 'Frida', 'Burp Suite', 'OWASP MASVS'],
            segments: t.securityDesc,
        },
    ]

    return(
        <div className="  flex justify-center  item">
            <div className="knowledgeTableWrap flex justify-center mb-10 mt-10   ">
            {allTechs.filter(allTech => allTech.id === id)
        .map((allTech) => (
          <div key={allTech.id} className="containerTable flex flex-col   justify-center  shadow-lg shadow-black gap-8 items-center w-2/5 bg-gradient-to-r p-8 ">
            {allTech.icons.length > 0 && (
              <div className="flex flex-wrap gap-4 border  bg-neutral-900 border-zinc-800 rounded-md p-3 justify-center">
                {allTech.icons.map((icon) => (
                  <img alt="Icone das tecnologias " width={36} key={icon} src={icon} />
                ))}
              </div>
            )}

            <div className="knowledgeChips flex flex-wrap justify-center gap-2">
              {allTech.stack.map((name) => (
                <Chip key={name}>{name}</Chip>
              ))}
            </div>

            <div className="w-full">
              <h1 className={`knowledgeDesc w-full text-center  text-xl ${expanded ? '' : 'clamped'}`}>
                {allTech.segments.map((seg, i) =>
                  seg.highlight
                    ? <span key={i} className="text-fonteVerde font-semibold">{seg.text}</span>
                    : <span key={i}>{seg.text}</span>
                )}
              </h1>

              <div className="showMoreRow justify-center mt-4">
                <ShowMoreButton onClick={() => setExpanded(!expanded)}>
                  {expanded
                    ? (language === 'pt' ? pt.ShowLess : en.ShowLess)
                    : (language === 'pt' ? pt.ShowMore : en.ShowMore)}
                </ShowMoreButton>
              </div>
            </div>
          </div>

        ))}

        </div>
        </div>
    )
}

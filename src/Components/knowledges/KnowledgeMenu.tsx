
import { SectionTab } from "../../styles/SectionTab";
import {pt, en} from "./LanguageKnowledge"

interface KnowledgeMenuProps {
    id: number;
    setId: (id: number) => void;
    language: string;
  }

export function KnowledgeMenu({ id, setId, language }: KnowledgeMenuProps) {
    const t = language === 'pt' ? pt : en;

    const allTypes = [
        { name: t.TabBackend, id: 1 },
        { name: t.TabArchitecture, id: 2 },
        { name: t.TabInfra, id: 3 },
        { name: t.TabMobile, id: 4 },
        { name: t.TabSecurity, id: 5 },
    ]

    return(
        <div className=" containerMenu  p-16 mt-10  shadow-black shadow-lg flex  justify-center items-center  gap-6 rounded-2xl  h-36">
              {allTypes.map((tech) => (
          <SectionTab
            key={tech.id}
            $active={tech.id === id}
            onClick={() => setId(tech.id)}
            className="knowledgeTab"
          >
            {tech.name}
          </SectionTab>
        ))}

        </div>
    )
}

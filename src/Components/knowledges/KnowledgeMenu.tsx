
import { Text } from "./KnowledgeStyle";
import {pt, en} from "./LanguageKnowledge"

interface KnowledgeMenuProps {
    name: string;
    id: number;
    setId: (id: number) => void;
    handleClick: (newId: number) => void;
    language:string
  }

const allTypes = [
        {
            name: "Fullstack",
            id: 1,
        },
        {
            name: "Security",
            id: 2,
        },
        {
            name: "Mobile",
            id: 3,
        },

    ]




export function KnowledgeMenu({ name, setId, language }: KnowledgeMenuProps) {


    return(
        <div className=" containerMenu  p-16 mt-10  shadow-black shadow-lg flex  justify-center items-center  gap-6 rounded-2xl  h-36">
                <Text>

                </Text>
              {allTypes.map((tech) => (
          <button onClick={() => setId(tech.id)}  className=" text-black    justify-center  border border-fonteVerde p-3  bg-white item rounded-md  hover:text-white hover:bg-black  duration-700 transition-all">{tech.name}</button>

        ))}

        </div>
    )
}

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
            name: "FrontEnd",
            id: 1,
        },
        {
            name: "BackEnd",
            id: 2,
        },
        {
            name: "Mobile",
            id: 3,
        },

    ]




export function KnowledgeMenu({ name, setId, language }: KnowledgeMenuProps) {


    return(
        <div className=" containerMenu  p-16 mt-10  shadow-black shadow-lg flex flex-col justify-center items-center  gap-6 rounded-2xl w-96 h-96 ">
                <Text>
                <h1 className="categoryTittle text-center text-xl">{language === 'pt' ? pt.Category : en.Category}</h1>
                </Text>
              {allTypes.map((tech) => (
          <button onClick={() => setId(tech.id)}  className="text-black    justify-center  border border-fonteVerde p-6 bg-white item w-24 rounded-md  hover:text-white hover:bg-black  duration-700 transition-all">{tech.name}</button>

        ))}

        </div>
    )
}
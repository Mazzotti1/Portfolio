import { HoverHeader } from "./HeaderStyles"

export function Header(){
    return(

        <div className="flex justify-between  items-center w-full  ">
            <HoverHeader className="ml-5 my-12    px-4 w-fit rounded-md">
            <a href="#" className=" titleHome text-3xl text-fonteVerde   transition ">Gabriel Mazzotti</a>
            </HoverHeader>
            <div>

            </div>
        </div>

    )
}
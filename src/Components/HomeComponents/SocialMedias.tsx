import {InstagramLogo, LinkedinLogo,GithubLogo, CaretDown } from 'phosphor-react'
import { TextHome } from "./HomeStyles";
export function SocialMedias(){

    return(
    <div>
        <TextHome>
        <div className="flex  items-center gap-10">
        <a href="https://www.instagram.com/omazzotti_/" target={'_blank'}>
        <InstagramLogo  size={32} className=" hover:text-red-700 hover:-translate-y-2 transition" weight="thin"  />
        </a>
        <a href="https://www.instagram.com/omazzotti_/" target={'_blank'} >
        <LinkedinLogo size={32} className=" hover:text-blue-400 hover:-translate-y-2 transition" weight="thin" />
        </a>
        <a href="https://www.instagram.com/omazzotti_/" target={'_blank'}>
        <GithubLogo size={32} className=" hover:text-yellow-400 hover:-translate-y-2 transition" weight="thin" />
        </a>
        </div>
        </TextHome>
    </div>
    )
}
import { useState } from "react";
import "../../styles/HeaderButton.css";
import "../../styles/Sidebar.css";
import { Container } from "../HomeComponents/HomeStyles";
import {  TextHeader, HeaderButtonPlus, ContainerHeader, SubContainerHeader,  } from "./HeaderStyles";

import {Plus, Gear, Envelope, User, X, BookBookmark, Moon, Sun} from 'phosphor-react'
import logo from "../../assets/disquete.gif";


import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import Switch from 'react-switch'
import {useContext} from 'react'
import {pt, en} from './LanguagesHeader'




interface Props {
  toggleTheme(): void;
  changeLanguage: (newLanguage: string) => void;
  language:string
}



export const HeaderButton: React.FC<Props> = ({ toggleTheme, changeLanguage, language }) => {

  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
  const [isOpenBar, setIsOpenBar] = useState<boolean>(true);
  const { colors, title } = useContext(ThemeContext);
  const toggleSidebar = () =>{
    setIsOpenBar(!isOpenBar);

  }

  const AboutButton = () => {
    window.scrollTo(948, 948)

  }

  const ProjectButton = () => {
    window.scrollTo(948 * 2  , 948 * 2)

  }
  const ContactButton = () => {
    window.scrollTo(948 *4 , 948*4)

  }



  return (
    <SubContainerHeader>
    <Container>

    <div>

    <>
    <ContainerHeader>
<aside className={`sidebar  ${isOpenBar ? "open " : ""}`}>

    <div  className={ `botaodoMenu fab mr-96 opacity-25 hover:opacity-100 mt-10 transition-all duration-500 ${isOpenButton ? "open" : ""}`}>

<button  className=" ButtonPlus  hover:text-black hover:bg-zinc-600"  onClick={() =>  setIsOpenButton(!isOpenButton)}>
<HeaderButtonPlus>
  <Plus alt="Botão da navegação" size={30}/>
</HeaderButtonPlus>
</button>

<TextHeader>

<div className="menu absolute ButtonPlus ">

  <button  onClick={AboutButton}>
  <User  className="text-black" size={32} weight="thin" />
    <span>{language === 'pt' ? pt.AboutButton : en.AboutButton}</span>
  </button>
  <button onClick={ProjectButton}>
  <BookBookmark className="text-black" size={32} weight="thin" />
    <span> {language === 'pt' ? pt.ProjectButton : en.ProjectButton}</span>
  </button>
  <button onClick={ContactButton}>
  <Envelope className="text-black" size={32} weight="thin" />
    <span>{language === 'pt' ? pt.ContactButton : en.ContactButton}</span>
  </button>
      {/*Button Open sidebar*/}
  <button onClick={toggleSidebar}>
  <Gear className="text-black" size={32}  weight="thin" />
    <span  >{language === 'pt' ? pt.ConfigButton : en.ConfigButton}</span>

  </button>

</div>

</TextHeader>
</div>

<button onClick={toggleSidebar}><X size={32} className="closeSideBar border text-white hover:text-black hover:bg-white" weight="thin" /></button>

    <Gear size={42} className="text-white mt-20 mb-4" weight="thin" />
    <label className="create-label ">{language === 'pt' ? pt.Configs : en.Configs}</label>
    <label className="flex mt-10 mb-5  justify-center font-500 text-xs text-white">WHITE MODE / DARK MODE</label>
    <div className="flex gap-3 mb-3">
    <Sun  className="text-white" size={18} weight="bold" />
    <Moon  className="text-white" size={18} weight="bold" />
    </div>

    <nav className="">



            <Switch
            className="flex "
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={60}
        handleDiameter={40}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}

      />




      </nav>

      <div className="flex flex-col items-center mt-10">
      <h1  className="text-white font-500 text-sm" >{language === 'pt' ? pt.LanguageButton : en.LanguageButton}</h1>
      <div className='text-white flex gap-7'>
      <button className='hover:opacity-30' onClick={() => changeLanguage('pt')}>
      <img alt="Bandeira do brasil" className='w-10' src="https://img.icons8.com/color/256/brazil.png"/>
      </button>

      <button className='hover:opacity-30' onClick={() => changeLanguage('en')}>
      <img alt="Bandeira dos EUA" className='w-10' src="https://img.icons8.com/color/256/usa.png"/>
      </button>
    </div>

      </div>
      <img alt="Gif do Disquete" className="disquete pt-72" src={logo} />
    </aside>
    </ContainerHeader>
    </>

    </div>

    </Container>
    </SubContainerHeader>
  );
  }
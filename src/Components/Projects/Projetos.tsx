
import { useState} from 'react';
import { GithubLogo, Eye, Wrench, Play} from 'phosphor-react'
import "../../styles/Projects.css"

import js from "../../assets/javascript-original.png"
import html from "../../assets/html5-original.png"
import css from "../../assets/css3-original.png"
import mongo from "../../assets/mongodb-original.png"
import react from "../../assets/react-original.png"
import redux from "../../assets/redux-original.png"
import ts from "../../assets/typescript-original.png"
import node from "../../assets/nodejs-original.png"
import tailwind from "../../assets/tailwindcss-original.png"
import socketio from "../../assets/socketio-original.png"
import java from "../../assets/java.png"
import flutter from "../../assets/flutter.png"
import docker from "../../assets/docker.png"
import postgres from "../../assets/postgres.png"
import firebase from "../../assets/firebase.png"
import kotlin from "../../assets/kotlin.png"
import nestjs from "../../assets/nestjs.png"

import build from "../../assets/build.svg"
import card from "../../assets/card produto.png"
import tdl from "../../assets/to do list.png"
import jdv from "../../assets/jogo da velha.gif"
import login from "../../assets/login.png"
import chat from "../../assets/chat.png"
import nlw from "../../assets/nlw.gif"
import Jdm from "../../assets/jogo da memoria.png"
import Bc from "../../assets/barbercutgif.gif"
import Mm from "../../assets/musclemate.gif"
import gameaily from "../../assets/gameaily.gif"
import hatlas from "../../assets/hatlas.gif"
import { ContainerProjetos, BorderProjetos } from "./ProjetosStyle"
import guesstheflag from "../../assets/guestheflag.gif"

import {pt, en} from "./LanguageProjects"

interface Project {
  title: string;
  thumb: string;
  techs: string[];
  gif_id: string;
  link: string;
  git: string;
  use?: string;
  description:string;
  language:string;
}

export function ProjectList(props: Project) {

  const [showProjects, setShowProjects] = useState(3);
  const allProjects = ([
    {
      title: (props.language === 'pt' ? pt.T13 : en.T13),
      thumb: guesstheflag,
      techs:[flutter, nestjs, postgres, docker],
      gif_id: "1",
      link:"https://play.google.com/store/apps/details?id=com.guess_the_flag_app",
      git:"https://github.com/guess-the-flag",
      use:"https://guessflag.gabrielmazzotti.com.br/#/home",
      description: (props.language === 'pt' ? pt.D13 : en.D13),
    },
    {
      title: (props.language === 'pt' ? pt.T12 : en.T12),
      thumb: hatlas,
      techs:[kotlin, postgres, firebase, docker],
      gif_id: "2",
      link:"https://play.google.com/store/apps/details?id=com.hatlas",
      git:"https://github.com/Mazzotti1/Localiza-ai",
      description: (props.language === 'pt' ? pt.D12 : en.D12),
    },
    {
      title: (props.language === 'pt' ? pt.T11 : en.T11),
      thumb: gameaily,
      techs:[java, kotlin, postgres, firebase, docker],
      gif_id: "3",
      link:"https://play.google.com/store/apps/details?id=com.whatsthegame",
      git:"https://github.com/Mazzotti1/Gameaily",
      description: (props.language === 'pt' ? pt.D11 : en.D11),
    },
    {
      title: (props.language === 'pt' ? pt.T10 : en.T10),
      thumb: Mm,
      techs:[java, flutter, postgres, firebase, docker],
      gif_id: "4",
      link:"https://play.google.com/store/apps/details?id=com.musclemate",
      git:"https://github.com/Mazzotti1/Musclemate",
      description: (props.language === 'pt' ? pt.D10 : en.D10),
    },
    {
      title: (props.language === 'pt' ? pt.T9 : en.T9),
      thumb: Bc,
      techs:[react, node, ts, tailwind, mongo],
      gif_id: "5",
      link:"https://expo.dev/accounts/mazzotti/projects/mobile2/builds/ab8e8c1e-b549-42dc-a7e1-33fc463587e4",
      git:"https://github.com/Mazzotti1/BarberCutApp",
      description: (props.language === 'pt' ? pt.D9 : en.D9),
    },
    {
      title: (props.language === 'pt' ? pt.T1 : en.T1),
      thumb: nlw,
      techs:[react, node, ts, tailwind],
      gif_id: "6",
      link:"https://github.com/Mazzotti1/NLW-setup-Habits",
      git:"https://github.com/Mazzotti1/NLW-setup-Habits",
      description: (props.language === 'pt' ? pt.D1 : en.D1),
    },

    {
      title: (props.language === 'pt' ? pt.T2 : en.T2),
      thumb: tdl,
      techs:[react,js,redux],
      gif_id: "7",
      link:"https://to-do-list-redux-cyan.vercel.app/",
      git:"https://github.com/Mazzotti1/ToDoList-redux",
      description:(props.language === 'pt' ? pt.D2 : en.D2),
    },
    {
      title: (props.language === 'pt' ? pt.T3 : en.T3),
      thumb: card,
      techs:[react,js, css],
      gif_id: "8",
      link:"https://productcard-nine.vercel.app/",
      git:"https://github.com/Mazzotti1/boraCodar-productCard",
      description:(props.language === 'pt' ? pt.D3 : en.D3),
    },
    {
      title: (props.language === 'pt' ? pt.T4 : en.T4),
      thumb: chat,
      techs:[html,css,js,socketio],
      gif_id: "9",
      link:"https://github.com/Mazzotti1/Chat",
      git:"https://github.com/Mazzotti1/Chat",
      description:(props.language === 'pt' ? pt.D4 : en.D4),
    },
    {
      title: (props.language === 'pt' ? pt.T5 : en.T5),
      thumb: login,
      techs:[html,css,js,mongo],
      gif_id: "10",
      link:"https://github.com/Mazzotti1/API-REST-Login",
      git:"https://github.com/Mazzotti1/API-REST-Login",
      description:(props.language === 'pt' ? pt.D5 : en.D5),
    },
    {
      title: (props.language === 'pt' ? pt.T6 : en.T6),
      thumb: Jdm,
      techs:[html,css, js],
      gif_id: "11",
      git:"https://github.com/Mazzotti1/Jogo-da-memoria",
      link:"https://jogo-da-memoria-liard.vercel.app/",
      description: (props.language === 'pt' ? pt.D6 : en.D6),
    },
    {
      title: (props.language === 'pt' ? pt.T7 : en.T7),
      thumb: jdv,
      gif_id: "12",
      techs:[html, css, js],
      git:"../../assets/jogo da velha.gif",
      link:"https://jogo-da-velha-plum-phi.vercel.app/",
      description:(props.language === 'pt' ? pt.D7 : en.D7),
    },

    {
      title: (props.language === 'pt' ? pt.T8 : en.T8),
      thumb: build,
      gif_id: "13",
      techs:[],
      link:"#home",
      git:"#home",
      description:(props.language === 'pt' ? pt.D8 : en.D8),
    },

  ]);

  const handleShowMore = () => {
    setShowProjects(allProjects.length);
  };
  const handleShowLess = () => {
    setShowProjects(3);
    };
  const ProjectCard: React.FC<Project> = ({ title,thumb, description ,techs, link, git, use}) => {
    const [showHoverCard, setShowHoverCard] = useState(false);



     //Card Unico
    return (
      <div className=" relative card h-full flex flex-col p-5 transition duration-700  items-center   text-white  bg-black border border-red shadow-gray-500 shadow-sm rounded-md"
      onMouseEnter={() => setShowHoverCard(true)}
      onMouseLeave={() => setShowHoverCard(false)}
      >

        <img  src={thumb} alt={title} />
        <h3  className="pt-7 text-white text-xl pb-4">{title}</h3>
        <div className="flex mt-10 justify-center text-white">
          <h1 className="text-1xl">{props.language === 'pt' ? pt.Techs : en.Techs}</h1>
        </div>
        <div className="flex pt-8 pb-8 text-white gap-5">
        {techs.map((tech) => (
          <img alt='Icone das Tecnologias usadas' width={32} key={tech} src={tech} />
        ))}
        </div>


        {/* Back Card */}

        {showHoverCard && (
        <div className="absolute opacity-0 hover:opacity-95 transition duration-700 bg-black bottom-0 left-0 right-0 top-0  border border-red shadow-gray-500 shadow-sm rounded-md">

          <div className="flex justify-center">
          <h3  className="pt-4 text-white text-lg ">{title}</h3>
          </div>

          <div className="flex justify-center text-center p-10">
          <p className="descriptionInsideProject text-white  "> {description}</p>
          </div>



          <div className="flex justify-center mb-4 text-white gap-5">
        {techs.map((tech) => (
          <img alt='Icone das Techs usadas' width={32} key={tech} src={tech} />
        ))}
        </div>

          <div className="flex justify-center items-center  gap-20">
              {use && (
                <a className="  text-white p-2 transition-colors  border rounded-full hover:text-black hover:bg-white hover:border-fonteVerde " target={"_blank"}  href={use}><Play size={38}></Play></a>
              )}
              <a className="  text-white p-2 transition-colors  border rounded-full hover:text-black hover:bg-white hover:border-fonteVerde " target={"_blank"} href={link}><Eye size={38}></Eye></a>
              <a className="  text-white p-2 transition-colors  border rounded-full hover:text-black hover:bg-white hover:border-fonteVerde " target={"_blank"} href={git}><GithubLogo size={38} ></GithubLogo></a>
          </div>
        </div>
      )}
      </div>

    );
  };
  //lista de cards

  return (
<ContainerProjetos>
      <div className="    ">

      <div className="justify-center flex">
      <h1 className="TittleSecProjects text-fonteVerde text-center  mt-12 text-5xl">{props.language === 'pt' ? pt.TittleProjects : en.TittleProjects}</h1>
      </div>

      <div className="cards m-auto w-4/6  mt-12 grid gap-10 grid-cols-3">
        {allProjects.slice(0, showProjects).map((project) => (
         <div key={project.gif_id}>
            <ProjectCard language={''} {...project} />
          </div>
        ))}
     </div>





      <div className="flex justify-center  ">
    {showProjects < allProjects.length && (
       <BorderProjetos className="mt-5 mb-5 p-3 rounded-md  z-10">
       <div className="text-center  z-10  ">
       <button className=" rounded-lg transition duration-700 text-fonteVerde  " onClick={handleShowMore}>{props.language === 'pt' ? pt.ShowMore : en.ShowMore}</button>
       </div>
       </BorderProjetos>
      )}

      {showProjects === allProjects.length && (
        <BorderProjetos className="mt-5 mb-5 p-3 rounded-md  z-10">
      <div className="text-center    ">
      <button className="transition duration-700 text-fonteVerde  " onClick={handleShowLess}>{props.language === 'pt' ? pt.ShowLess : en.ShowLess}</button>
      </div>
      </BorderProjetos>
      )}
      </div>
    </div>

    </ContainerProjetos>
  );
};

export default ProjectList;





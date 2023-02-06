
import './styles/TW.css'
import './styles/Global.css'
import './styles/medias/medias.css'

import  ProjectList from './Components/Projects/Projetos'
import Home  from './Components/HomeComponents/Home'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Knowledges } from './Components/knowledges/Knowledges'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import { BackToTop } from './Components/BackToTop/BackToTop'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { HeaderButton } from './Components/HeaderComponents/HeaderButton'
import usePersistedState from './utils/usePersistedState'
import { useState } from 'react'



function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [language, setLanguage] = useState('pt');

  const toggleTheme = () =>{
    setTheme(theme.title === 'dark' ? light : dark);
  }

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };


  return(
    <ThemeProvider theme={theme}>
    <div  >

        <Home  language={language}  />
        <HeaderButton toggleTheme={toggleTheme} changeLanguage={changeLanguage} language={language}/>
        <AboutMe language={language} />
        <ProjectList language={language} title={''} thumb={''} techs={[]} gif_id={''} link={''} git={''} description={''} />
        <Knowledges language={language} />
        <Contact language={language} />
        <Footer language={language}  />
        <BackToTop  />
   </div>
   </ThemeProvider>
  )
}
export default App


// {language === 'pt' ? pt.TypeWrittingBefore : en.TypeWrittingBefore}
import { Header } from "../HeaderComponents/Header";
import { TypewriterEffect } from "./TypewriterEffect";
import { Container } from "./HomeStyles";





const Home = (props: { language: string }) => {



    return(
    <Container>
        <div id="home" className="items-center flex flex-col h-screen overflow-hidden">

            <Header />

            <TypewriterEffect language={props.language} />

        </div>
        </Container>
    )
}

export default Home
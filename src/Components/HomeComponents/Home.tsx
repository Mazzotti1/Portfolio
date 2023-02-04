import { Header } from "../HeaderComponents/Header";
import { SocialMedias } from "./SocialMedias";

import { TypewriterEffect } from "./TypewriterEffect";

import { ButtonDown } from "./ButtonDown";
import { Container } from "./HomeStyles";





const Home = (props: { language: string }) => {



    return(
    <Container>
        <div className="    items-center flex flex-col  h-screen ">

            <Header />

            <TypewriterEffect language={props.language} />
            <div> <SocialMedias /></div>

            <div className="flex justify-center  mt-14">

            <ButtonDown  />

            </div>

        </div>
        </Container>
    )
}

export default Home
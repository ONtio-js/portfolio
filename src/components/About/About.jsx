import Title from "../Home/Title";
import AboutMe from "./AboutMe";
import Funfact from "./Funfact";
import Services from "./Services";

export default function(){
    return(
        <>
        <section id="about">
           <Title title ={'about'} subtile={'me'}/>
           <AboutMe />
           < Title title={'my'} subtile={'services'}/>
           < Services />
           < Title title={'fun facts'} subtile={'about me'}/>
           < Funfact />
        </section>
        </>
    )
}
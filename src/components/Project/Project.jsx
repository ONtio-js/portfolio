import { spacee,crowdfund,web, ecommerce } from "../../assets/img";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";
export default function(){
    return (
        <>
        <div id="project">
            <Title title={'Recent'} subtile={'projects'} />
            <div className="w-full flex items-center gap-2">
                <div className="px-6">
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Home reservation platform that e nables  users to make a resrvation across different countries with a unified and agreed payment system agreed by the guest and home owner in the platform.'} livelink={''} githublink={'https://github.com/ONtio-js/spacee'}/>
                    <ProjectCard  image={crowdfund} title={'web3.0 crowdfunding Platform'} description={'Crowdfunding platform  built on etherum virtual machine that enables users to make charitable contributions, track their donations, and receive updates on the impact of their giving, promoting transparency and accountability in philanthropy.'} livelink={'https://github.com/ONtio-js/blockchain-crowdfunding-platform'} githublink={''}/> 
                    <ProjectCard  image={web} title={'3D modelling webApp'} description={'A 3-D model web appilication built with designers at heart to enable easy creation of mesh designs of shirt and hoodie which integrate AI to help in generation of design ideas and nice textures to enable create an inituitive designs.'} livelink={''} githublink={'https://github.com/ONtio-js/3D-webapp'}/>
                    <ProjectCard  image={ecommerce} title={'online marketplace'} description={'An online market platform built to showcase my abilities in using react and nodejs with integration of payment gateway and following programming best practices to ensure high accessibility and scalability of the web application and this was built using jumia as a case study.'} livelink={''} githublink={'https://github.com/ONtio-js/E-commerce-ui'}/>
                </div>
                
            </div>
        </div>
        </>
    )
}
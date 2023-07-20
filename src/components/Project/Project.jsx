import { spacee,crowdfund } from "../../assets/img";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";
export default function(){
    return (
        <>
        <div id="project">
            <Title title={'Recent'} subtile={'projects'} />
            <div className="w-full flex items-center gap-2">
                <div className="px-6">
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Home reservation platform that e nables  users to make a resrvation across different countries with a unified and agreed payment system agreed by the guest and home owner in the platform'} livelink={''} githublink={'https://github.com/ONtio-js/spacee'}/>
                    <ProjectCard  image={crowdfund} title={'web3.0 crowdfunnding Platform'} description={'Crowdfunding platform  built on etherum virtual machine that enables users to make charitable contributions, track their donations, and receive updates on the impact of their giving, promoting transparency and accountability in philanthropy'} livelink={'https://github.com/ONtio-js/blockchain-crowdfunding-platform'} githublink={''}/> 
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nemo harum expedita odio accusamus, a'} livelink={''} githublink={''}/>
                </div>
                
            </div>
        </div>
        </>
    )
}
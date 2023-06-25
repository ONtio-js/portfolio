import { spacee } from "../../assets/img";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";
export default function(){
    return (
        <>
        <div id="project">
            <Title title={'Recent'} subtile={'projects'} />
            <div className="w-full flex items-center gap-2">
                <div className="px-6">
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nemo harum expedita odio accusamus, autem necessitatibus repudiandae q'} livelink={''} githublink={''}/>
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nemo harum expedita odio repudiandae quod doloremque!'} livelink={''} githublink={''}/> 
                    <ProjectCard  image={spacee} title={'apartment booking'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nemo harum expedita odio accusamus, a'} livelink={''} githublink={''}/>
                </div>
                
            </div>
        </div>
        </>
    )
}
import { spacee } from "../../assets/img";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";
export default function(){
    return (
        <>
        <div id="project">
            <Title title={'Recent'} subtile={'projects'} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:gap-10">
                <div className="px-6">
                    <ProjectCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                    <ProjectCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                </div>
                <div className="px-6 lgl:mt-20">
                    <ProjectCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                    <ProjectCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                </div>
            </div>
        </div>
        </>
    )
}
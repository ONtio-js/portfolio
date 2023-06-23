import Title from "../Home/Title";
import Education from "./Education";
import MySkills from "./MySkills";

export default function(){
    return (
        <>
        <section id="resume">
            <div>
                < Title title={'my'} subtile={'resume'} />
                <Education />
                < Title title={'my'} subtile={'skills'} />
                <MySkills />
            </div>
        </section>
        </>
    )
}
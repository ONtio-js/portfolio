import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md"
import ResumeTitle from "./ResumeTitle";
import ResumeCard from "./ResumeCard";
export default function () {
    return (
        <>
            <div className="w-full grid grid-cols-9 px-6">
                <div className="col-span-9 md:col-span-4">
                    <ResumeTitle icon={< MdWork />} title={'experience'} />
                    < ResumeCard badge={""} title={'intern'} subtitle={'zitrabot'} description={'Interning at Zitrabot was an immersive experience in AI-powered chatbot development. Collaborating with a skilled team, I gained practical knowledge and contributed to cutting-edge advancements in conversational AI.'} />
                    < ResumeCard badge={"2021-2022"} title={'backend developer'} subtitle={'Freelancing'} description={"I work with a team of product designers, front-end developers, and content writers to develop a school management website and I made a 30% impact on our work strategy by making sure I deliver my work on time as well as other engineers."} />
                  
                </div>
                <div className="lgl:flex w-full h-full  justify-center items-center ">
                    <span className="w-[2px] h-full inline-block bg-zinc-800"></span>
                </div>
                <div className="col-span-9 md:col-span-4">
                    <ResumeTitle icon={<GiGraduateCap />} title={'education'} />
                    < ResumeCard badge={""} title={'Alx-Africa'} subtitle={'software engineering'} description={'Unlock the world of software engineering through comprehensive study. Dive deep into coding, algorithms, and system design to become a skilled software engineer. Harness the power of technology and transform ideas into reality.'} />
                    < ResumeCard badge={"2018-present"} title={'federal university of owerri'} subtitle={'civil engineering'} description={'Embark on a transformative journey in civil engineering, mastering the art of construction and design. Acquire the skills to shape the world around us, from structural marvels to sustainable infrastructure. Explore the principles of civil engineering and unlock a career filled with innovation and impact.'} />
                </div>

            </div>
        </>
    )
}

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

                    < ResumeCard badge={""} title={'backend developer'} subtitle={'Freelancing'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ipsam! Fugit voluptate minus inventore dolores?'} />
                    < ResumeCard badge={"2021-2022"} title={'intern'} subtitle={'zitrabot'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ipsam! Fugit voluptate minus inventore dolores?'} />
                </div>
                <div className="lgl:flex w-full h-full  justify-center items-center ">
                    <span className="w-[2px] h-full inline-block bg-zinc-800"></span>
                </div>
                <div className="col-span-9 md:col-span-4">
                    <ResumeTitle icon={<GiGraduateCap />} title={'education'} />
                    < ResumeCard badge={""} title={'Alx-Africa'} subtitle={'software engineering'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ipsam! Fugit voluptate minus inventore dolores?'} />
                    < ResumeCard badge={"2018-present"} title={'federal university of owerri'} subtitle={'civil engineering'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ipsam! Fugit voluptate minus inventore dolores?'} />
                </div>

            </div>
        </>
    )
}

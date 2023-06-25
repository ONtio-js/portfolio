import ResumeTitle from "./ResumeTitle";
import { SiArtstation, SiJavascript } from "react-icons/si";
import { FaFileExport, FaFlag, FaPen } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
// import {ioIoPaper} from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
export default function () {
    return (
        <>
            <div className="grid grid-cols-9 gap-10 px-6 w-full">
                <div className="col-span-9 md:col-span-4">
                    <ResumeTitle title={'frameworks'} icon={< BiCodeAlt />} />
                    <div className="py-6 w-5/6">
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">javascript</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">Reactjs</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[65%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">Nodejs</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">mongoDB</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">expressjs</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[65%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">tailwindCSS</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                    </div>
                    <ResumeTitle title={'development'} icon={< BiCodeAlt />} />
                    <div className="py-4 w-5/6">
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">user interface development</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">backend development</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">app development</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" hidden w-full h-full lgl:flex justify-center items-center">
                    <span className="w-[2px] h-full inline-flex bg-zinc-800"></span>
                </div>
                <div className="col-span-9 md:col-span-4 overflow-x-hidden">
                    <ResumeTitle title={'programming'} icon={< FaPen />} />
                    <div className="py-6 w-5/6 ">
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">Javascript</p>
                            <span className="w-full  bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">pHP</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[65%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">HTML5</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">CSS3</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize">C</p>
                            <span className="w-full bg-zinc-800 h-1 inline-flex relative">
                                <span className="w-[55%] h-full absolute top-0 left-0 bg-designColor"></span>
                            </span>
                        </div>
                    </div>
                    <ResumeTitle title={'extras'} icon={< FaFileExport />} />
                    <div className="py-6 w-5/6 ">
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize flex gap-2"><span className="text-designColor">< GiCheckMark /></span> team collaboration</p>

                        </div>
                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize flex gap-2"><span className="text-designColor">< GiCheckMark /></span> effective communication</p>

                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize flex gap-2"><span className="text-designColor">< GiCheckMark /></span> leadership</p>

                        </div>

                        <div className="py-3 border-b-[2px] border-zinc-800">
                            <p className="text-base text-textColor -mb-1.5 capitalize flex gap-2"><span className="text-designColor">< GiCheckMark /></span> curiosity</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
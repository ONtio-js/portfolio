import Intro from "./Intro";
import { FaEnvelope, FaFile, FaPen, FaUser } from "react-icons/fa";
import { MdOutlineWork } from 'react-icons/md';
import { BsTelephoneFill, BsSun } from "react-icons/bs";
import { useState } from "react";
import Resume from "../Resume/Resume";
import About from "../About/About";
import { motion } from "framer-motion";
import Project from "../Project/Project";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";


export default function () {
    const [about, setAbout] = useState(true);
    const [resume, setResume] = useState(false);
    const [projects, setProjects] = useState(false);
    const [blog, setBlog] = useState(false);
    const [contact, setContact] = useState(false);
    const [theme,setTheme] = useState(false);

    return (
        <>
            <div className="w-[95%] md:w-[85%] lgl:h-[85%] lgl:p-6 bg-bodyColor/40 flex md:p-4 items-start justify-between rounded-2xl text-white z-50">

                <div className="w-16 h-96 hidden bg-transparent md:flex flex-col gap-4 mr-3">

                    <div className="w-full h-16  bg-bodyColor rounded-3xl flex justify-center items-center ">
                        <div className="group flex flex-col gap-2 overflow-hidden cursor-pointer">
                            <BsSun />
                        </div>
                    </div>
                    <div className="w-full h-80 py-6 mt-6  bg-bodyColor rounded-3xl flex flex-col items-center justify-between ">


                        <span onClick={() => {
                            setAbout(true) & setContact(false) & setProjects(false) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center   cursor-pointer relative group">
                            < FaUser /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">about</span>
                        </span>
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(true) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < MdOutlineWork /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">Project</span>
                        </span>
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(false) & setBlog(false) & setResume(true);
                        }} className="w-full h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaFile /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">resume</span>
                        </span>
                       
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(false) & setBlog(true) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaPen /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">blog</span>
                        </span>

                        <span onClick={() => {
                            setAbout(false) & setContact(true) & setProjects(false) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaEnvelope /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">contact</span>
                        </span>
                        <a href="tel:+2348118637072" className="w-full h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < BsTelephoneFill /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">call</span>
                        </a>
                    </div>
                </div>
                <div className=" w-full lgl:w-[94%] h-full bg-transparent flex flex-col items-center gap-4 lgl:flex-row justify-center ">
                    <div className="fixed bottom-[2vh] w-full mt-2 md:hidden  bg-bodyColor rounded-2xl  flex py-4 items-center gap-2 justify-between ">
                        <a href="#about" className="w-5/6 mx-2 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaUser /><span className="absolute -left-2 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">about</span>
                        </a>
                        <a href="#project" className="w-5/6 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < MdOutlineWork /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">Project</span>
                        </a>
                        <a href="#resume" className="w-5/6 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaFile /><span className="absolute -left-2 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">resume</span>
                        </a>

                        <a href="#blog" className="w-5/6 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaPen /><span className="absolute l-eft-2 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">blog</span>
                        </a>

                        <a href="#contact" className="w-5/6 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < FaEnvelope /><span className="absolute -left-2 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">contact</span>
                        </a>
                        <a href="tel:+2348118637072" className="w-5/6 h-6 text-xl flex  items-center justify-center    cursor-pointer relative group">
                            < BsTelephoneFill /><span className="absolute -left-2 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-2 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">call</span>
                        </a>
                    </div>
                    {/* introduction */}
                    < Intro />
                    {/* right part start */}
                    <div className="w-full lgl:w-5/6 h-[96%] flex justify-center items-center rounded-2xl bg-bodyColor">
                        <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
                            <About />
                            <Resume />
                            <Project />
                            <Contact />
                            <Blog />
                        </div>
                        <div className="w-full h-[96%] hidden lgl:flex justify-center  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 ">


                            {about &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < About />
                                </motion.div>
                            }
                            {projects &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Project />
                                </motion.div>
                            }
                            {resume &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Resume />
                                </motion.div>
                            }

                            {contact &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Contact />
                                </motion.div>
                            }
                            {blog &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Blog />
                                </motion.div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
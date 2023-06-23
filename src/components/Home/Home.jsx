import Intro from "./Intro";
import { FaArchive, FaEnvelope, FaFile, FaPen, FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs"
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
    const [sideNav, setSideNav] = useState(false);

    return (
        <>
            <div className="w-[85%] lgl:h-[85%] lgl:p-6 bg-bodyColor/40 flex md:p-4 items-start justify-between rounded-2xl text-white z-50">

                <div className="w-16 h-96 hidden bg-transparent md:flex flex-col gap-4 mr-3">

                    <div className="w-full h-16  bg-bodyColor rounded-3xl flex justify-center items-center ">
                        <div className="group flex flex-col gap-2 overflow-hidden cursor-pointer">
                            <span className="   inline-block w-8 h-[2px] bg-textColor -translate-x-2 group-hover:translate-x-0  transition-transform duration-300 group-hover:bg-designColor"></span>
                            <span className="inline-block w-8 h-[2px] bg-textColor group-hover:bg-designColor transition-transform group-hover:-translate-x-3 duration-300 "></span>
                            <span className="inline-block w-8 h-[2px] bg-textColor -translate-x-3 group-hover:translate-x-0  transition-transform duration-300 group-hover:bg-designColor"></span>
                        </div>
                    </div>
                    <div className="w-full h-80 py-6 mt-6  bg-bodyColor rounded-3xl flex flex-col items-center justify-between ">


                        <span onClick={() => {
                            setAbout(true) & setContact(false) & setProjects(false) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaUser /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">about</span>
                        </span>
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(false) & setBlog(false) & setResume(true);
                        }} className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaFile /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">resume</span>
                        </span>
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(true) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaArchive /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">Project</span>
                        </span>
                        <span onClick={() => {
                            setAbout(false) & setContact(false) & setProjects(false) & setBlog(true) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaPen /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">blog</span>
                        </span>

                        <span onClick={() => {
                            setAbout(false) & setContact(true) & setProjects(false) & setBlog(false) & setResume(false);
                        }} className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaEnvelope /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">contact</span>
                        </span>
                        <a href="tel:+2348118637072" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < BsTelephoneFill /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">call</span>
                        </a>
                    </div>
                </div>
                <div className="w-full lgl:w-[94%] h-full bg-transparent flex flex-col items-center gap-4 lgl:flex-row justify-center ">
                    <div className="w-full  md:hidden  bg-bodyColor rounded-3xl  flex py-3 items-center justify-between ">
                        <a  href ="#about" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaUser /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">about</span>
                        </a>
                        <a  href = "#resume" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaFile /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">resume</span>
                        </a>
                        <a href="#project" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaArchive /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">Project</span>
                        </a>
                        <a href="#blog" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaPen /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">blog</span>
                        </a>

                        <a href="#contact" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < FaEnvelope /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">contact</span>
                        </a>
                        <a href="tel:+2348118637072" className="w-full h-6 text-xl flex  items-center justify-center  text-textColor cursor-pointer relative group">
                            < BsTelephoneFill /><span className="absolute left-0 capitalize font-semibold text-sm px-3 py-[2px] bg-designColor rounded-xl translate-x-8 transition-all group-hover:translate-x-11 opacity-0 group-hover:opacity-100 duration-300 z-20">call</span>
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

                            {resume &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Resume />
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
                            {blog &&
                                < motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}>
                                    < Blog />
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
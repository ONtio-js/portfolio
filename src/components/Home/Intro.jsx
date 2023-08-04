import { Resume, profile } from "../../assets/img";
import {BsCloudLightningFill, BsFacebook } from 'react-icons/bs';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import {AiFillTwitterCircle } from 'react-icons/ai';
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import {useTypewriter, cursoe, Cursor } from "react-simple-typewriter";

export default function () {
    const [text] = useTypewriter({
        words: ["Fullstack developer", "Backend developer", "web developer"],
        loop: true,
        typeSpeed:50,
        deleteSpeed:20,
        delaySpeed:2000
    });
    return (
        <div className=" w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-textShadow z-10">
            <div className="w-full h-3/5 p-2 relative overflow-hidden">
                <img className="w-full h-full object-cover rounded-2xl" src={profile} alt="profile image" srcSet=""
                    loading="priority" />
                    <div className="absolute w-full h-5/6 bg-designColor top-[70%] left-[59%] rotate-[-135deg] shadow-inner"></div>
                    
                    <div className="absolute w-3/12 h-5/6 bg-white/50 top-[43%] left-[80%] rotate-[-135deg]"></div>
            </div>
            <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl ">
                <div className="flex flex-col items-center gap-2 py-[2.2rem] ">
                    <h1 className="  text-3xl font-semibold capitalize ">Nkwuda theophilus</h1>
                    <p className=" text-designColor tracking-wide font-medium capitalize text-2xl">{text}< Cursor cursorBlinking= "true" cursorStyle="|"/></p>
                    <div className="flex justify-center gap-3 mt-2">
                        <a href="https://www.github.com/ONtio-js" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < FaGithub/></a>
                        <a href="https://www.linkedin.com/in/ontiojs1" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < FaLinkedin/></a>
                        <a href="https://www.twitter.com/tiocode_" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < AiFillTwitterCircle/></a>
                        <a href="https://www.facebook.com/tiocode" target="_blank"className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < BsFacebook/></a>
                        <a href="https://www.instagram.com/ontio_1/" target="_blank"className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < FiInstagram/></a>
                        <a href="mailto:nkwuda2@gmail.com?subject=Enquiry about your service" target="_blank " className="hover:text-designColor duration-300 cursor-pointer text-2xl"> < FiMail/></a>
                    </div>
                </div>
                <div className="flex h-14 ">
                    <a href={Resume} target="_blank" rel="noreferer" className="w-1/2 h-full border-t-[1px] border-t-zinc-700 tracking-wide uppercase text-sm hover:text-designColor duration-300">
                    <button className="w-full h-full justify-center flex items-center gap-2 uppercase">download CV< BsCloudLightningFill/></button>
                    </a>
                    <a href="mailto:nkwuda2@gmail.com?subject=Enquiry about your service" target="_blank " className="w-1/2 h-full border-t-[1px] border-l-[1px] border-zinc-700 tracking-wide text-sm hover:text-designColor duration-300">
                    <button className="w-full h-full justify-center flex items-center gap-2 uppercase ">contact < FiSend/></button>
                    </a>
                </div>
            </div>
        </div>
    )
}
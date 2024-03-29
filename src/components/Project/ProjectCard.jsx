import { FaCloud, FaGithub } from "react-icons/fa";
import '../../App.css'
export default function({image,description,title, githublink,livelink}){
    return(
        <>
         <div className="mt-3 w-full">
   
        <div className="w-full  py-2 flex   gap-4 items-center border-b-[2px] border-b-zinc-800 group">
            <div className="w-2/5 h-2/6 mb-3 overflow-hidden relative cursor-pointer ">
                <img src={image} alt="" srcSet=""/>
                <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-purple-600 via-yellow-600 to-yellow-100 opacity-20"></div>
            </div>
            <div className=" w-3/5 flex flex-col items-center gap-1.5">
            <h3 className="text-base py-2 capitalize text-center font-titleFont md:text-[25px] font-semibold  text-designColor">{title}</h3>
                <p className=" text-xs  md:text-base -mt-1 box">{description}</p>
                <div className="flex justify-between items-center w-full px-4 mt-4 ">
                    
                <a  href = {githublink}className="text-[10px] capitalize md:text-base text-center font-semibold  font-titleFont inline-flex gap-2 items-center  "> documentation < FaGithub /></a>
                <a className=" text-xs font-semibold md:text-lg group-hover:text-designColor duration-300 inline-flex gap-2 items-center" href={livelink}> <FaCloud /> Live</a>
                </div>
               
            </div>
        </div>
        </div>
        </>
    )
}
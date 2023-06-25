import ServiceCard from "./ServiceCard";
import { BiCodeAlt } from "react-icons/bi";
import {SiAntdesign} from "react-icons/si";
import {AiTwotoneAppstore} from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";
export default function Services(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          < ServiceCard icon={<BiCodeAlt />} title={'web development'} description={"Building stunning websites that captivate and engage. Delivering seamless user experiences with cutting-edge web technologies. Let's bring your online vision to life."}/>
          < ServiceCard icon={< SiAntdesign />} title={'web/app design'} description={"Capture Attention with Striking Web & App Designs. Engage Users through Intuitive Interfaces. Let's Create Designs That Leave a Lasting Impression."} />
          < ServiceCard icon={<AiTwotoneAppstore />} title={'Api Development'} description={"Expert API development for seamless data communication and enhanced software integration. Unlock the power of efficient and secure data handling in your applications."} />
          < ServiceCard icon={< FaAppStoreIos />} title={'app development'} description={"Transforming your vision into cutting-edge apps. Seamless development process from concept to launch. Empowering businesses with innovative solutions for the digital era."} />
        </div>
        </>
    )
}

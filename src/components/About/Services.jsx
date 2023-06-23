import ServiceCard from "./ServiceCard";
import { BiCodeAlt } from "react-icons/bi";
import {SiAntdesign} from "react-icons/si";
import {AiTwotoneAppstore} from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";
export default function Services(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2  text-white">
          < ServiceCard icon={<BiCodeAlt />} title={'web development'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis nemo quaerat, repudiandae temporibus pariatur.'}/>
          < ServiceCard icon={< SiAntdesign />} title={'web/app design'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis nemo quaerat, repudiandae temporibus pariatur.'} />
          < ServiceCard icon={<AiTwotoneAppstore />} title={'sEO'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis nemo quaerat, repudiandae temporibus pariatur.'} />
          < ServiceCard icon={< FaAppStoreIos />} title={'app development'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis nemo quaerat, repudiandae temporibus pariatur.'} />
        </div>
        </>
    )
}

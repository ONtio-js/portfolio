export default function({image,title,category,date,link}){
    return (
        <div className="mt-3 w-full">
            <h3 className="text-base capitalize text-center font-titleFont md:text-lg font-semibold  text-designColor">{title}</h3>
        <div className="w-full  py-2 flex  gap-2 items-center border-b-[2px] border-b-zinc-800 group">
            <div className="w-2/5 h-2/6 mb-3 overflow-hidden relative cursor-pointer ">
                <img src={image} alt="" srcSet=""/>
                <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-purple-600 via-purple-600 to-purple-200 opacity-20"></div>
            </div>
            <div className=" w-3/5 flex flex-col items-center gap-1.5">
                
                <p className=" text-xs  md:text-base -mt-1">{category}</p>
                <div className="flex justify-between items-center w-full ">
                    
                <h2 className="text-xs capitalize md:text-base text-center  font-titleFont  ">{date}</h2>
                <a className=" text-xs md:font-semibold md:text-base group-hover:text-designColor duration-300" href={link}> Read More</a>
                </div>
               
            </div>
        </div>
        </div>
    )
}
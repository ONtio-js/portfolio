export default function({image,title,category,subtitle}){
    return (
        <div className="w-full py-8 flex flex-col justify-center items-center border-b-[2px] border-b-zinc-800 group">
            <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer ">
                <img src={image} alt="" srcSet=""/>
                <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-purple-600 via-purple-600 to-purple-200 opacity-20"></div>
            </div>
            <div className="flex flex-col items-center gap-1.5">
                <h3 className=" capitalize text-center font-titleFont text-lg font-semibold border-[2px] px-2 border-designColor text-designColor">{title}</h3>
                <h2 className=" capitalize text-base text-center font-semibold font-titleFont text-white group-hover:text-designColor duration-300">{subtitle}</h2>
                <p className=" capitalize text-center text-base -mt-1">{category}</p>
            </div>
        </div>
    )
}
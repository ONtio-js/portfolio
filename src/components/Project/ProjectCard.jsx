export default function({image,category,title}){
    return(
        <>
        <div className="w-full py-8 flex flex-col justify-center items-center border-b-[2px] border-b-zinc-800">
            <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
                <img src={image} alt="" srcSet=""/>
                <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-purple-600 via-purple-600 to-purple-200 opacity-20"></div>
            </div>
            <div>
                <h3 className=" capitalize text-center font-titleFont text-lg font-semibold">{title}</h3>
                <p className=" capitalize text-center text-base  -mt-1">{category}</p>
            </div>
        </div>
        </>
    )
}
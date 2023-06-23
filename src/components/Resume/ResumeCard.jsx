export default function({badge,title, subtitle,description}){
    return (
        <>
          <div className="w-full py-6 flex flex-col gap-1 border-b-[2px] border-zinc-800">
            { badge === "" ?  <h6 className="w-24 text-center text-sm py-1 px-[1.3px] border-[1px] border-designColor rounded-sm text-designColor">2022-present</h6> :  <h6 className="w-24 text-center text-sm py-1 px-[1.3px] border-[1px] border-zinc-800 rounded-sm text-white/80">{badge}</h6>}
          
            <h2 className="text-lg font-titleFont text-gray-200 font-medium capitalize"> {title}</h2>
            <p className="text-sm text-white/80 font-semibold capitalize -mt-1">{subtitle}</p>
            <p className="text-base text-white/80 font-medium pr-10">{description}</p>
           </div>
        </>
    )
}
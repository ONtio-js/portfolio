export default function Title({title,subtile}){
    return (
        <>
         <h1 className="font-titleFont font-bold text-xl capitalize   relative px-6 py-3 z-10 border-b-2 border-zinc-800 group"><span className="text-designColor"> <span className="inline-block rounded-full absolute left-2 top-3  group-hover:translate-x-24 transition-transform duration-500 w-8 h-8 bg-gradient-to-t from-designColor to-gray-600  opacity-10 -z-10 translate-x-0"></span>{title}</span> {subtile}
            </h1>
        </>
    )
}
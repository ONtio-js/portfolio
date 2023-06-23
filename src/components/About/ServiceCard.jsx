export default function ServiceCard({icon,title,description}) {
  return (
    <>
    <div className="flex flex-col gap-2 items-center px-6 py-6 border-r-2 text-lg border-zinc-800 border-b-2">
        <span className="text-5xl text-designColor mb-2 ">
            {icon}  
        </span>
        <h2 className="font-titleFont capitalize text-lg font-semibold">{title}</h2>
        <p className="text-center px-6 text-base">
            {description}
        </p>

    </div>
</>
  )
}
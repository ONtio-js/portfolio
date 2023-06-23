export default function AboutMe() {
    return (
        <>
            <div className=" flex flex-col md:flex-row pb-6">
                <div className="  w-full md:w-1/2 text-white border-r-[2px]  border-zinc-800 p-6">
                    <div className="py-6">
                        <h2 className="font-semibold text-lg py-2"> Hello! I am Nkwuda Theophilus</h2>
                        <p className="text-base leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique corporis quasi placeat aut vero voluptatem, fugiat consectetur nemo voluptate minus tenetur aliquid veniam totam ipsam, ipsum architecto hic repellat reiciendis.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <ul className="flex flex-col gap-1">
                        <li className="text-white capitalize text-base font-normal flex justify-between items-center border-b-[1px] border-zinc-800 py-2">
                            <span className="bg-designColor  px-4 py-[1px] rounded-md font-semibold">experience:</span>2 years
                        </li>
                        <li className="text-white capitalize text-base font-normal flex justify-between items-center border-b-[1px] border-zinc-800 py-2">
                            <span className="bg-designColor  px-4 py-[1px] rounded-md font-semibold">residence</span> nigeria
                        </li>
                        <li className="text-white capitalize text-base font-normal flex justify-between items-center border-b-[1px] border-zinc-800 py-2">
                            <span className="bg-designColor  px-4 py-[1px] rounded-md font-semibold">freelance</span> avaliable
                        </li>
                        <li className="text-white capitalize text-base font-normal flex justify-between items-center border-b-[1px] border-zinc-800 py-2">
                            <span className="bg-designColor  px-4 py-[1px] rounded-md font-semibold">residence</span> Lagos, nigeria
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
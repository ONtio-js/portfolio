import Title from "../Home/Title";
import Form from "./Form";


export default function () {
    
    return (
        <section  className=" " id="contact">
            < Title title={'Get'} subtile={'in touch'} />
            
            <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
                <div className=" w-full lgl:w-1/2 ">
                <p className="flex justify-between w-full text-base  py-4 border-b-[2px] border-zinc-800 gap-2" >
                        <span className="bg-designColor  text-base font-titleFont font-medium rounded-md flex items-center justify-center px-1 capitalize">address</span> No. 34 orille, Lagos
                    </p>
                    <p className="flex justify-between w-full text-md  py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor  text-base font-titleFont font-medium rounded-md flex items-center justify-center px-4 capitalize">phone</span> +2348118637072
                    </p>
                </div>
                <div className="w-full lgl:w-1/2 ">
                    <p className="flex justify-between w-full text-md  py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor  text-base font-titleFont font-medium rounded-md flex items-center justify-center px-2 capitalize">email</span> nkwuda2@gmail.com
                    </p>
                    <p className="flex justify-between w-full text-md  py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor  text-base font-titleFont font-medium rounded-md flex items-center justify-center px-4 capitalize">freelance</span> avalaible
                    </p>
                </div>
            </div>
            <div className="w-full mt-10">
                <Title title={'send'} subtile={'messages'} />
                   < Form />
            </div>
        </section>
    );
}
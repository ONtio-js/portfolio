import { useState } from "react";
import Title from "../Home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";
export default function () {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientMessage, setClientMessage] = useState('');
    const [errClientName, setErrClientName] = useState(false);
    const [errClientEmail, setErrClientEmail] = useState(false);
    const [errClientMessage, setErrClientMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    // ==================Email validation starts =================
    const emailValidation = (email) => {
        return String(email).toLowerCase().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
    }
    //===================Email validation ends =================
    const handleClientName = (event) => {
        setClientName(event.target.value);
        setErrClientName(false);
    }
    const handleClientEmail = (event) => {
        setClientEmail(event.target.value);
        setErrClientEmail(false);
    }
    const handleClientMessage = (event) => {
        setClientMessage(event.target.value);
        setErrClientMessage(false);
    };
    const handleSumbit = async (e) => {
        e.preventDefault();
        if (!clientName) {
            setErrClientName(true);
        }
        if (!clientEmail) {
            setErrClientEmail(true);
        } else if (!emailValidation(clientEmail)) {
            setErrClientEmail(true);
        }
        if (!clientMessage) {
            setErrClientMessage(true);
        }
        if (clientName && clientEmail && emailValidation(clientEmail) && clientMessage) {
            await axios.post('https://getform.io/f/b955d741-a915-4583-87c3-e2630297e26e', {
                name: clientName,
                email: clientEmail,
                message: clientMessage
            });
            setSuccessMessage(` Hello ${clientName}🖐 Your message have successfully sent, Thanks for visiting my page and i won't hesistate getting back to you, if needed.`);
            setClientEmail('');
            setClientMessage('');
            setClientName('');
        }
    }
    return (
        <section id="contact" className="w-full">
            < Title title={'Get'} subtile={'in touch'} />
            <div className="p-6 flex justify-between gap-4 flex-col md:flex-row md:gap-10 lgl:gap-20">
                <div className=" w-full lgl:w-1/2 ">
                <p className="flex justify-between w-full text-base text-white py-4 border-b-[2px] border-zinc-800 gap-2" >
                        <span className="bg-designColor text-white text-base font-titleFont font-medium rounded-md flex items-center justify-center px-1 capitalize">address</span> No. 34 orille, Lagos
                    </p>
                    <p className="flex justify-between w-full text-md text-white py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor text-white text-base font-titleFont font-medium rounded-md flex items-center justify-center px-4 capitalize">phone</span> +2348118637072
                    </p>
                </div>
                <div className="w-full lgl:w-1/2 ">
                    <p className="flex justify-between w-full text-md text-white py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor text-white text-base font-titleFont font-medium rounded-md flex items-center justify-center px-2 capitalize">email</span> nkwuda2@gmail.com
                    </p>
                    <p className="flex justify-between w-full text-md text-white py-4 border-b-[2px] border-zinc-800">
                        <span className="bg-designColor text-white text-base font-titleFont font-medium rounded-md flex items-center justify-center px-4 capitalize">freelance</span> avalaible
                    </p>
                </div>
            </div>
            <div className="w-full mt-10">
                <Title title={'send'} subtile={'messages'} />
                {successMessage ? <p className="text-center text-lg font-titleFont p-20 text-designColor">{successMessage}</p> :
                    <form className="mt-5 px-5" id="form" action="https://getform.io/f/b955d741-a915-4583-87c3-e2630297e26e">
                        <div className="w-full flex justify-between gap-10 ">
                            <input type="text"
                                value={clientName}
                                onChange={handleClientName}
                                placeholder="Full Name"
                                className={`${errClientName ? "focus-visible:border-red-800 border-red-800 " : "border-zinc-800  focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-white  outline-none duration-300`} />
                            <input type="email"
                                value={clientEmail}
                                onChange={handleClientEmail}
                                placeholder="Email Address"
                                className={`${errClientEmail ? "focus-visible:border-red-800 border-red-800 " : "border-zinc-800  focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-white  outline-none duration-300`} />
                        </div>
                        <textarea cols="30" rows="5"
                            value={clientMessage}
                            onChange={handleClientMessage}
                            className={`${errClientMessage ? "focus-visible:border-red-800 border-red-800 " : "border-zinc-800  focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-white  outline-none duration-300 mt-5 resize-none`}></textarea>
                        <button onClick={handleSumbit} className="text-base px-4 flex items-center gap-2 text-white hover:text-designColor duration-200 mt-4 border-[1px] border-designColor py-2 rounded-md">send Message <span className="text-designColor">{< FiSend />}</span></button>
                    </form>}
            </div>
        </section>
    )
}
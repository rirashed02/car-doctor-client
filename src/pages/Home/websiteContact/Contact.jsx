import { FaMapMarkedAlt } from "react-icons/fa";
import {  FcCalendar } from "react-icons/fc";
import {  TbPhoneCalling } from "react-icons/tb";


const Contact = () => {
    return (
        <div className="bg-[#151515] text-white rounded-md mt-28 mb-24" >
            <div className="flex items-center px-16 py-16">
                <div className="flex items-center mr-16">
                    <h3 className="text-3xl mr-5"> <FcCalendar></FcCalendar> </h3>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1 className="text-3xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center mx-16">
                    <h3 className="text-3xl mr-5"><TbPhoneCalling></TbPhoneCalling></h3>
                    <div>
                        <p>Have a question?</p>
                        <h2 className="text-2xl font-bold">+2546 251 2658</h2>
                    </div>
                </div>
                <div className="flex items-center mx-16">
                    <h3 className="text-3xl mr-5"> <FaMapMarkedAlt></FaMapMarkedAlt> </h3>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2 className="text-2xl font-bold">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
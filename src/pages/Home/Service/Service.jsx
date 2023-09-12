import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard";

const Service = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="text-center mx-auto w-[630px] mb-12">
                <h1 className='text-[#FF3811] text-2xl font-bold'>Service</h1>
                <h3 className='text-5xl font-bold mb-4'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>)
                }
            </div>
            <div className="text-center mt-14">
                <button className="btn btn-outline btn-error"> More Services </button>
            </div>
        </div>
    );
};

export default Service;
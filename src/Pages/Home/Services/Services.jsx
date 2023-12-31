import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold text-orange-600">Service</h2>
                <h3 className="text-5xl font-semibold	 ">Our Service Area</h3>
                <p className="font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words. which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
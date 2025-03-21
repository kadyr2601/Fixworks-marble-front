import { useEffect, useState } from 'react';
import { Service } from './types';

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);

    const Host = "https://fixworks-marble.com/api/v1";

    useEffect(() => {
        fetch(`${Host}/services`)
            .then((response) => response.json())
            .then((data: Service[]) => setServices(data))
            .catch((error) => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="py-vh-5 w-100 overflow-hidden" id="services">
            <div className="container">
                <div className="row d-flex justify-content-end">
                    <div className="col-lg-8" data-aos="fade-down">
                        <h2 className="display-6"></h2>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`col-md-6 col-lg-4 ${
                                // Example of adding custom classes based on index
                                index === 1 ? 'py-vh-4 pb-0' : index === 2 ? 'py-vh-6 pb-0' : ''
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 200} // Delays: 200, 400, 600 ms, etc.
                        >
                            <span className="h5 fw-lighter">{service.number}.</span>
                            <h3 className="py-5 border-top border-dark">
                                {service.name}
                            </h3>
                            <p>{service.description}</p>
                            <a href="#" className="link-fancy">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Services;

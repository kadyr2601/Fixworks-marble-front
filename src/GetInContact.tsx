import {useEffect, useState} from 'react';
import {GetInContactType} from "./types.ts";

const GetInContact = () => {

    const [obj, setObj] = useState<GetInContactType>();

    const Host = "https://fixworks-marble.com";

    useEffect(() => {
        fetch(`${Host}/api/v1/get-in-contact`)
            .then((response) => response.json())
            .then((data: GetInContactType) => setObj(data))
            .catch((error) => console.error('Error fetching GetInContact:', error));
    }, []);

    if (!obj) {
        return <div>Loading...</div>;
    }
    return (
        <div className="py-vh-6 bg-gray-900 text-light w-100 overflow-hidden" id="workwithus" >
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-8 text-center" data-aos="fade">
                            <p className="text-secondary lead">
                                {obj.title}
                            </p>
                            <h2 className="display-6 mb-5">
                                {obj.description}
                            </h2>
                        </div>
                        <div className="col-12">
                            <a
                                href="#contact"
                                className="btn btn-warning btn-xl shadow me-3 mt-4"
                                data-aos="fade-down"
                            >
                                Get in contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInContact;
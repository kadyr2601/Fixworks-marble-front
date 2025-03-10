import {useEffect, useState} from 'react';
import {WhatOurClientSayType} from "./types.ts";

const WhatOurClientSay = () => {

    const [obj, setObj] = useState<WhatOurClientSayType>();

    const Host = "http://213.109.202.246:8000";

    useEffect(() => {
        fetch(`${Host}/api/v1/what-our-clients-say`)
            .then((response) => response.json())
            .then((data: WhatOurClientSayType) => setObj(data))
            .catch((error) => console.error('Error fetching WhatOurClientsSay:', error));
    }, []);

    if (!obj) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-vh-4 w-100 overflow-hidden">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-5">
                    <h3 className="py-5 border-top border-dark" data-aos="fade-right">
                        What our clients say
                    </h3>
                </div>
                <div className="col-md-7" data-aos="fade-left">
                    <blockquote>
                        <div className="fs-4 my-3 fw-light pt-4 border-bottom pb-3">
                            {obj.review}
                        </div>
                        <img
                            src={Host + obj.image}
                            width="64"
                            height="64"
                            className="img-fluid rounded-circle me-3"
                            alt=""
                            data-aos="fade"
                        />
                        <span>
                  <span className="fw-bold">{obj.fullname}</span>
                            {obj.position}
                </span>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default WhatOurClientSay;
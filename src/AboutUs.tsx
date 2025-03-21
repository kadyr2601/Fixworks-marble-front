import { useEffect, useState } from 'react';

interface AboutUsData {
    id: number;
    image_big: string;
    image_small: string;
    title: string;
    description: string;
}

const AboutUs = () => {
    const [aboutData, setAboutData] = useState<AboutUsData | null>(null);

    const Host = "https://fixworks-marble.com";

    useEffect(() => {
        fetch(`${Host}/api/v1/about-us`)
            .then((response) => response.json())
            .then((data: AboutUsData) => setAboutData(data))
            .catch((error) => console.error('Error fetching about data:', error));
    }, []);

    if (!aboutData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="row gx-5 d-flex">
                            <div className="col-md-11">
                                <div
                                    className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
                                    data-aos="fade-right"
                                    style={{
                                        backgroundImage: `url(${Host}${aboutData.image_big})`,
                                    }}
                                ></div>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <div
                                    className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
                                    data-aos="fade-up"
                                    style={{
                                        backgroundImage: `url(${Host}${aboutData.image_small})`,
                                    }}
                                ></div>
                            </div>
                            {/*<div className="col-md-6">*/}
                            {/*    <div*/}
                            {/*        className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"*/}
                            {/*        data-aos="fade-left"*/}
                            {/*        style={{*/}
                            {/*            backgroundImage: `url(${Host}${aboutData.image_small})`,*/}
                            {/*        }}*/}
                            {/*    ></div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3
                            className="py-5 border-top border-dark"
                            data-aos="fade-left"
                        >
                            {aboutData.title}
                        </h3>
                        <p data-aos="fade-left" data-aos-delay="200">
                            {aboutData.description}
                        </p>
                        <p>
                            <a
                                href="#"
                                className="link-fancy link-dark"
                                data-aos="fade-left"
                                data-aos-delay="400"
                            >
                                Learn more
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

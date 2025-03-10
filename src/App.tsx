import { useEffect, useRef, useState } from "react";
import Services from "./Services.tsx";
import AboutUs from "./AboutUs.tsx";
import Activities from "./Activities.tsx";
import ProjectsGallery from "./ProjectsGallery.tsx";
import WhatOurClientSay from "./WhatOurClientSay.tsx";
import GetInContact from "./GetInContact.tsx";
import Reviews from "./Reviews.tsx";
import {PartnersType} from "./types.ts";
import ContactForm from "./ContactForm.tsx";
// import {RotatingLines} from "react-loader-spinner";


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  const [partners, setPartners] = useState<PartnersType[]>([]);

  const Host = "http://213.109.202.246:8000";

  useEffect(() => {
    fetch(`${Host}/api/v1/partners`)
        .then((response) => response.json())
        .then((data: PartnersType[]) => setPartners(data))
        .catch((error) => console.error('Error fetching Partners:', error));
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollPos = window.scrollY;
        const headerHeight = 90;

        setIsScrolled(scrollPos >= headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <nav ref={navbarRef} id="navScroll" className={`navbar navbar-expand-lg navbar-light fixed-top ${
          isScrolled ? "scrolled shadow-sm" : ""
        }`} tabIndex={0} >
        <div className="container">
          <a className="navbar-brand pe-4 fs-4" href="/">
            <h1 className="fw-bold">Fixworks</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  aria-label="Brings you to the frontpage"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#numbers">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#workwithus">
                  Work with us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
            </ul>
            <a
              href="https://fixworks-team.com"
              target="_blank"
              data-splitbee-event="Click Download"
              aria-label="Download this template"
              className="link-dark pb-1 link-fancy me-2"
            >
              Company Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download ms-1"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="w-100 overflow-hidden bg-gray-100" id="top">
          <div className="container position-relative">
            <div
              className="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover"
              data-aos="fade-left"
              style={{ backgroundImage: "url(img/webp/interior11.webp)" }}
            ></div>
            <div className="row">
              <div
                className="col-lg-7 py-vh-6 position-relative"
                data-aos="fade-right"
              >
                <h1 className="display-1 fw-bold mt-5">
                  Bringing Life Back to Your Furniture.
                </h1>
                <p className="lead">
                  Fixworks - specializes in breathing new life into cherished
                  furniture through expert renovation and restoration services.
                  We combine timeless craftsmanship with modern techniques to
                  transform every piece into a masterpiece.
                </p>
                <a
                  href="#contact"
                  className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*<div>*/}
        {/*  <RotatingLines*/}
        {/*      visible={true}*/}
        {/*      height="96"*/}
        {/*      width="96"*/}
        {/*      color="grey"*/}
        {/*      strokeWidth="5"*/}
        {/*      animationDuration="0.75"*/}
        {/*      ariaLabel="rotating-lines-loading"*/}
        {/*      wrapperStyle={{}}*/}
        {/*      wrapperClass=""*/}
        {/*  />*/}
        {/*</div>*/}


        <Services/>

        <AboutUs/>

        <Activities/>

        <ProjectsGallery/>

        <WhatOurClientSay/>

        <GetInContact/>

        <Reviews/>

        <div className="small py-vh-3 w-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 border-end" data-aos="fade-up">
                <div className="d-flex">
                  <div className="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      fill="currentColor"
                      className="bi bi-box-seam"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                  </div>
                  <div className="col-md-9 flex-fill">
                    <h3 className="h5 my-2">Restoration</h3>
                    <p>
                      Restoration is the process of repairing and restoring an
                      object to its original or desired condition. This can
                      include repairing damage, restoring missing parts, and
                      refinishing the surface.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 border-end"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="d-flex">
                  <div className="col-md-3 flex-fill pt-3 pt-3 pe-3 pe-md-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      fill="currentColor"
                      className="bi bi-card-checklist"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="col-md-9 flex-fill">
                    <h3 className="h5 my-2">Renovation</h3>
                    <p>
                      Renovation is the process of improving or updating an
                      existing space to make it more functional, modern, or
                      aesthetically pleasing. This can include updating
                      fixtures, installing new flooring, or changing the layout
                      of the space.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="d-flex">
                  <div className="col-md-3 flex-fill pt-3 pt-3 pe-3 pe-md-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      fill="currentColor"
                      className="bi bi-window-sidebar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                      <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
                    </svg>
                  </div>
                  <div className="col-md-9 flex-fill">
                    <h3 className="h5 my-2">Parket Flooring</h3>
                    <p>
                      It is the process of installing or replacing wooden
                      flooring in a space. This can include installing new
                      flooring, repairing existing flooring, or refinishing the
                      surface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm/>
      </main>

      <footer>
        <div className="container small border-top">
          <div className="row py-5 d-flex justify-content-between">
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <p className="text-secondary mt-3">
                <strong>Fixworks</strong>
                <br />
                Building 178, Street 7A
                <br />
                Discovery Gardens, Dubai
                <br />
                +971 4 123123
              </p>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <h3 className="h6 mb-3">Partners</h3>
              <ul className="nav flex-column">
                {partners.map((partner) => (
                    <li className="nav-item" key={partner.id}>
                      <a className="nav-link link-secondary ps-0" href="#">
                        {partner.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <h3 className="h6 mb-3">Projects</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Royal Atlantis Hotel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Arabian Boutique Hotel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    JW Marriott Hotel Marina
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Rixos The Palm Hotel & Suites
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Park Hyatt Dubai
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 p-5">
              <h3 className="h6 mb-3">Services</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Renovation
                  </a>
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Restoration
                  </a>
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Parket Flooring
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container text-center py-3 small">
          All rights reserved. Fixworks 2024
        </div>
      </footer>
    </div>
  );
}

export default App;

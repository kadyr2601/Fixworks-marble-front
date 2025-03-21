import { useEffect, useState } from 'react';
import { ProjectsGalleryType } from './types';

const ProjectsGallery = () => {
    const [projects, setProjects] = useState<ProjectsGalleryType[]>([]);
    const Host = "https://fixworks-marble.com";

    // Array of column classes that mimics the static layout
    const colClasses = ['col-md-2', 'col-md-2', 'col-md-3', 'col-md-3', 'col-md-2'];

    const dimensions = [
        { width: 512, height: 341 },
        { width: 1164, height: 776 },
        { width: 844, height: 1054 },
        { width: 844, height: 562 },
        { width: 512, height: 341 },
    ];


    useEffect(() => {
        fetch(`${Host}/api/v1/projects`)
            .then((response) => response.json())
            .then((data: ProjectsGalleryType[]) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="position-relative overflow-hidden w-100 bg-light" id="gallery">
            <div className="container-fluid">
                <div className="row overflow-scroll">
                    <div className="col-12">
                        <div className="row vw-100 px-0 py-vh-5 d-flex align-items-center scrollx">
                            {projects.map((project, index) => {
                                const colClass = colClasses[index % colClasses.length];
                                const dimension = dimensions[index % dimensions.length];

                                return (
                                    <div
                                        key={project.id || index}
                                        className={colClass}
                                        data-aos="fade-up"
                                        data-aos-delay={`${index * 200}`}
                                    >
                                        <img
                                            src={Host + project.image}
                                            className="img-fluid rounded shadow"
                                            alt={project.name}
                                            width={dimension.width}
                                            height={dimension.height}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsGallery;

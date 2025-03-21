import { useEffect, useState } from 'react';
import { ReviewsType } from "./types.ts";

const Reviews = () => {
    const [reviews, setReviews] = useState<ReviewsType[]>([]);
    const Host = "https://fixworks-marble.com";

    useEffect(() => {
        fetch(`${Host}/api/v1/reviews`)
            .then((response) => response.json())
            .then((data: ReviewsType[]) => setReviews(data))
            .catch((error) => console.error('Error fetching Reviews:', error));
    }, []);

    const renderStars = (rating: number): JSX.Element[] => {
        const safeRating = Math.max(0, Math.min(rating, 5));
        const fullStars = Math.floor(safeRating);

        const stars: JSX.Element[] = [];

        // Полные звёзды
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg
                    key={`full-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            );
        }

        return stars;
    };


    const aosAnimations = ['fade-right', 'fade-down', 'fade-left', 'fade-up'];

    return (
        <div className="bg-light w-100 overflow-hidden" id="testimonials">
            <div className="container py-vh-6">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8 text-center">
                        <h2 className="display-6">
                            Do you have a restoration or renovation request?
                        </h2>
                        <p className="lead">
                            Our team is here to help bring your vision to life! Whether it's
                            furniture, parquet, or any other restoration and renovation project,
                            we’re ready to provide exceptional craftsmanship and tailored solutions.
                        </p>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row row-cols-1 row-cols-md-2 g-5 d-flex align-items-center">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className="col-12 col-lg-6 col-xl-4"
                                    data-aos={aosAnimations[index % aosAnimations.length]}
                                >
                                    <div className="card p-4 mt-3 border-0">
                                        <div className="card-body">
                                            <div className="text-dark py-2 fs-3">
                                                {renderStars(review.stars)}
                                            </div>
                                            <blockquote className="blockquote">
                                                <p>"{review.review}"</p>
                                            </blockquote>
                                            <div className="d-flex justify-content-between border-top pt-3">
                                                <div>
                                                    <span className="h6 fw-5">{review.fullname}</span>
                                                    <br />
                                                    <small className="text-muted">{review.position}</small>
                                                </div>
                                                <img
                                                    src={Host + review.image}
                                                    width="48"
                                                    height="48"
                                                    className="rounded-circle"
                                                    alt={review.fullname}
                                                    data-aos="fade"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

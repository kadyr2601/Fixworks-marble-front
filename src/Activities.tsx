import { useEffect, useState } from 'react';

interface SubActivity {
    id: number;
    subTitle: string;
    description: string;
    activity: number;
}

interface ActivityData {
    id: number;
    sub_activities: SubActivity[];
    title: string;
}

const Activities = () => {
    const [activityData, setActivityData] = useState<ActivityData | null>(null);

    const Host = "https://fixworks-marble.com/api/v1";

    useEffect(() => {
        fetch(`${Host}/activities`)
            .then((response) => response.json())
            .then((data: ActivityData) => setActivityData(data))
            .catch((error) => console.error('Error fetching activity data:', error));
    }, []);

    if (!activityData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-vh-5 w-100 overflow-hidden" id="numbers">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <h3 className="py-5 border-top border-dark" data-aos="fade-right">
                            Activity Analysis
                        </h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="display-6 mb-5" data-aos="fade-down">
                                    {activityData.title}
                                </h2>
                            </div>
                            {activityData.sub_activities.map((sub) => (
                                <div key={sub.id} className="col-lg-6" data-aos="fade-up">
                                    <div className="display-1 fw-bold py-4">{sub.subTitle}</div>
                                    <p className="text-black-50">
                                        {sub.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;

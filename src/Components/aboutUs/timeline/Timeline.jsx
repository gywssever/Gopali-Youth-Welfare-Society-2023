import './Timeline.css';
import HCard from '../../HeaderCard/HCard';
const TimelineData = [
    {
        established: "Established",
        establishedDescription: "Established in 2002 with a mission to improve the living standards of the people of Gopali like villages.",
        establishedYear: "2002",
        backgroundColor: "#f26a36"
    },
    {
        established: "Registered",
        establishedDescription: "Registered under the West Bengal Societies Registration Act of 1961.",
        establishedYear: "2004",
        backgroundColor: "#73c48f"
    },
    {
        established: "Stepped into Education",
        establishedDescription: "Embarked in an education program Jagriti Vidya Mandir in a rented building, focused upon providing quality education.",
        establishedYear: "2008",
        backgroundColor: "#fed136"
    },
    {
        established: "JVM Foundation",
        establishedDescription: "2 acres of land was purchased, and the foundation of Jagriti Vidya Mandir was laid.",
        establishedYear: "2012",
        backgroundColor: "#685e91"
    },
    {
        established: "LiGHT",
        establishedDescription: "GYWS came up with the initiative named LiGHT to reach masses all over India, to reciprocate similar models of social upliftment throughout the nation.",
        establishedYear: "2017",
        backgroundColor: "#04a3c3"
    },
    {
        established: "PRAYAS",
        establishedDescription: "Started PRAYAS, Business Development Initiative, to work on Rural Entrepreneurship Development and Social Enterprises to help transform lives.",
        establishedYear: "2018",
        backgroundColor: "#f26a36"
    },
    {
        established: "Hostel Construction",
        establishedDescription: "Hostel Construction to provide learning environment to deprived children, begin in Jagriti Vidya Mandir.",
        establishedYear: "2020",
        backgroundColor: "#fed136"
    }
]

const TimelineCard = (content) => {
    return (
        <>
            <div className="timeline ">
                <div className="timeline-content">
                    <h3 className="title" style={{ backgroundColor: content.backgroundColor }}> {content.established} </h3>
                    <p className="description">
                        {content.establishedDescription}
                    </p>
                    <div className="timeline-year">{content.establishedYear}</div>
                </div>
            </div>
        </>
    )
}

export default function Timeline() {
    return (
        <>
            <div className="timeline-container">
                <div className='timeline-heading'>
                    <HCard head={"OUR STORY"}></HCard> <br />
                </div>
                <div className=" p-0 my-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                {TimelineData.map((data, key) => {
                                    return <TimelineCard {...data} key={key} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; 
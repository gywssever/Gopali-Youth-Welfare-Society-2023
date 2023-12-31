import './JVM.css';

const surveyData = [
    {
        number: 25,
        info: "Teacher training sessions conducted",
    },
    {
        number: 410,
        info: "students",
    },
    {
        number: 10,
        info: "students rescued from child labour",
    },
    {
        number: 100,
        info: "People attend the computer workshop",
    },
    {
        number: 25,
        info: "cycles donated",
    },
    {
        number: 110,
        info: "women attended the tailoring workshop",
    },
    {
        number: 1000,
        info: "potential blood donors database",
    },
    {
        number: 11,
        info: "centers",
    },
]

const eventsData = [
    {
        name: "Aashayien",
        imgPath: "./images/aashayein.jpeg",
    },
    {
        name: 'Sports Day',
        imgPath: "./images/sportsday.jpeg",
    },
    {
        name: "Republic Day",
        imgPath: "./images/republicday.jpeg",
    },
    {
        name: "KTJ Visit",
        imgPath: "./images/ktjvisit.jpeg",
    },
]

const EventCard = ({ name, imgPath }) => {
    return (
        <>
            <div className="gallery">
                <div className="jvm-event-img">
                    <img src={imgPath} alt="Event Img" />
                </div>
                <div className="jvm-event-name">{name}</div>
            </div>
        </>
    )
}
    

const SurveyStatsCard = ({ number, info }) => {
    return (
        <>
            <div class="stats">
                <h1>{number}</h1>
                <p>{info}</p>
            </div>
        </>
    )
}


export default function JVM() {
    return (
        <>
            <header>
                <div class="jvm-header-content">
                    <h2>
                        <span>G</span>opali <span>Y</span>outh <span>W</span>elfare
                        <span>S</span>ociety
                    </h2>
                    <h1><span>J</span>agriti <span>V</span>idya <span>M</span>andir</h1>
                </div>
            </header>

            <section>
                <div class="jvm-details">
                    <div class="jvm-title">
                        <h1>JVM</h1>
                    </div>

                    <div class="jvm-section-content">
                        <div class="jvm-section-content-1">
                            <img src="school_logo-removebg-preview.png" alt="not found" />
                            <p>
                                JVM was established in April, 2008. It's Initiative of Gopali
                                Youth Walefare Society. Its Main motto is To educate each and
                                every child for a better tommorow .
                            </p>
                        </div>
                        <div class="jvm-section-content-2">
                            <div class="jvm_details2">
                                <img src="child_logo-removebg-preview.png" alt="not found" />
                                <p>
                                    It is located in Tangasool village, 1.5 kilometers from Salua
                                    Air Force Station which in turn is 5 kilometers away from IIT
                                    campus.
                                </p>
                            </div>
                        </div>
                        <div class="jvm-section-content-3">
                            <img src="teachers_logo-removebg-preview.png" alt="not found" />
                            <p>
                                At present, school is up to 5th standard and 240+ students are
                                enrolled from nursery to 5th standard and 11+ teachers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="jvm-lecture">
                <div class="jvm-heading">
                    <h2>Future Plan</h2>
                </div>

                <div class="lecture-container">
                    <div class="jvm-lecture-content">
                        <div class="lecture-img">
                            <img src="futureplan.png" alt="#" />
                        </div>

                        <div class="lecture0_C">
                            <p>
                                JVM aspires to be a residential full-fledged school for students
                                of under privileged families offering a variety of courses at +2
                                level, vocational training and career guidance. We seek to take
                                Jagriti Vidya Mandir to beyond its current primary level to
                                complete school cum hostel Catering to the needs of over 500
                                students. The facility will not only provide education up to 12th
                                grade, but will also take responsibility for ensuring that its
                                students settle in their professional or educational lives before
                                they leave.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="Event_detail">
                <div class="event_detail_heading">
                    <h1>Events</h1>
                </div>
                <div class="eventgallery">
                    {
                        eventsData.map((item) => {
                            return (
                                <EventCard name={item.name} imgPath={item.imgPath} />
                            )
                        })
                    }
                </div>
            </div>


            <div class="Survey">
                <h1>Survey Stats</h1>
                <div class="Surveystats">
                    {
                        surveyData.map((item) => {
                            return (
                                <SurveyStatsCard number={item.number} info={item.info} />
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
};
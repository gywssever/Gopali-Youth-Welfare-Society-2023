import "./JVM.css";
import bgImg from "./bgImg.jpg";
import LiGHTImg from "./LiGHT-img.png";

const jvmData = [
  {
    imgPath: "./images/school_logo-removebg-preview.png",
    content:
      "JVM was established in April, 2008. It's Initiative of Gopali Youth Walefare Society. Its Main motto is To educate each and every child for a better tommorow .",
  },
  {
    imgPath: "./images/child_logo-removebg-preview.png",
    content:
      "It is located in Tangasool village, 1.5 kilometers from Salua Air Force Station which in turn is 5 kilometers away from IIT campus.",
  },
  {
    imgPath: "./images/teachers_logo-removebg-preview.png",
    content:
      "At present, school is up to 5th standard and 240+ students are enrolled from nursery to 5th standard and 11+ teachers.",
  },
];

const eventsData = [
  {
    name: "Aashayien",
    imgPath: "./images/aashayein.jpeg",
  },
  {
    name: "Sports Day",
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
];

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
];

const JVMCard = ({ imgPath, content }) => {
  return (
    <>
      <div class="jvm-section-content-card">
        <img src={imgPath} alt="not found" />
        <p>{content}</p>
      </div>
    </>
  );
};

const EventCard = ({ name, imgPath }) => {
  return (
    <>
      <div className="event-gallery-card">
        <div className="event-gallery-card-img">
          <img src={imgPath} alt="Event Img" />
        </div>
        <p>{name}</p>
      </div>
    </>
  );
};

const SurveyStatsCard = ({ number, info }) => {
  return (
    <>
      <div class="stats">
        <h2>{number}</h2>
        <p>{info}</p>
      </div>
    </>
  );
};

export default function JVM() {
  document.title = "JVM | GYWS";

  return (
    <>
      <div className="jvm-container">
        <div class="jvm-header">
          <div className="bgImg">
            <img src={bgImg} alt="" />
          </div>
          <div className="jvm-header-content">
            <h2> Jagriti Vidya Mandir</h2>
            <h2>Gopali Youth Welfare Society </h2>
          </div>
        </div>

        <div class="jvm-details">
          <div class="jvm-title">
            <h2>JVM</h2>
            <div className="heading-underline"></div>
          </div>

          <div class="jvm-section-content">
            {jvmData.map((item) => {
              return (
                <JVMCard
                  title={item.title}
                  imgPath={item.imgPath}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>

        {/* LiGHT */}

        <div class="LiGHT">
          <div class="LiGHT-title">
            <h2>LiGHT</h2>
            <div className="heading-underline"></div>
          </div>

          <div class="lecture-container">
            <div class="lecture-content">
              <div>
                JVM aspires to be a residential full-fledged school for students
                of under privileged families offering a variety of courses at +2
                level, vocational training and career guidance. We seek to take
                Jagriti Vidya Mandir to beyond its current primary level to
                complete school cum hostel Catering to the needs of over 500
                students. The facility will not only provide education up to
                12th grade, but will also take responsibility for ensuring that
                its students settle in their professional or educational lives
                before they leave.
              </div>
              <div class="LiGHT-button">
               
             
                <a href="https://light.gyws.org/index.php" class="button">Visit Page</a>



              </div>
            </div>

            <div class="lecture-img">
              <img src={LiGHTImg} alt="#" />
            </div>
          </div>
        </div>

        <div class="jvm-lecture">
          <div class="jvm-title">
            <h2>Future Plan</h2>
            <div className="heading-underline"></div>
          </div>

          <div class="lecture-container">
            <div class="lecture-img">
              <img src="./images/futureplan.png" alt="#" />
            </div>

            <div class="lecture-content">
              JVM aspires to be a residential full-fledged school for students
              of under privileged families offering a variety of courses at +2
              level, vocational training and career guidance. We seek to take
              Jagriti Vidya Mandir to beyond its current primary level to
              complete school cum hostel Catering to the needs of over 500
              students. The facility will not only provide education up to 12th
              grade, but will also take responsibility for ensuring that its
              students settle in their professional or educational lives before
              they leave.
            </div>
          </div>
        </div>

        <div class="event-details">
          <div class="jvm-title">
            <h2>Events</h2>
            <div className="heading-underline"></div>
          </div>

          <div class="event-gallery">
            {eventsData.map((item) => {
              return <EventCard name={item.name} imgPath={item.imgPath} />;
            })}
          </div>
        </div>

        <div class="jvm-survey">
          <div class="jvm-title">
            <h2>Survey Stats</h2>
            <div className="heading-underline"></div>
          </div>

          <div class="survey-stats">
            {surveyData.map((item) => {
              return <SurveyStatsCard number={item.number} info={item.info} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

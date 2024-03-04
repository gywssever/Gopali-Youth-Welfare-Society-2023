import './HowWeStarted.css';
import HCard from '../../HeaderCard/HCard';
const HowWeStarted = () => {
  return (
    <div className="how-we-started-container">
      <div className="how-we-started-heading">
        <HCard head={"HOW WE STARTED"} ></HCard>
      </div>
      <div className="how-we-started-about">
        <div className="how-we-started-text">
          <div className='texts'>
            <b>Mr. Mrinal Kanti Bhanja</b> , or Dada as we call him , in his early twenties had the vision to give back to society by <b>helping in uplifting the less fortunate</b> . When he came across a few<b> IITians who wanted to volunteer for a good cause</b> but lacked the right platform- <b>Gopali Youth Welfare Society</b> came into being.
          </div>
          <div className='texts' >
            Together, the Young Samaritans along with some Professors of IIT Kharagpur set on this journey and through the years GYWS has not just been instrumental in providing primary education to children at JVM, but has also undertaken different social initiatives to uplift the society! In Dada's own words <b>“GYWS is aiding social, economic and cultural development of weaker sections of society while encouraging people to seek solutions to their everyday problems within locally available resources!”</b>
          </div>
        </div>
        <div className="how-we-started-img">
          <img src="./images/childimage.jpeg" alt="Child" />
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;
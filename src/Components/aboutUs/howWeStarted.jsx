import React from 'react';
import './HowWeStarted.css';
import Child from './Images/childimage.jpeg'
const HowWeStarted = () => {
  return (
    <div className="how-we-started-container">
      <div className="how-we-started-text">
        <h2>HOW WE STARTED</h2>
        <p className='para1'><b>Mr. Mrinal Kanti Bhanja</b> , or Dada as <b>we call him</b> , in his early twenties had the vision to give back to society by <b>helping in uplifting the less fortunate</b> . When he came across a few<b> IITians who wanted to volunteer for a good cause</b> but lacked the right platform- <b>Gopali Youth Welfare Society</b> came into being.
        </p>
        <p>Together, the Young Samaritans along with some Professors of IIT Kharagpur set on this journey and through the years GYWS has not just been instrumental in providing primary education to children at JVM, but has also undertaken different social initiatives to uplift the society! In Dada's own words <b>“ GYWS is aiding social, economic and cultural development of weaker sections of society while encouraging people to seek solutions to their everyday problems within locally available resources!”</b></p>
      </div>
      <img src={Child} alt="Child" className="how-we-started-image" />
    </div>
  );
};

export default HowWeStarted;
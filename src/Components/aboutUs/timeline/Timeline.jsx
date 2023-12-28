import './Timeline.css';
import { Link } from 'react-router-dom';

export default function Timeline() {
    return (
        <>
            <div class="contain">
                <div>
                    <center className='.heading'>
                        <h1 >OUR STORY</h1>
                        <div ></div>
                    </center>
                </div>
                <div class=" p-0 my-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-timeline">
                                <div class="timeline ">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#f26a36" }}>Established</h3>
                                        <p class="description"><strong>
                                            Established in 2002 with a mission to improve the living
                                            standards of the people of Gopali like villages.</strong>
                                        </p>
                                        <div class="timeline-year">2002</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#73c48f" }}>Registered</h3>
                                        <p class="description"><b>
                                            Registered under the West Bengal Societies Registration Act
                                            of 1961.</b>
                                        </p>
                                        <div class="timeline-year">2004</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#fed136" }}>Stepped into
                                            Education</h3>
                                        <p class="description"><b>
                                            Embarked in an education program Jagriti Vidya Mandir in a
                                            rented building, focused upon providing quality education.</b>
                                        </p>
                                        <div class="timeline-year">2008</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#685e91" }}>JVM
                                            Foundation</h3>
                                        <p class="description"><b>
                                            2 acres of land was purchased, and the foundation of
                                            Jagriti Vidya Mandir was laid.</b>
                                        </p>
                                        <div class="timeline-year">2012</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#04a3c3" }}>LiGHT</h3>
                                        <p class="description"><b>
                                            GYWS came up with the initiative
                                            named LiGHT to reach masses all over India, to reciprocate similar models of social upliftment
                                            throughout the nation.</b>
                                        </p>
                                        <div class="timeline-year">2017</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#f26a36" }}>PRAYAS</h3>
                                        <p class="description"><b>
                                            Started PRAYAS, Business Development Initiative, to work on
                                            Rural Entrepreneurship Development and Social Enterprises to help transform lives.</b>
                                        </p>
                                        <div class="timeline-year">2018</div>
                                    </Link>
                                </div>
                                <div class="timeline">
                                    <Link to="/about" class="timeline-content">
                                        <h3 class="title" style={{ backgroundColor: "#fed136" }}>Hostel
                                            Construction</h3>
                                        <p class="description"><b>
                                            Hostel Construction to provide learning environment to
                                            deprived children, begin in Jagriti Vidya Mandir.</b>
                                        </p>
                                        <div class="timeline-year">2020</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}; 
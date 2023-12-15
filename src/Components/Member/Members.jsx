import './Member.css'
import Member2223 from './Member2022-23/members2223'
import Member2324 from './Member2023-24/members2324'
import Advisory  from './Advisory/Advisory.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import Jvm from './JVM/jvm.jsx'
import Rise from './JVM/rise/rise.jsx'
import Light from './JVM/light/light.jsx'
function Members() {
    document.title = "Members | GYWS";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    

    return (
        <>
            <div class="wrapper">
                <div class="sidebar">

                    <h2>Members</h2>
                    <ul>
                        <Link to="/member" >
                            <li onClick={scrollToTop}>
                                Governing Body 2023-24
                            </li>
                        </Link>
                        <Link to="/member/Member2223">
                            <li onClick={scrollToTop}>
                                Governing Body 2022-23
                            </li>
                        </Link>
                        <Link to="/member/Advisory">
                            <li onClick={scrollToTop}>
                                Advisory Committee
                            </li>
                        </Link>
                    </ul>
                    <h2>Heads</h2>
                    <ul>
                        <Link to="/member/jvm">
                            <li onClick={scrollToTop}>
                                Jagriti Vidya Mandir <br />
                                Education Initiative
                            </li>
                        </Link>
                        <Link to="/member/Rise">
                            <li onClick={scrollToTop}>
                                RISE <br />
                                Reform and Innovate School Education
                            </li>
                        </Link>
                        <Link to="/member/LiGHT">
                            <li onClick={scrollToTop}>
                                LiGHT <br />
                                Expansion Initiative
                            </li>
                        </Link>

                    </ul>
                </div>
                <div class="main_content">
                    <Routes>
                        <Route exact path="/" element={<Member2324 key={1} />} />
                        <Route exact path="/Member2223" element={<Member2223 key={3} />} />
                        <Route exact path="/Advisory" element={<Advisory key={4} />} />
                        <Route exact path="/jvm" element={<Jvm key={5} />} />
                        <Route exact path="/Rise" element={<Rise key={6} />} />
                        <Route exact path="/LiGHT" element={<Light key={7} />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Members
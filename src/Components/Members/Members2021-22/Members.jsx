import Advisory from './Advisory/Advisory.jsx';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Jvm from './JVM/jvm.jsx';

import Light from './JVM/light/light.jsx';
import './Members.css'; // Add your CSS file for styling
import GB from './GB/GB.jsx'
import Prayas from './JVM/prayas/prayas.jsx'
function Members() {
    document.title = "Members | GYWS";

    const scrollToTop = () => {
        const mainContent = document.querySelector('.main_content');
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isCollapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!isCollapsed);
    };
    
    return (
        <>
            <div className="wrapper">
                <div className="hamburgerbtn">
                    <div className="hamburger" onClick={toggleSidebar}>
                       <a href="#top">&#9776;</a>
                    </div>
                </div>
                <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="everything">

                        <h2>Members</h2>
                        <ul>
                            <li className="dropdown">
                                <Link>
                                    Sessions
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/member/" onClick={scrollToTop}>
                                            Session 2023-24
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/member/members2021-22" onClick={scrollToTop}>
                                            Session 2021-22
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/member/members2020-21" onClick={scrollToTop}>
                                            Session 2020-21
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/member/members2019-20" onClick={scrollToTop}>
                                            Session 2019-20
                                        </Link>
                                    </li>
                                    {/* Add more items as needed */}
                                </ul>
                            </li>
                            <Link to="/member/members2021-22/" onClick={scrollToTop}>
                                <li>
                                    Governing Body 2021-22
                                </li>
                            </Link>
                            <Link to="/member/members2021-22/Advisory" onClick={scrollToTop}>
                                <li>
                                    Advisory Committee
                                </li>
                            </Link>


                            {/* New li with dropdown */}
                        </ul>

                        <h2><span>Intiatives</span></h2>
                        <div className="jack">

                            <ul>
                                <Link to="/member/members2021-22/jvm" onClick={scrollToTop}>
                                    <li>
                                        Jagriti Vidya Mandir <br />
                                        Education Initiative
                                    </li>
                                </Link>
                                <Link to="/member/members2021-22/prayas" onClick={scrollToTop}>
                                    <li>
                                        PRAYAS <br /> Business Development Intiative
                                    </li>
                                </Link>
                                <Link to="/member/members2021-22/LiGHT" onClick={scrollToTop}>
                                    <li>
                                        LiGHT <br />
                                        Expansion Initiative
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_content">
                    <Routes>
                        <Route exact path="/" element={<GB key={1} />} />
                        <Route exact path="/Advisory" element={<Advisory key={4} />} />
                        <Route exact path="/jvm" element={<Jvm key={5} />} />
                        <Route exact path="/prayas" element={<Prayas key={3} />} />

                        <Route exact path="/LiGHT" element={<Light key={7} />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Members;

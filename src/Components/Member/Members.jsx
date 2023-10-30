import './Member.css'
import Member2223 from './Member2022-23/members2223'
import Member2324 from './Member2023-24/members2324'
import { Routes, Route, Link } from 'react-router-dom'

function Members() {
    document.title = "Members | GYWS"

    return (
        <>
            <div class="wrapper">
                <div class="sidebar">
                    <h2>Members</h2>
                    <ul>
                        <Link to="/member">
                            <li>
                                Governing Body 2023-24
                            </li>
                        </Link>
                        <Link to="/member/Member2223">
                            <li>
                                Governing Body 2022-23
                            </li>
                        </Link>
                        <Link to="/member">
                            <li>
                                Advisory Committee
                            </li>
                        </Link>
                    </ul>
                    <h2>Heads</h2>
                    <ul>
                        <Link to="/member">
                            <li>
                                Jagriti Vidya Mandir <br />
                                Education Initiative
                            </li>
                        </Link>
                        <Link to="/member">
                            <li>
                                RISE <br />
                                Reform and Innovate School Education
                            </li>
                        </Link>
                        <Link to="/member">
                            <li>
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
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Members
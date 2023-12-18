import Advisory from './Advisory/Advisory.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import GB from './GB/GB.jsx'
import './Members.css'; // Add your CSS file for styling

function Members() {
    document.title = "Members | GYWS";

    const scrollToTop = () => {
        const mainContent = document.querySelector('.main_content');
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="sidebar1">
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
                                    <Link to="/member/members2022-23" onClick={scrollToTop}>
                                        Session 2022-23                                    
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
                                {/* Add more items as needed */}
                            </ul>
                        </li>
                        <Link to="/member/members2019-20/" onClick={scrollToTop}>
                            <li>
                                Governing Body 2019-20
                            </li>
                        </Link>
                        <Link to="/member/members2019-20/Advisory" onClick={scrollToTop}>
                            <li>
                                Advisory Committee
                            </li>
                        </Link>

                        
                        {/* New li with dropdown */}
                    </ul>

                    
                </div>
                <div className="main_content">
                    <Routes>
                        
                        <Route exact path="/" element={<GB key={4} />} />
                        <Route exact path="/Advisory" element={<Advisory key={4} />} />
                       
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Members;

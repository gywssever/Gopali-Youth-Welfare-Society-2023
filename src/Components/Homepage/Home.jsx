import MissionVision from './mission_vision/MissionVision';
import Intiative from './intiatives/Intiative';
import Slider from './slider/Slider';
import GuestPage from './GuestPage/Guest'


function Home() {
    document.title = "GYWS - Home";


    return (
        <>
            <Slider />
            <MissionVision />
            <Intiative />
            <GuestPage/>
        </>
    )G
}

export default Home;
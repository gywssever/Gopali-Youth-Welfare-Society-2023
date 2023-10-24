import MissionVision from './mission_vision/MissionVision';
import Intiative from './intiatives/Intiative';
import Slider from './slider/Slider';
import GuestPage from './GuestPage/Guest'
import Impact from './impact/Impact'


function Home() {
    document.title = "Home | GYWS"


    return (
        <>
            <Slider />
            <MissionVision />
            <Intiative />
            <Impact/>
            <GuestPage/>
        </>
    )
}

export default Home;
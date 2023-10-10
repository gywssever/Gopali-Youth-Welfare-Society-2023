import MissionVision from './mission_vision/MissionVision';
import Intiative from './intiatives/Intiative';
import Slider from './slider/Slider';

function Home() {
    document.title = "GYWS - Home";


    return (
        <>
            <Slider />
            <MissionVision />
            <Intiative />
        </>
    )
}

export default Home;
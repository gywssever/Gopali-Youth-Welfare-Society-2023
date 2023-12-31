
import Timeline from './timeline/Timeline';
import Accordion from './accordion/Accordion';
import HowWeStarted from './howWeStarted';
import Foundersmsg from './Foundersmsg';
export default function about() {
    return (
        <>  <HowWeStarted/>
            <Timeline />
            <Foundersmsg/>
            <Accordion />
        </>
    );
};
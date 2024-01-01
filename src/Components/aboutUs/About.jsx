
import Timeline from './timeline/Timeline';
import Accordion from './accordion/Accordion';
import HowWeStarted from './howWeStarted';
import Foundersmsg from './Foundersmsg';

export default function about() {

    document.title = "About Us | GYWS";

    return (
        <>
            <HowWeStarted />
            <Timeline />
            <Foundersmsg />
            <Accordion />
        </>
    );
};
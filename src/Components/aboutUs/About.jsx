
import Timeline from './timeline/Timeline';
import Accordion from './accordion/Accordion';
import HowWeStarted from './howWeStarted';
import Foundersmsg from './Foundersmsg';
import { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Us | GYWS";

    }, [])

    return (
        <>
            <HowWeStarted />
            <Timeline />
            <Foundersmsg />
            <Accordion />
        </>
    );
};
import { PlusCircle } from 'react-bootstrap-icons';
import './Accordion.css';

const faqData = [
    {
        title: 'How long does the course take?',
        content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
    },
    {
        title: 'How long does the course take?',
        content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
    },
    {
        title: 'How long does the course take?',
        content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
    },
    {
        title: 'How long does the course take?',
        content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
    },
    {
        title: 'How long does the course take?',
        content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
    },
];

const AccordionCard = ({ title, content }) => {
    return (
        <details>
            <summary>
                <span className="faq-title">{title}</span>
                <PlusCircle className='icon ' />
            </summary>
            <div className="faq-content">
                {content}
            </div>
        </details>
    );
}

export default function Accordion() {

    

    return (
        <>
            <section className="faq-container" aria-label="Frequently Asked Questions">
                <div className="faq-heading">
                    <h1>Frequently Asked Questions </h1>
                    <div className="heading-underline"></div>
                </div>
                {
                    faqData.map((faq, i) => (
                        <AccordionCard key={i} title={faq.title} content={faq.content} />
                    ))
                }
            </section>

        </>
    );
};
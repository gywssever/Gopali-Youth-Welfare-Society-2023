import { DashCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import './Accordion.css';

import { useState } from 'react';

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, index, expandedIndex, setExpandedIndex }) => {
  const isOpen = index === expandedIndex;

  const handleClick = () => {
    setExpandedIndex(isOpen ? -1 : index);
  };

  return (
    <div className="accordion-item" >
      <div className="accordion-header" onClick={handleClick} >
        <div className='accordion-header-question'>{question}</div>
        <div className={`accordion-header-icon`}> {isOpen ?  <DashCircleFill /> : <PlusCircleFill />} </div>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

// FAQ Accordion Container Component
const FAQAccordionContainer = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <FAQAccordion
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
    </div>
  );
};

// Example Usage
const FAQs = [
  {
    question: 'How can I contact GYWS to donate or for related information?',
    answer: 'You can reach out to us by email: gywsociety@gmail.com or call us at: 03222296537.',
  },
  {
    question: 'Why is the society named \'Gopali\' Youth Welfare Society?',
    answer: 'The NGO took shape to uplift the youth from the village of Gopali, located close to IIT Kharagpur campus. Our Founder- Mr. Mrinal Kanti Bhanja, a localite sowed the seeds of GYWS for the welfare of the people of Gopali along with some socially motivated students from IIT-KGP, back in 2002.',
  },
  {
    question: 'Is the website safe to make online payments?',
    answer: 'Yes, the website is safe for all kinds of transaction. Also, any information exchange is safe and secure and under no circumstances shall be disclosed.',
  },
];

const Accordian = () => {
  return (
    <div className='about-accordion-container'>
      <h1 >FAQ's</h1>
      <div className='heading-underline' ></div>
      <FAQAccordionContainer faqs={FAQs} />
    </div>
  );
};

export default Accordian;

import { PlusCircleFill } from 'react-bootstrap-icons';
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
        <div className={`accordion-header-icon ${isOpen ? 'open' : ''}`}> <PlusCircleFill /> </div>
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
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React by using npm or yarn.',
  },
  {
    question: 'What are the features of React?',
    answer: 'React provides features like virtual DOM, component-based architecture, etc.',
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

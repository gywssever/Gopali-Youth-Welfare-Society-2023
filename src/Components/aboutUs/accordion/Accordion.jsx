// import { PlusCircle } from 'react-bootstrap-icons';
// import './Accordion.css';

// const faqData = [
//     {
//         title: 'How long does the course take?',
//         content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
//     },
//     {
//         title: 'How long does the course take?',
//         content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
//     },
//     {
//         title: 'How long does the course take?',
//         content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
//     },
//     {
//         title: 'How long does the course take?',
//         content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
//     },
//     {
//         title: 'How long does the course take?',
//         content: 'The course is designed to be self-paced, but typically takes about 5 hours to complete.'
//     },
// ];

// const AccordionCard = ({ title, content }) => {
//     return (
//         <details>
//             <summary>
//                 <span className="faq-title">{title}</span>
//                 <PlusCircle className='icon ' />
//             </summary>
//             <div className="faq-content">
//                 {content}
//             </div>
//         </details>
//     );
// }

// export default function Accordion() {

    

//     return (
//         <>
//             <section className="faq-container" aria-label="Frequently Asked Questions">
//                 <div className="faq-heading">
//                     <h1>Frequently Asked Questions </h1>
//                     <div className="heading-underline"></div>
//                 </div>
//                 {
//                     faqData.map((faq, i) => (
//                         <AccordionCard key={i} title={faq.title} content={faq.content} />
//                     ))
//                 }
//             </section>

//         </>
//     );
// };

import React, { useState } from 'react';

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, index, expandedIndex, setExpandedIndex }) => {
  const isOpen = index === expandedIndex;

  const handleClick = () => {
    setExpandedIndex(isOpen ? -1 : index);
  };

  return (
    <div className="accordion-item" style={{ margin: 'auto', width: '600px'}}>
      <div className="accordion-header" onClick={handleClick} style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>{question}</div>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>+</div>
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
    <div>
      <h1>FAQs</h1>
      <FAQAccordionContainer faqs={FAQs} />
    </div>
  );
};

export default Accordian;

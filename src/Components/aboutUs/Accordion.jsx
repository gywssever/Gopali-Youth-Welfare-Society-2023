import './Accordion.css';

export default function ComponentName() {
    // function toggleIcon(expandIconPlus, expandIconMinus, isOpen) {
    //     if (isOpen) {
    //         expandIconPlus.style.display = 'none';
    //         expandIconMinus.style.display = 'block';
    //     } else {
    //         expandIconPlus.style.display = 'block';
    //         expandIconMinus.style.display = 'none';
    //     }
    // }
    
    // function createAccordion(el) {
    //     let animation = null;
    //     let isClosing = false;
    //     let isExpanding = false;
    //     const summary = el.querySelector('summary');
    //     const content = el.querySelector('.faq-content');
    //     const expandIconPlus = summary.querySelector('.icon-tabler-circle-plus');
    //     const expandIconMinus = summary.querySelector('.icon-tabler-circle-minus');
    
    //     function onClick(e) {
    //         e.preventDefault();
    //         el.style.overflow = 'hidden';
    //         if (isClosing || !el.open) {
    //             open();
    //         } else if (isExpanding || el.open) {
    //             shrink();
    //         }
    //     }
    
    //     function shrink() {
    //         isClosing = true;
    //         const startHeight = `${el.offsetHeight}px`;
    //         const endHeight = `${summary.offsetHeight}px`;
    //         if (animation) {
    //             animation.cancel();
    //         }
    //         animation = el.animate({
    //             height: [startHeight, endHeight]
    //         }, {
    //             duration: 400,
    //             easing: 'ease-out'
    //         });
    //         animation.onfinish = () => {
    //             toggleIcon(expandIconPlus, expandIconMinus, false);
    //             onAnimationFinish(false);
    //         };
    //         animation.oncancel = () => {
    //             toggleIcon(expandIconPlus, expandIconMinus, false);
    //             isClosing = false;
    //         };
    //     }
    
    //     function open() {
    //         el.style.height = `${el.offsetHeight}px`;
    //         el.open = true;
    //         window.requestAnimationFrame(expand);
    //     }
    
    //     function expand() {
    //         isExpanding = true;
    //         const startHeight = `${el.offsetHeight}px`;
    //         const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;
    //         if (animation) {
    //             animation.cancel();
    //         }
    //         animation = el.animate({
    //             height: [startHeight, endHeight]
    //         }, {
    //             duration: 350,
    //             easing: 'ease-out'
    //         });
    //         animation.onfinish = () => {
    //             toggleIcon(expandIconPlus, expandIconMinus, true);
    //             onAnimationFinish(true);
    //         };
    //         animation.oncancel = () => {
    //             toggleIcon(expandIconPlus, expandIconMinus, true);
    //             isExpanding = false;
    //         };
    //     }
    
    //     function onAnimationFinish(open) {
    //         el.open = open;
    //         animation = null;
    //         isClosing = false;
    //         isExpanding = false;
    //         el.style.height = el.style.overflow = '';
    //     }
    
    //     summary.addEventListener('click', onClick);
    // }
    
    // document.querySelectorAll('details').forEach(createAccordion);
    
    

    return (
        <>
            <section className="faq-container" aria-label="Frequently Asked Questions">
                <details>
                    <summary>
                        <span className="faq-title">How \02795 long does the course take?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                            <path d="M12 9l0 6"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{display: "none"}}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                        </svg>
                    </summary>
                    <div className="faq-content">
                        The course is designed to be self-paced, but typically takes about 5 hours to complete.
                    </div>
                </details>

                <details>
                    <summary>
                        <span className="faq-title">How long does the course take?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                            <path d="M12 9l0 6"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{display: "none"}}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                        </svg>
                    </summary>
                    <div className="faq-content">
                        The course is designed to be self-paced, but typically takes about 5 hours to complete.
                    </div>
                </details>

                <details>
                    <summary>
                        <span className="faq-title">How long does the course take?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                            <path d="M12 9l0 6"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{display: "none"}}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                        </svg>
                    </summary>
                    <div className="faq-content">
                        The course is designed to be self-paced, but typically takes about 5 hours to complete.
                    </div>
                </details>

                <details>
                    <summary>
                        <span className="faq-title">How long does the course take?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                            <path d="M12 9l0 6"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{display: "none"}}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                        </svg>
                    </summary>
                    <div className="faq-content">
                        The course is designed to be self-paced, but typically takes about 5 hours to complete.
                    </div>
                </details>

                <details>
                    <summary>
                        <span className="faq-title">How long does the course take?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                            <path d="M12 9l0 6"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus expand-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#303651" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{display: "none"}}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l6 0"></path>
                        </svg>
                    </summary>
                    <div className="faq-content">
                        The course is designed to be self-paced, but typically takes about 5 hours to complete.
                    </div>
                </details>
            </section>

        </>
    );
};
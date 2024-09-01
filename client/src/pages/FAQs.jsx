import React from 'react';
import './FAQs.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <article>
        <div className="img-container"></div>
        <div className="faq">
          <h2>FAQ</h2>
          <div className="q-a">
            <div className="q-wrapper">
              <h3
                tabindex="0"
                onClick={() => toggleQuestion(0)}
                className={activeIndex === 0 ? 'h3-active' : ''}
              >
                How many team members can I invite?
              </h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
            <p className={activeIndex === 0 ? 'p-visible' : ''}>
              You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3
                tabindex="0"
                onClick={() => toggleQuestion(1)}
                className={activeIndex === 1 ? 'h3-active' : ''}
              >
                What is the maximum file upload size?
              </h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
            <p className={activeIndex === 1 ? 'p-visible' : ''}>
              No more than 2GB. All files in your account must fit your allotted storage space.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3
                tabindex="0"
                onClick={() => toggleQuestion(2)}
                className={activeIndex === 2 ? 'h3-active' : ''}
              >
                How do I reset my password?
              </h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
            <p className={activeIndex === 2 ? 'p-visible' : ''}>
              Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3
                tabindex="0"
                onClick={() => toggleQuestion(3)}
                className={activeIndex === 3 ? 'h3-active' : ''}
              >
                Can I cancel my subscription?
              </h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
            <p className={activeIndex === 3 ? 'p-visible' : ''}>
              Yes! Send us a message and we’ll process your request no questions asked.
            </p>
          </div>

          <div className="q-a">
            <div className="q-wrapper">
              <h3
                tabindex="0"
                onClick={() => toggleQuestion(4)}
                className={activeIndex === 4 ? 'h3-active' : ''}
              >
                Do you provide additional support?
              </h3>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
            <p className={activeIndex === 4 ? 'p-visible' : ''}>
              Chat and email support is available 24/7. Phone lines are open during normal business hours.
            </p>
          </div>
        </div>
      </article>

      <footer className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.</p> 
        <p>Coded by <a href="https://github.com/annafkt/frontend-mentor-challenges/tree/main/challenges/faq-accordion-card" target="_blank" rel="noopener noreferrer">annafkt</a>.</p>
      </footer>
    </div>
  );
};

export default FAQ;

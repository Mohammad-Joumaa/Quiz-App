import React from 'react';
import './About.css';

const About: React.FC = () => {
  const handleLearnMoreClick = () => {
    window.open('https://www.w3schools.com/react/', '_blank');
  };

  return (
    <div className="about">
      <h1>About React</h1>
      
      <section className="about-section">
        <h2>What is React?</h2>
        <p>
          React is a popular JavaScript library for building user interfaces, primarily for single-page applications. 
          It was developed by Facebook and is maintained by a community of developers and companies. 
          React allows developers to create large web applications that can update and render efficiently in response to data changes.
        </p>
        <img src="src/assets/react-logo.png" alt="React Logo" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Component-Based Architecture</h2>
        <p>
          React encourages a component-based architecture, where the UI is divided into reusable components. 
          Each component can manage its own state, and components can be nested within other components, making it easy to build complex user interfaces.
        </p>
        <img src="src/assets/architecture.png" alt="Component Architecture" className="about-image" />
      </section>

      <section className="about-section">
        <h2>React Hooks</h2>
        <p>
          React Hooks are a recent addition to React that allow you to use state and other React features without writing a class. 
          Some of the most commonly used hooks are <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>.
        </p>
        <img src="src/assets/react-hooks.png" alt="React Hooks" className="about-image" />
      </section>

      <section className="about-section">
        <h2>React's Virtual DOM</h2>
        <p>
          One of React's most powerful features is its virtual DOM, which improves performance by minimizing the number of direct manipulations to the actual DOM. 
          React efficiently updates the DOM by re-rendering only the components that have changed, making it fast and scalable.
        </p>
        <img src="src/assets/dom.png" alt="Virtual DOM" className="about-image" />
      </section>

      <div className="learn-more-container">
        <button onClick={handleLearnMoreClick} className="learn-more-button">Learn More on W3Schools</button>
      </div>
    </div>
  );
};

export default About;

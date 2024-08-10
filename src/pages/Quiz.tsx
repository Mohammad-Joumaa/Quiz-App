import React, { useState } from 'react';
import './QuizPage.css';
import correctIcon from '../assets/correct.png';
import incorrectIcon from '../assets/incorrect.png';

interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    questionText: "Which of the following is the correct name of React.js?",
    options: ["React", "React.js", "ReactJS", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    questionText: "React.js is written in which of the following language?",
    options: ["C", "C++", "Java", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    questionText: "JSX stands for?",
    options: ["Javascript Extension", "Javascript", "Javascript XML", "None of these"],
    correctAnswer: "JavaScript XML",
  },
  {
    questionText: "Which of the following are the advantages of React.js?",
    options: ["React.js can increase the application's performance with Virtual DOM.", "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.", "React.js can render both on client and server side.", "All of the above"],
    correctAnswer: "All of the above",
  },
  
  {
    questionText: "What is React primarily used for?",
    options: ["Building databases", "Designing user interfaces", "Backend development", "Mobile app development"],
    correctAnswer: "Designing user interfaces",
  },
  {
    questionText: "Which hook is used to manage state in functional components?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctAnswer: "useState",
  },
  {
    questionText: "Which company developed React?",
    options: ["Google", "Apple", "Facebook", "Microsoft"],
    correctAnswer: "Facebook",
  },
  // Add more questions here
  {
    questionText: "Which of the following is not a disadvantage of React.js?",
    options: ["React.js has only a view layer. We have put your code for Ajax requests, events and so on.", "The library of React.js is pretty large.", "The JSX in React.js makes code easy to read and write.", "The learning curve can be steep in React.js."],
    correctAnswer: "The JSX in React.js makes code easy to read and write.",
  },
  {
    questionText: "What is JSX?",
    options: ["A type of JavaScript", "A syntax extension for JavaScript", "A CSS framework", "A database"],
    correctAnswer: "A syntax extension for JavaScript",
  },
  {
    questionText: "Which method is used to render React elements?",
    options: ["ReactDOM.create()", "ReactDOM.render()", "React.render()", "React.create()"],
    correctAnswer: "ReactDOM.render()",
  },
  {
    questionText: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
    options: ["Constructor", "Class", "Object", "DataObject"],
    correctAnswer: "Class",
  },
  {
    questionText: "Which of the following acts as the input of a class-based component?",
    options: ["Class", "Factory", "Render", "Props"],
    correctAnswer: "Props",
  },
  {
    questionText: "Which of the following keyword is used to create a class inheritance?",
    options: ["Create", "Inherits", "Extends", "This"],
    correctAnswer: "Extends",
  },
  {
    questionText: "How many numbers of elements a valid react component can return?",
    options: ["1", "2", "5", "4"],
    correctAnswer: "1",
  },
  {
    questionText: "What is the declarative way to render a dynamic list of components based on values in an array?",
    options: ["Using the reduce array method", "Using the <Each /> component", "Using the Array.map() method", "With a for/while loop"],
    correctAnswer: "Using the Array.map() method",
  },
  {
    questionText: "What are the two ways to handle data in React?",
    options: ["State & Props", "Services & Components", "State & Services", "State & Component"],
    correctAnswer: "State & Props",
  },
  {
    questionText: "Does React.js create a VIRTUAL DOM in the memory?",
    options: ["True", "False", "Both A and B", "Cannot say"],
    correctAnswer: "True",
  },
  {
    questionText: "Which of the following function is used to change the state of the React.js component?",
    options: ["this.setState", "this.setChangeState", "this.State{}", "None of the above."],
    correctAnswer: "this.setState",
  },
  {
    questionText: "How does React determine whether to re-render a component in response to state changes?",
    options: ["It compares the current state with the previous state using a deep comparison", "It re-renders every time the state changes", "It uses the shouldComponentUpdate lifecycle method", "None of the above."],
    correctAnswer: "It uses the shouldComponentUpdate lifecycle method",
  },
  {
    questionText: "What type of value should be used for keys in React?",
    options: ["Any unique number", "Any string", "Any unique identifier", "Any type of value can be used as a key"],
    correctAnswer: "Any unique identifier",
  },
  
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert("Please select an answer to proceed to the next question.");
      return;
    }
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setIsQuizCompleted(false);
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="quiz-container">
      {isQuizCompleted ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score is {score} out of {questions.length}.</p>
          <p>Your percentage is {percentage}%.</p>
          <button className="submit-btn" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <p className="question">{questions[currentQuestion].questionText}</p>
          <ul className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`option-btn ${selectedOption === option ? (option === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleOptionChange(option)}
                  disabled={showAnswer}
                >
                  {option}
                  {showAnswer && (
                    <img
                      src={option === questions[currentQuestion].correctAnswer ? correctIcon : incorrectIcon}
                      alt={option === questions[currentQuestion].correctAnswer ? "Correct" : "Incorrect"}
                      className="answer-icon"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <button className="submit-btn" onClick={handleNextQuestion} disabled={!showAnswer}>
            {currentQuestion + 1 === questions.length ? 'Submit Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

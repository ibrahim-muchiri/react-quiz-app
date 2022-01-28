import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// QUIZ APPLICATION
class Quiz extends React.Component {
 constructor(props) {
  super(props);

  var dataSet = [
   {
    question: 'what is 8 * 1 ?',
    answers: ['1', '8', '16', '9'],
    correct: 1,
   },
   {
    question: 'Who is Stive Job?',
    answers: ['CEO of MicroSoft', 'A Berber', 'Movie Star', 'CEO of Apple'],
    correct: 2,
   },
   {
    question: 'Why do people go to school?',
    answers: [
     'To get alot of money',
     'To gain experience',
     'To stay with a teacher so as to earn',
     'To relax in future',
    ],
    correct: 1,
   },
   {
    question: 'Who was the father to Moses?',
    answers: ['Gethro', 'Abraham', 'Cain', 'Non of the above'],
    correct: 0,
   },
   {
    question: 'JavaScript can be used in____development',
    answers: ['Back-End', 'Front-end', 'ReactJS', 'All of the above'],
    correct: 2,
   },
   {
    question: 'What is the character of president Uhuru?',
    answers: ['Polite', 'Problem solver', 'Corrupt', 'All of the above'],
    correct: 2,
   },
  ];
  this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 };
  this.handleClick = this.handleClick.bind(this);
 }

 handleClick(choice) {
  if (choice === this.state.dataSet[this.state.current].correct) {
   this.setState({ correct: this.state.correct + 1 });
  } else {
   this.setState({ incorrect: this.state.incorrect + 1 });
  }
  if (this.state.current === 5) {
   this.setState({ current: 0 });
   this.setState({ incorrect: 0 });
   this.setState({ correct: 0 });
  } else {
   this.setState({ current: this.state.current + 1 });
  }
 }

 render() {
  return (
   <div>
    <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
    <QuizArea
     handleClick={this.handleClick}
     dataSet={this.state.dataSet[this.state.current]}
    />
   </div>
  );
 }
}
function Question(props) {
 var style = {
  color: 'red',
 };
 return <h1 style={style}>{props.dataSet.question}</h1>;
}
function Answer(props) {
 var style = {
  width: '100%',
  height: 50,
  color: 'blue',
 };
 return (
  <div>
   <botton syle={style} onClick={() => props.handleClick(props.choice)}>
    {props.answer}
   </botton>
  </div>
 );
}

function AnswerList(props) {
 var answers = [];
 for (let i = 0; i < props.dataSet.answers.length; i++) {
  answers.push(
   <Answer
    choice={i}
    handleClick={props.handleClick}
    answer={props.dataSet.answers[i]}
   />
  );
 }
 return <div>{answers}</div>;
}
function QuizArea(props) {
 var style = {
  width: '25%',
  display: 'block',
  textAlign: 'center',
  boxSizing: 'border-box',
  margin: '2px',
  background: '#eee',
  // display: 'inline-block',
  float: 'left',
  // margin: '0 1em 0 0',
  padding: '0 2em',
 };
 return (
  <div style={style}>
   <Question dataSet={props.dataSet} />
   <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
  </div>
 );
}

function TotalCorrect(props) {
 var style = {
  display: 'inline-block',
  padding: '1em',
  background: '#eee',
  margin: '0 1em 0 0',
 };
 return <h2 style={style}>Correct: {props.correct}</h2>;
}

function TotalIncorrect(props) {
 var style = {
  display: 'inline-block',
  padding: '1em',
  background: '#eee',
  margin: '0 0 0 1em',
 };
 return <h2 style={style}>Incorrect: {props.incorrect}</h2>;
}

function ScoreArea(props) {
 var style = {
  width: '100%',
  display: 'block',
  padding: '2em',
  textAlign: 'left',
  float: 'left',
 };
 return (
  <div style={style}>
   <TotalCorrect correct={props.correct} />
   <TotalIncorrect incorrect={props.incorrect} />
  </div>
 );
}

ReactDOM.render(<Quiz />, document.getElementById('root'));

// ReactDOM.render(
//  <React.StrictMode>
//   <App />
//  </React.StrictMode>,
//  document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

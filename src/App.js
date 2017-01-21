import React, { Component } from 'react';
import axios from 'axios';
import './style/App.css';
import Quiz from './components/Quiz';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null,
      scores: null,
      scoreAccumulator:{} 
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({ quizzes: response.data.quizzes });
      });
  }

  postScore() {
   axios
     .post('/scores', {
       score: 20
     })
     .then((response) => {
       console.log(response)
       this.setState({ scores: response.data.score });
     });
  }

  render() {
    let quizzes = this.state.quizzes;

    return (
      <div className="app">
        { quizzes
          ? quizzes.map(quiz => <Quiz data={quiz} key={quiz.id}/>)
          : <p>Loading</p> }
          <button className='bth-submit' onClick={ () => this.postScore() }>submit</button>
          <p>{ this.state.scores } </p>
      </div>
    );
  }
}


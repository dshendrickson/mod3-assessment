import React, { Component } from 'react';
import axios from 'axios';
import './style/App.css';
import Quiz from './components/Quiz';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pointAccumulator: {},
      quizzes: null,
      score: 0,
      snarkResponse: '',
    };
  }

  componentDidMount() {
    this.getQuizzes();
  }

  displayScore() {
    this.totalPoints();
    this.getScore();
  }

  getQuizzes() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({ quizzes: response.data.quizzes });
      });
  }

  getScore() {
    axios
      .post('/scores', {
        score: this.state.score,
      })
      .then((response) => {
        this.setState({ snarkResponse: response.data.score });
      })
  }

  setPointAccumulator(questionId, points) {
    let pAccumulator = this.state.pointAccumulator;
    pAccumulator[questionId] = points;
    this.setState({ pointAccumulator: pAccumulator });
  }

  totalPoints() {
    let pointAccumulator = this.state.pointAccumulator;
    let totalPoints = Object.keys(pointAccumulator).reduce((accumulator, points) => {
      return accumulator + pointAccumulator[points]
    }, 0);
    this.setState({ score: totalPoints })
  }

  render() {
    let quizzes = this.state.quizzes;

    return (
      <div className="app">
        { quizzes
          ? quizzes.map(quiz => <Quiz
            data={quiz}
            key={quiz.id}
            setPointAccumulator={this.setPointAccumulator.bind(this)}
          /> )
          : <p>Loading</p> }

          <button className='btn-submit' onClick={ () => this.displayScore() }>submit</button>
          <div className='question'>
            <h3>Total Score: { this.state.score } </h3>
            <p>&nbsp;&nbsp;&nbsp;{ this.state.snarkResponse }</p>
          </div>
        </div>
    );
  }
}

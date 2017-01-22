import React, { Component } from 'react';
import axios from 'axios';
import './style/App.css';
import Quiz from './components/Quiz';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pointAccumulator: [],
      quizzes: null,
      score: 0,
      snarkResponse: '',
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        console.log(response)
        this.setState({ quizzes: response.data.quizzes });
      });
  }

  getScore() {
    axios
      .post('/scores', {
        score: this.state.score,
      })
      .then((response) => {
        console.log(response)
        this.setState({ snarkResponse: response.data.score });
      });
  }

  setPointAccumulator(questionId, points) {
    let pAccumulator = this.state.pointAccumulator;
    console.log(pAccumulator);
    pAccumulator[questionId] = points;
    this.setState({ pointAccumulator: pAccumulator });
    this.totalPoints();
  }

  totalPoints() {
    let pointAccumulator = this.state.pointAccumulator;
    let totalPoints = Object.keys(pointAccumulator).reduce(function(accumulator, points) {
      return accumulator + pointAccumulator[points]
    })
    console.log(totalPoints);
    this.setState({ score: pointAccumulator })
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

          <button className='btn-submit' onClick={ () => this.getScore() }>submit</button>
          <p>{ this.state.score } </p>
          <p>{ this.state.pointAccumulator } </p>
          <p>{ this.state.snark } </p>
        </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import './style/App.css';
import Quiz from './components/Quiz';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({ quizzes: response.data.quizzes });
      });
  }

  render() {
    let quizzes = this.state.quizzes;

    return (
      <div className="app">
        { quizzes
          ? quizzes.map(quiz => <Quiz data={quiz} key={quiz.id}/>)
          : <p>Loading</p> }
      </div>
    );
  }
}


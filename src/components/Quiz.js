import React, { Component } from 'react';
import Question from './Question';

export default class Quiz extends Component {

  render() {
    let { questions, title } = { ...this.props.data }
    let setPointAccumulator = this.props.setPointAccumulator;

    return (

      <div className='quiz'>
        <h1>{title}</h1>
        { questions
          ? questions.map(question => <Question
              key={question.id}
              data={question}
              setPointAccumulator={setPointAccumulator}
            />)
          : <p>Loading</p> }
      </div>

    );
  }
}

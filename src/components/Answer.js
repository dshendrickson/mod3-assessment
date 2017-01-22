import React, { Component } from 'react';

export default class Answer extends Component {

  render() {
    let { score, title } = { ...this.props.data };
    let questionId = this.props.questionId;
    let setPointAccumulator = this.props.setPointAccumulator;
    let clicked = false;

    return (

      <div className='question-score'
        onClick={ () => setPointAccumulator(questionId, score); clicked = true }>
        <input
          className='answer'
          name={questionId}
          value={score}
          type='radio'
             />
        &nbsp;&nbsp;&nbsp;{title}
      </div>

    );
  }
}

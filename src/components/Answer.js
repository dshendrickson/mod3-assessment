import React, { Component } from 'react';

export default class Answer extends Component {

  render() {
    let { score, title } = { ...this.props.data };
    let questionId = this.props.questionId;
    let setPointAccumulator = this.props.setPointAccumulator;

    return (

      <div className='question-score'
           onClick={ () => setPointAccumulator(questionId, score) }>
        <input type='radio'
               className='answer'
               name={questionId}
               value={score}
             />
        &nbsp;&nbsp;&nbsp;{title}
      </div>

    );
  }
}

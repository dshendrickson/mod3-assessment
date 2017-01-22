import React, { Component } from 'react';
import Answer from './Answer';

export default class Question extends Component {

  render() {
    let { answers, title, id } = { ...this.props.data }
    let setPointAccumulator = this.props.setPointAccumulator;

    return (

      <div className='question'>
        <h3>
          {title}<br />
          Question Number: {id}
        </h3>
        { answers
          ? answers.map((answer, index) => <Answer
            key={index}
            data={answer}
            question={id}
            name={title}
            setPointAccumulator={setPointAccumulator}
            />)
          : <p>Loading</p> }
        </div>

    );
  }
}


import React, { Component } from 'react';

export default class Answer extends Component {

  render() {
    let { name, score, title } = { ...this.props.data };

    return (

      <div>
        <input type='radio'
               className='answer'
               name={name}
               value={score}
        />
        &nbsp;&nbsp;&nbsp;{title}
      </div>

    );
  }
}

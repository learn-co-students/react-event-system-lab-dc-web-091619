import React from 'react';

export default class EyesOnMe extends React.Component {
  render() {
    return <button onFocus={this.focused} onBlur={this.blurred}>I am a button</button>
  }

  focused = () => {
    console.log('Good!')
  }

  blurred = () => {
    console.log('Hey! Eyes on me!')
  }
}

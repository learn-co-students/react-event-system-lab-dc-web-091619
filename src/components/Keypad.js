import React from 'react';

export default class Keypad extends React.Component {
  render() {
    return <input type="password" onKeyUp={this.upkeypressed} />
  }

  upkeypressed = () => {
    console.log('Entering password...')
  }
}
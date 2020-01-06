// Code Keypad Component Here
import React from 'react';
//Note: The components are not defined yet, but the files are present. Before the tests will run, you must export
// components from EyesOnMe.js and Keypad.js. To get started, write very basic components that you know will not pass all the tests, but at least be valid React.
export default class Keypad extends React.Component {
  handlePassword = () => {
    console.log('Entering password...')}

  render() {

    return (

      <div>
        <input
          type="password"
          onKeyUp={this.handlePassword}/>

      </div>
    )
  }
}

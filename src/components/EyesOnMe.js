// Code EyesOnMe Component HereWhen the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
import React from 'react'

class EyesOnMe extends React.Component {

    focus() {
        console.log('Good!')
    }

    blur() {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
          <button onFocus={this.focus} onBlur={this.blur}>ALL EYEZ ON ME!</button>
        );
    } 
} 

export default EyesOnMe
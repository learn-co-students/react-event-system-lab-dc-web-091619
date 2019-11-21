import React from 'react'

class EyesOnMe extends React.Component {

  good = () => {
    console.log("Good!")
  }

  eyesOnMe = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <div>
        <button onFocus={this.good} onBlur={this.eyesOnMe}>
          Eyes On Me
        </button>
      </div>
    )
  }
}

export default EyesOnMe
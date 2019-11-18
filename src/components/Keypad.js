import React from "react"

// const Keypad = () => {
    
//     display = () => {
//         console.log('Entering password...')
//     }

//     return <input type="password" onKeyUp={this.display} />
// }

// export default Keypad

export default class Keypad extends React.Component{

    display = () => {
                console.log('Entering password...')
            }

    render(){
        return(
            <input type="password" onKeyUp={this.display}></input>
        )
    }

}
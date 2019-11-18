// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component{

    logOnKeyUp = () =>{
        console.log('Entering password...')
    }
    
    render(){
        return (
            <input type="password" onKeyUp={this.logOnKeyUp}/>
        )
    }
        
}

export default Keypad
// Code EyesOnMe Component Here
import React from 'react';

// const eyesOnMe = () => {
    
//     focusedOn = () => {
//         console.log('Good!')
//     }



//     return (
//         <div> 
//             <button onFocus = {this.focusedOn} />  this is not defined? why???     
//         </div>
//     )
// }

class EyesOnMe extends React.Component{

    focusedOn = () => {
        console.log('Good!')
    }

    focusedBlur = () => {
        console.log('Hey! Eyes on me!' )
    }

    render(){
        return (
            <button onFocus = {this.focusedOn}
            onBlur = {this.focusedBlur}/>
        )
    }
}

export default EyesOnMe
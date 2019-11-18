// Code Keypad Component Here
import React from 'react'

function Keypad (props) {
    return <input type="password" onKeyUp={e=>console.log('Entering password...')} />
}

export default Keypad
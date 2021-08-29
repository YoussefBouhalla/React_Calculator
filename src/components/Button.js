import React from 'react'

function Button({ backColor,frontColor }) {
    return (
        <div className='keypad-button' style={{backgroundColor : backColor}}>
            <button className='key text-center fs-18 fw-600' style={{backgroundColor : frontColor}}>
                1
            </button>
        </div>
    )
}

export default Button

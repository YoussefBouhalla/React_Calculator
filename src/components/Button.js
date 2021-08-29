import React from 'react'
import backspace from '../images/backspace.svg'

function Button({ backColor,frontColor,title }) {
    let btitle;
    if (title == 'back') {
        btitle = <img src={backspace} alt="back" className='backspace' />;
    }else{
        btitle = title;
    }
    return (
        <div className='keypad-button' style={{backgroundColor : backColor}}>
            <button className='key text-center fs-18 fw-600 cl-primary' style={{backgroundColor : frontColor}}>
                {btitle}
            </button>
        </div>
    )
}

export default Button

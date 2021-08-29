import React from 'react'
import Keypad from '../Keypad'
import Screen from '../Screen'

function Calculator() {
    return (
        <div className='w-40 d-flex justify-content-center align-items-center'>
            <div className='calculator bkg-primary bxs-calculator'>
                <div className='h-34px w-100 cl-second px-2 py-2 d-flex align-items-center calculator-header'>
                    <p className='fs-14 fw-600'>BHL</p>
                    <div className='fs-10 fw-600 cl-primary bkg-second small-tag text-center mx-2'>
                        calculator V1.0
                    </div>
                </div>
                <Screen />
                <Keypad />
            </div>
        </div>
    )
}

export default Calculator

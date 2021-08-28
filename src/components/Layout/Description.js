import React from 'react'

const Description = ({ title }) => {
    return (
        <div className='w-50 vh-100 p-4 d-flex flex-column justify-content-center'>
            <div className='d-flex align-items-center'>
                <p className='cl-primary fs-12-h4 fw-700'>BHL</p>
                <div className='bkg-third big-tag mx-2 cl-second fs-12-h5 fw-500 text-center'>
                    calculator V1.0
                </div>
            </div>
            <p className='fs-20 fw-500 cl-primary mt-4'><span className='cl-third'>Calculator</span> is a mini project made by <span className='cl-third'>Youssef Bouhalla</span><br/>Technologies used in this mini project are :</p>
            <ul className='mt-2 cl-third fw-600 techs-list'>
                <li>ReactJS</li>
                <li>React Redux</li>
                <li>Sass</li>
            </ul>
        </div>
    )
}

export default Description

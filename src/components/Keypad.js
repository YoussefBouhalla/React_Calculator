import Button from './Button'
import React from 'react'

function Keypad() {
    return (
        <div className='keypad mx-auto'>
            <div className='complex-ops d-flex flex-wrap justify-content-between align-content-between'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
            </div>
            <div className='clear'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
            </div>
            <div className='numbers'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
            </div>
            <div className='operations'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} />
            </div>
        </div>
    )
}

export default Keypad

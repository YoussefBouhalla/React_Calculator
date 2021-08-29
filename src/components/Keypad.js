import Button from './Button'
import React from 'react'

function Keypad() {
    return (
        <div className='keypad mx-auto'>
            <div className='complex-ops d-flex flex-wrap justify-content-between align-content-between'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'√'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'('} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={')'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'^'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'ln'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'x!'} />
            </div>
            <div className='clear d-flex flex-wrap justify-content-between align-content-between'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'back'} />
                <Button backColor={'#2D76BE'} frontColor={'#609FFE'} title={'C'} />
            </div>
            <div className='numbers  d-flex flex-wrap justify-content-between align-content-between'>
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'1'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'2'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'3'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'4'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'5'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'6'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'7'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'8'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'9'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'0'} />
                <Button backColor={'#AA7928'} frontColor={'#D9A44E'} title={'.'} />
                <Button backColor={'#C53B3B'} frontColor={'#FE6565'} title={'='} />
            </div>
            <div className='operations  d-flex flex-wrap justify-content-between align-content-between'>
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'+'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'-'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'×'} />
                <Button backColor={'#BE872D'} frontColor={'#FEC260'} title={'÷'} />
            </div>
        </div>
    )
}

export default Keypad

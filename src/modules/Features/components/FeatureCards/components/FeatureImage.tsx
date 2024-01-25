import React from 'react'
import mockup from 'assets/img/mockuo-feature.png'


export default function () {
    return (
        <div className='flex justify-center mb-[120px]  items-center'>
            <img src={mockup} className='drop-shadow-2xl max-w-[214px] lg:max-w-[375px]' alt="" />
        </div>
    )
}

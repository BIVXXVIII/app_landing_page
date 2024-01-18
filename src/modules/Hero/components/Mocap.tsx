import React from 'react'
import mockup from 'assets/img/Mockup_hero.png'
type Props = {}

export default function Mocap({ }: Props) {
    return (
        <div className='w-[210px] md:w-[205px] lg:w-[360px] h-[423px] lg:h-[70vh] md:h-[423px]'>
            <img className='max-w-none max-h-full' src={mockup} alt="" />
        </div>
    )
}
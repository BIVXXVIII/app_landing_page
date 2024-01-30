import React, { useEffect, useState } from 'react'
import { useMoveSliderToLeft, useMoveSliderToRight } from '../hooks/moveHooks'

type Props = {
    direction: 'left' | 'right',
    sliderPosition: number,
    setSliderPosition: React.Dispatch<React.SetStateAction<number>>
}

export default function MoveButton({ direction, sliderPosition, setSliderPosition }: Props) {
    const [mouseOver, setMouseOver] = useState(false)
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('able')
            setDisable(false)
        }, 800)
        return () => clearTimeout(timer)
    }, [disable])
    return (
        <>
            {direction === 'left' &&
                <button
                    disabled={disable}
                    onClick={() => {
                        useMoveSliderToLeft(sliderPosition, setSliderPosition)
                        setDisable(true)
                    }}
                    onMouseOver={() => {
                        console.log('over')
                        setMouseOver(true)
                    }}
                    onMouseLeave={() => { setMouseOver(false) }}
                    className='bg-white p-[17px] rounded-full hover:bg-blue border border-blue hidden md:block'
                >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={mouseOver ? 'fill-white' : 'fill-blue'} >
                        <g id="Group">
                            <path id="Vector" d="M22.5584 25L32.8708 35.3125L29.925 38.2584L16.6667 25L29.925 11.7417L32.8708 14.6875L22.5584 25Z" />
                        </g>
                    </svg>
                </button>}
            {direction === 'right' &&
                <button
                    disabled={disable}

                    onClick={() => {
                        useMoveSliderToRight(sliderPosition, setSliderPosition)
                        setDisable(true)
                    }}
                    onMouseOver={() => { setMouseOver(true) }}
                    onMouseLeave={() => { setMouseOver(false) }}
                    className='bg-white p-[17px] rounded-full hover:bg-blue border border-blue hidden md:block'
                >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`rotate-180 ${mouseOver ? 'fill-white' : 'fill-blue'}`} >
                        <g id="Group">
                            <path id="Vector" d="M22.5584 25L32.8708 35.3125L29.925 38.2584L16.6667 25L29.925 11.7417L32.8708 14.6875L22.5584 25Z" />
                        </g>
                    </svg>
                </button>}
        </>
    )
}
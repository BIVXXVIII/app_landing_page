import React from 'react'
import MoveButton from './MoveButton'
import { useRenderSliderCards } from '../hooks/renderHooks'

type Props = {
    setSliderPosition: React.Dispatch<React.SetStateAction<number>>,
    sliderPosition: number
}

export default function Slider(props: Props) {
    return (
        <div className='justify-between flex items-center gap-10'>
            <MoveButton direction='left' {...props} />
            <div className='relative h-[454px] md:h-[632px] flex-grow '>
                {useRenderSliderCards(props)}
                <img
                    src="/src/assets/img/SliderImgs/frame.png" alt="frame"
                    className='absolute z-30 left-1/2 -top-1 -translate-x-1/2 h-[450px] md:h-[632px]'
                />
            </div>
            <MoveButton direction='right' {...props} />
        </div>
    )
}
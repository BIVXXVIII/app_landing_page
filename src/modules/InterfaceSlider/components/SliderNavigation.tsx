import React from 'react'
import { useRenderSliderNavigation } from '../hooks/renderHooks'

type Props = {
    setSliderPosition: React.Dispatch<React.SetStateAction<number>>,
    sliderPosition: number
}

export default function SliderNavigation(props: Props) {
    return (
        <div className='flex justify-center gap-4 mt-10'>
            {useRenderSliderNavigation(props)}
        </div>
    )
}
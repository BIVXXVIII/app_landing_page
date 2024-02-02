import { useState } from 'react'
import { BlockContainer, BlockText, BlockTitle, BlockWrapper } from 'components/index'
import SliderNavigation from 'modules/InterfaceSlider/components/SliderNavigation'
import Slider from './components/Slider'

export default function InterfaceSlider() {
    const [sliderPosition, setSliderPosition] = useState(0)
    const propsPackage = { sliderPosition, setSliderPosition }


    return (
        <>
            <BlockWrapper id='screenshot'>
                <BlockContainer className='flex-col'>
                    <BlockTitle>Checkout Our
                        App Interface Look</BlockTitle>
                    <BlockText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.  </BlockText>
                    <Slider {...propsPackage} />
                    <SliderNavigation {...propsPackage} />
                </BlockContainer>
            </BlockWrapper>
        </>
    )
}


import { useState } from 'react'
import BlockWrapper from 'components/BlockWrapper'
import BlockContainer from 'components/BlockContainer'
import BlockTitle from 'components/BlockTitle'
import BlockText from 'components/BlockText'
import SliderCard from './components/SliderCard'
import sliderContent from './sliderConfig'
import MoveButton from './components/MoveButton'
type Props = {}

type ElementsPosition =
    | "left-0"
    | "left-[10%]"
    | "left-1/2"
    | "right-[10%]"
    | "right-0";

const elementsPosition: ElementsPosition[] = [
    "left-1/2",
    "right-[10%]",
    "right-0",
    "left-0",
    "left-[10%]",
];

export default function InterfaceSlider({ }: Props) {
    const initialPosition = 0
    const [sliderPosition, setSliderPosition] = useState(initialPosition)

    const renderSliderCards = (img: string, elementIndex: number) => {
        const numArray: number[] = []
        for (let i = 0; i < sliderContent.length; i++) {
            numArray.push(i)
        }
        const splicedValues = numArray.splice(0, sliderPosition)
        numArray.push(...splicedValues)
        const stateIndex = numArray.indexOf(elementIndex)

        switch (stateIndex) {
            case 0:
                // main
                return <SliderCard
                    size='main'
                    img={img} className={elementsPosition[0]}
                    key={`sliderCard${elementIndex}`} />
            case 1:
                // second right
                return <SliderCard size='second'
                    onClick={() => { setSliderPosition(elementIndex) }}
                    img={img}
                    className={elementsPosition[1]}
                    key={`sliderCard${elementIndex}`} />

            case sliderContent.length - 1:
                // second left
                return <SliderCard
                    onClick={() => { setSliderPosition(elementIndex) }}
                    size='second'
                    img={img}
                    className={elementsPosition[4]}
                    key={`sliderCard${elementIndex}`} />

            case 2:
                // ghost right
                return <SliderCard
                    size='ghost' img={img}
                    className={elementsPosition[2]}
                    key={`sliderCard${elementIndex}`}
                />

            case sliderContent.length - 2:
                // ghost left
                return <SliderCard
                    size='ghost'
                    img={img}
                    className={elementsPosition[3]}
                    key={`sliderCard${elementIndex}`} />
            default:
                // hidden
                return <SliderCard size='hide' key={`sliderCard${elementIndex}`} img={img} />
                break;
        }
    }

    const renderNavigateBtns = (undefind: string, index: number) => {
        return <button
            className={`w-4 h-4 rounded-full duration-200 drop-shadow-xl shadow-black border-2 focus-visible:border-none border-white ${index === sliderPosition ? 'bg-purple scale-[120%] outline outline-1 outline-purple' : 'bg-blue'}`}
            key={`navigate${index}`}
            onClick={() => { setSliderPosition(index) }}
        />

    }
    return (
        <>
            <BlockWrapper>
                <BlockContainer className='flex-col'>
                    <BlockTitle>Checkout Our
                        App Interface Look</BlockTitle>
                    <BlockText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.  </BlockText>
                    <div className='justify-between flex items-center gap-10'>
                        <MoveButton direction='left' sliderPosition={sliderPosition} setSliderPosition={setSliderPosition} />
                        <div className='relative h-[454px] md:h-[632px] flex-grow '>
                            {sliderContent.map(renderSliderCards)}
                            <img
                                src="/src/assets/img/SliderImgs/frame.png" alt="frame"
                                className='absolute z-30 left-1/2 -top-1 -translate-x-1/2 h-[450px] md:h-[632px]'
                            />
                        </div>
                        <MoveButton direction='right' sliderPosition={sliderPosition} setSliderPosition={setSliderPosition} />
                    </div>
                    <div className='flex justify-center gap-4 mt-10'>
                        {sliderContent.map(renderNavigateBtns)}
                    </div>
                </BlockContainer>
            </BlockWrapper>
        </>
    )
}


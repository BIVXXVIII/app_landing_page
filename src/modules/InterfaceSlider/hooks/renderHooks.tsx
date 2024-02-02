import sliderContent, { elementsPosition } from '../sliderConfig'
import SliderCard from '../components/SliderCard'

type Props = {
    setSliderPosition: React.Dispatch<React.SetStateAction<number>>,
    sliderPosition: number
}

export const useRenderSliderCards = (props: Props) => {
    const { sliderPosition, setSliderPosition } = props
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
                if (sliderContent.length < 5) return <SliderCard size='hide' key={`sliderCard${elementIndex}`} img={img} />
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
    return sliderContent.map(renderSliderCards)
}

export const useRenderSliderNavigation = (props: Props) => {
    const { sliderPosition, setSliderPosition } = props
    const renderNavigateBtns = (skip: string, index: number) => {
        return <button
            className={`w-4 h-4 rounded-full duration-200 drop-shadow-xl shadow-black border-2 focus-visible:border-none border-white ${index === sliderPosition ? 'bg-purple scale-[120%] outline outline-1 outline-purple' : 'bg-blue'}`}
            key={`navigate${index}`}
            onClick={() => { setSliderPosition(index) }}
        />
    }
    return sliderContent.map(renderNavigateBtns)
}
import sliderContent from '../sliderConfig'

export const useMoveSliderToRight = (sliderPosition: number, setSliderPosition: React.Dispatch<React.SetStateAction<number>>) => {
    if (sliderPosition === sliderContent.length - 1) {
        setSliderPosition(0)
        return
    }
    setSliderPosition(sliderPosition + 1)
}
export const useMoveSliderToLeft = (sliderPosition: number, setSliderPosition: React.Dispatch<React.SetStateAction<number>>) => {
    if (sliderPosition === 0) {
        setSliderPosition(sliderContent.length - 1)
        return
    }
    setSliderPosition(sliderPosition - 1)
}
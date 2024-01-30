import { ComponentPropsWithoutRef } from 'react'
import { SizeParams, ParamsClasses } from '../sliderConfig'
type Props = {
    img: string,
    size: SizeParams
} & ComponentPropsWithoutRef<'div'>




export default function SliderCard({ img, size, className, ...rest }: Props) {
    const sizeClasses: ParamsClasses = {
        main: 'absolute top-0 -translate-x-1/2 z-20 h-[444px] w-[227px] md:h-[622px] md:w-[288px] [&>img]:h-full flex justify-center bg-white rounded-[50px] duration-[0.8s]',
        second: 'h-[354px] w-[163px] md:h-[532px] md:w-[245px] [&>img]:h-full bg-white rounded-3xl absolute top-[45px] z-10 duration-[0.8s]',
        ghost: 'hidden md:block h-[532px] w-[245px] [&>img]:h-full  rounded-3xl bg-white absolute top-[45px]  duration-[0.8s]',
        hide: 'h-0 w-0 hidden duration-[2s]'
    }
    const imageOpacity: ParamsClasses = {
        main: 'opacity-[99%] hover:opacity-100 duration-300 rounded-3xl',
        second: 'opacity-75 hover:opacity-90 duration-300 rounded-3xl hover:scale-[101%]',
        ghost: 'opacity-40 hover:opacity-65 duration-300 rounded-3xl hover:scale-[101%]',
        hide: 'opacity-0'
    }
    return (
        <div className={`${sizeClasses[size]} ${className}`} {...rest} >
            <img src={img} alt='app mockup img' className={imageOpacity[size]} />
        </div >
    )
}
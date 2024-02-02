import React from 'react'
import { featureCardImageConfig, FeatureCardImageConfig } from '../config/imageConfig'


export type FeatureCardImgID = keyof FeatureCardImageConfig

type Props = {
    className?: string,
    title: string,
    children: React.ReactNode,
    imgID: FeatureCardImgID,
    orientation: 'left' | 'right' | 'center'
}

export default function FeatureCard({ className, title, children, imgID, orientation }: Props) {
    const classNameWrapper = {
        center: `text-white font-josefin text-center ${className ? className : ''}`,
        left: `text-white font-josefin text-center md:text-left ${className ? className : ''}`,
        right: `text-white font-josefin text-center md:text-right ${className ? className : ''}`
    }

    const classNameImg = {
        center: `mb-[22px] flex justify-center`,
        left: `mb-[22px] flex justify-center md:justify-start`,
        right: `mb-[22px] flex justify-center md:justify-end`
    }
    return (
        <div className={classNameWrapper[orientation]}>
            <div className={classNameImg[orientation]}>
                <img

                    src={featureCardImageConfig[imgID]}
                    alt={`${imgID} icon`}
                />
            </div>
            <h5 className='font-semibold leading-[37.5px] text-lg mb-[18px] uppercase'>{title}</h5>
            <p>{children}</p>
        </div>
    )
}

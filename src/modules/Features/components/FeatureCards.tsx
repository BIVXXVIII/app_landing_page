import React from 'react'
import FeatureCard from './FeatureCard'
import FeatureImage from './FeatureImage'
import { cardContent } from '../config/CardsContent'
type Props = {}

export default function FeatureCards({ }: Props) {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <FeatureCard
                    className='max-w-[300px]'
                    {...cardContent['free chat']}
                />

            </div>
            <div className='flex gap-[60px] md:flex-row flex-col'>
                <CardCol>
                    <FeatureCard {...cardContent['unlimited features']} />
                    <FeatureCard {...cardContent['ui design']} />
                </CardCol>
                <FeatureImage />
                <CardCol>
                    <FeatureCard {...cardContent['mobile versions']} />
                    <FeatureCard {...cardContent['graphics']} />
                </CardCol>
            </div>
            <div className='flex justify-center'>
                <FeatureCard
                    className='max-w-[300px]'
                    {...cardContent['support']}
                />
            </div>
        </div>
    )
}
const CardCol = ({ children }: { children: React.ReactNode }) => <div className='flex flex-col justify-between gap-10 md:py-[60px] mb-[60px]'>{children}</div>
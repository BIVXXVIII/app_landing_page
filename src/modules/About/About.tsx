import BlockContainer from 'components/BlockContainer'
import BlockWrapper from 'components/BlockWrapper'
import mockup from 'assets/img/mockup_about.png'
import React from 'react'
import AboutCards from './components/AboutCards'

type Props = {}

export default function About({ }: Props) {
    return (
        <BlockWrapper>
            <BlockContainer className='flex-col text-center font-josefin pt-[60px] md:pt-[120px] pb-[92px] md:pb-[159px] lg:pb-[120px]'>
                <h2 className='font-bold leading-[47.25px] text-xl text-black mb-[18px]'>About Our App</h2>
                <p className='mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
                <div className='flex flex-col items-center md:flex-row md:justify-between md:gap-[60px] md:items-stretch'>
                    <img src={mockup} alt="" className='w-[238px] mb-[93px] lg:w-[386px]' />
                    <AboutCards />
                </div>
            </BlockContainer>
        </BlockWrapper>
    )
}
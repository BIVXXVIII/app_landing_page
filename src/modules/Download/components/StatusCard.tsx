import React from 'react'

type Props = {
    icon: string,
    number: number,
    text: string
}

export default function StatusCard({ icon, number, text }: Props) {

    return (
        <div className={`bg-blue font-josefin text-white text-center flex flex-col justify-center items-center pt-[11px] pb-[12px] px-[3px] w-[96px] h-[100px] rounded-[5px] lg:h-[176px] lg:w-[170px]`}>
            <div className='mb-2 lg:mb-[18px]'>
                <img src={icon} alt="icon" className='w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]' />
            </div>
            <p className='font-semibold leading-[30px] text-md lg:text-lg lg:leading-[25px] lg:mb-[18px]'>
                {number}
            </p>
            <p className='bg-none leading-[24px] lg:font-semibold lg:text-md lg:leading-[30px] lg:uppercase text-wrap'>
                {text}
            </p>
        </div>
    )
}

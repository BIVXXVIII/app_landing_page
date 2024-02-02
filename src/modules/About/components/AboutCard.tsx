import React from 'react'
import { checkedCircle } from 'assets/svg'


type Props = { title: string, children: React.ReactNode }

export default function AboutCard({ title, children }: Props) {
    return (
        <div className='flex pt-[18px] pr-[30px] pb-2.5 pl-[18px] min-w-[250px] rounded-[10px] shadow gap-[18px] font-josefin text-left self-end basis-1/2' >
            <div className='w-[24px] h-[24px] flex-shrink-0'>
                <img src={checkedCircle} alt="" className='' />
            </div>
            <div>
                <h4 className='text-md uppercase leading-[30px] font-semibold mb-[3px]'>{title}</h4>
                <p className='text-gray leading-[24px]'>{children}</p>
            </div>
        </div>
    )
}
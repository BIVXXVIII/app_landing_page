import { ComponentPropsWithoutRef } from 'react'

export default function DownloadBtn({ className, ...rest }: ComponentPropsWithoutRef<'button'>) {
    return (
        <button {...rest} className={`bg-blue py-3 px-1.5 rounded-[3px] text-white font-josefin uppercase flex justify-center text-[10px] leading-[10px] md:px-4 md:py-2.5 md:text-md md:leading-[20px] ${className ? className : ''}`}>
            <span className='relative top-0.5'>download</span>
        </button>
    )
}
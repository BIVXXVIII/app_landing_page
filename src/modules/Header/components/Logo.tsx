import logo from 'assets/Logo.png'
import { ComponentPropsWithoutRef } from 'react'

export default function Logo({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
    const componentClasses = `bg-white h-[60px] w-[100px] rounded-[5px] flex justify-center items-center shadow md:h-[90px] md:w-[200px] ${className}`;
    return (
        <>
            <div className={componentClasses} {...rest}>
                <img src={logo} alt="logo" className='w-[78px] md:w-[167px]' />
            </div>
        </>
    )
}


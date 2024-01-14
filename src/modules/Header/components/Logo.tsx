import { addStylePrefix } from 'helpers/hooks/style/addStylePrefix';
import logo from 'assets/Logo.png'
import { ComponentPropsWithoutRef } from 'react'

export default function Logo({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
    const desktopClasses = ``;
    const tabletClasses = `h-[90px] w-[200px]`;
    const mobileClasses = `bg-white h-[60px] w-[100px] rounded-[5px] flex justify-center items-center shadow`;
    const componentClasses = `${mobileClasses} ${addStylePrefix(tabletClasses, 'md')} ${addStylePrefix(desktopClasses, 'lg')} ${className}`;
    return (
        <div className={componentClasses} {...rest}>
            <img src={logo} alt="logo" className='w-[78px] md:w-[167px]' />
        </div>
    )
}


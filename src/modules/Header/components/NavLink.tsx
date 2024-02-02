import { ComponentPropsWithoutRef } from 'react'
import { LinkIdValue, useScrollTo } from 'helpers';

type Props = {
    link: LinkIdValue
}

export default function NavLink({ className, children, link, ...rest }: Props & ComponentPropsWithoutRef<'button'>) {
    const elementClasses = `font-josefin text-black uppercase relative top-0.5 text-md cursor-pointer select-none hover:top-0 hover:text-blue duration-200 hover:duration-400`;
    const pseudoAfterClasses = `after:content-[''] after:h-[1px] after:w-full after:absolute after:bottom-[4px] after:bg-blue after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-200 hover:after:duration-400`;
    return (
        <button
            onClick={() => { useScrollTo(link) }}
            className={`${elementClasses} ${pseudoAfterClasses} ${className}`}
            {...rest}

        >
            {children}
        </button>
    )
}
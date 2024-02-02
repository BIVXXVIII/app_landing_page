import { ComponentPropsWithoutRef } from 'react'

type Props = {} & ComponentPropsWithoutRef<'h4'>

export default function FooterBlockTitle({ className, ...rest }: Props) {
    const titleClasses = 'uppercase font-semibold text-lg leading-[37.5px] mb-[11px]'
    return (
        <h4 className={`${titleClasses} ${className}`} {...rest} />
    )
}
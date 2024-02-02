import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export default function BlockContainer({ className, ...rest }: Props) {
    return (
        <div className={`max-w-[1170px] flex flex-grow pt-[60px] md:pt-[120px] pb-[92px] md:pb-[159px] lg:pb-[120px] ${className}`} {...rest}></div>
    )
}
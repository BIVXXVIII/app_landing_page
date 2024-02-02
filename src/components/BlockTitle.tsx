import { ComponentPropsWithoutRef } from 'react'

type Props = { justify?: 'left' } & ComponentPropsWithoutRef<'h4'>

export default function BlockTitle({ className, justify, ...rest }: Props) {
    return (
        <h4 className={`font-bold leading-[47.25px] text-xl  mb-[18px] ${justify === 'left' ? 'text-left' : 'text-center'} font-josefin uppercase select-none ${className}`} {...rest} />
    )
}
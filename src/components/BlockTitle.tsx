import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'h4'>

export default function BlockTitle({ className, ...rest }: Props) {
    return (
        <h4 className={`font-bold leading-[47.25px] text-xl  mb-[18px] text-center font-josefin uppercase select-none ${className}`} {...rest} />
    )
}
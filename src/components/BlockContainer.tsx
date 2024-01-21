import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export default function BlockContainer({ className, ...rest }: Props) {
    return (
        <div className={`max-w-[1170px] flex flex-grow ${className}`} {...rest}></div>
    )
}
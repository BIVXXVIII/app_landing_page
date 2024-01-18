import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export default function BlockWrapper({ className, ...rest }: Props) {
    return (
        <div className={`flex justify-center px-4 md:px-10 ${className}`} {...rest}></div>
    )
}
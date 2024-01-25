import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'p'>

export default function BlockText({ className, ...rest }: Props) {
    return (
        <p className={`mb-[60px] max-w-[600px] text-center mx-auto font-josefin ${className}`} {...rest} />
    )
}
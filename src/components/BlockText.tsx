import { ComponentPropsWithoutRef } from 'react'

type Props = { justify?: 'left' } & ComponentPropsWithoutRef<'p'>

export default function BlockText({ className, justify, ...rest }: Props) {
    return (
        <p className={`mb-[60px] max-w-[600px] ${justify === 'left' ? 'text-left' : 'text-center'} mx-auto font-josefin ${className}`} {...rest} />
    )
}
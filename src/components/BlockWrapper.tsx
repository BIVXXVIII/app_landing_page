import { ComponentPropsWithoutRef } from 'react'
import { bgRectangle } from 'assets/img/index'
type Props = { bgBlue?: boolean } & ComponentPropsWithoutRef<'div'>

export default function BlockWrapper({ className, bgBlue, ...rest }: Props) {
    return (
        <div className={`flex justify-center px-4 md:px-10 bg-no-repeat bg-cover ${className}`} style={bgBlue ? { backgroundImage: `url('${bgRectangle}')` } : {}} {...rest}></div>
    )
}
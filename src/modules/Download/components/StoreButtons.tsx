import { ComponentPropsWithoutRef } from 'react'
import { appStoreLink, googlePlayLink } from 'assets/img'
type Props = {}

export default function StoreButtons({ }: Props) {
    return (
        <div className='flex flex-wrap gap-[25px] mb-[60px]'>
            <StoreLink img={appStoreLink} title='apple store' href='#' />
            <StoreLink img={googlePlayLink} title='google play ' href='#' />
        </div>
    )
}

type LinkProps = {
    img: string,
} & ComponentPropsWithoutRef<'a'>

const StoreLink = ({ img, className, ...rest }: LinkProps) => {
    return (<a
        className={`w-[150px]${className}`}
        {...rest}
    >
        <img src={img} alt="store link" />
    </a>)
}
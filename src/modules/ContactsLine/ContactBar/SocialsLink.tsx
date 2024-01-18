import { ComponentPropsWithoutRef } from 'react'
import facebook from 'assets/svg/facebook-fill.svg'
import instagram from 'assets/svg/instagram-fill.svg'
import twitter from 'assets/svg/twitter-fill.svg'
import youtube from 'assets/svg/youtube-fill.svg'
// type Props = {}

export default function SocialsLink() {
    return (
        <div className='flex items-center gap-[30px] p-2'>
            <SocialLink href='https://www.facebook.com/' img={facebook} title='facebook' />
            <SocialLink href='https://twitter.com/' img={twitter} title='twitter' />
            <SocialLink href='https://www.instagram.com/' img={instagram} title='instagram' />
            <SocialLink href='https://www.youtube.com' img={youtube} title='youtube' />
        </div>
    )
}

type SocialLinkProps = {
    img: string
} & ComponentPropsWithoutRef<'a'>

const SocialLink = ({ img, children, title, target, ...rest }: SocialLinkProps) => {
    return <a
        {...rest}
        target={target ? target : '_blank'}
        title={title}
    >
        <img
            className='h-[18px] w-[18px]'
            src={img}
            alt={`${title} icon`}
        />
    </a>
}
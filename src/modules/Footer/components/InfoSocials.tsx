import { socialsSvg } from 'assets/svg'
import { SocialsSvgType } from 'assets/svg/socials'
type LinkProps = {
    href: string,
    social: keyof SocialsSvgType
}

export default function InfoSocials() {
    return (
        <div className='flex gap-[30px] items-center'>
            <SocialLink href='https://facebook.com' social='facebook' />
            <Separator />
            <SocialLink href='https://instagram.com' social='instagram' />
            <Separator />
            <SocialLink href='https://twitter.com' social='twitter' />
            <Separator />
            <SocialLink href='https://youtube.com' social='youtube' />

        </div>
    )
}

const SocialLink = ({ href, social }: LinkProps) => {
    return <a href={href} className='hover:text-blue' target='_blank'>{socialsSvg[social]}</a>
}

const Separator = () => <div className='bg-white w-[2px] h-5' />
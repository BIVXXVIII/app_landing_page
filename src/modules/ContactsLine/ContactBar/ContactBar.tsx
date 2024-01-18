import React from 'react'
import phone from 'assets/svg/phone-fill.svg'
import mail from 'assets/svg/mail-fill.svg'
import SocialsLink from './SocialsLink'
import BlockWrapper from 'components/BlockWrapper'
type Props = {}

export default function ContactBar({ }: Props) {
    return (
        <BlockWrapper className='justify-center mt-[25px] mb-[35px] xl:mb-[15px] hidden md:flex'>
            <div className='flex flex-grow max-w-[1170px] justify-between'>

                <div className='flex gap-12  p-2'>
                    <ContactLine title='mail' icon={mail} href='mailto:info@yourmail.com'>info@yourmail.com</ContactLine>
                    <ContactLine title='phone' icon={phone} href='tel:480-555-01-03'>(480) 555-0103</ContactLine>
                </div>
                <SocialsLink />
            </div>
        </BlockWrapper>
    )
}

const ContactLine = ({ children, icon, title, href }: { children: React.ReactNode, icon: string, title: string, href: string }) => {
    return (
        <a
            href={href}
            className='flex gap-[18px] font-josefin leading-[24px] items-center text-white'
        >
            <img src={icon} alt={`${title} icon`} />
            <span className='select-none'>{children}</span>
        </a>
    )
}


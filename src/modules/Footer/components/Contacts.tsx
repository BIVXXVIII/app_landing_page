import { contactMail, contactPhone } from 'assets/svg'
type Props = {}

export default function Contacts({ }: Props) {
    return (
        <div className='absolute top-0 md:h-[230px] -translate-y-1/2 flex w-full justify-center px-[20px]'>
            <div className='bg-white max-w-[1167px] flex-grow rounded-[30px] shadow-[0_-10px_70px_10px] shadow-black/50 flex justify-between items-center px-[50px] gap-[50px] flex-col md:flex-row py-[30px]'>
                <Contact href='mailto:your@mail.com' icon={contactMail}>info@youremail.com</Contact>

                <div className='h-[2px] w-[115px] md:w-[2px] md:h-[115px] bg-black' />
                <Contact icon={contactPhone} href='tel:00000000000'>+880 321 655 9985</Contact>
            </div>
        </div>
    )
}

const Contact = ({ children, icon, href }: { children: string, icon: string, href: string }) => {
    return <a className='basis-[49%] flex items-center flex-col md:flex-row justify-center md:justify-start gap-[18px]' href={href}>
        <div className='bg-blue p-[15px] md:p-[18px] lg:p-[30px] rounded-full flex-shrink-0'>
            <img src={icon} className='size-5 md:size-10' alt="" />
        </div>
        <p className='font-semibold leading-[30px] lg:leading-[37.5px] text-md lg:text-2xl text-nowrap'>{children}</p>
    </a>
}
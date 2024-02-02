import { ComponentPropsWithoutRef } from 'react'
import { menuClose } from 'assets/svg'

type Props = {
    handleMenuVisible: () => void
}

export default function Menu({ handleMenuVisible }: Props) {
    return (
        <div className='bg-white w-[267px] h-[356px] absolute rounded-[10px] left-0 top-[150%] pt-[25px] pr-[25px] pb-10 pl-10 flex flex-col'>
            <CloseBtn onClick={handleMenuVisible} />
            <div className='flex flex-col gap-[25px]'>
                <MenuLink title='Home' />
                <MenuLink title='About' />
                <MenuLink title='Features' />
                <MenuLink title='Screenshot' />
                <MenuLink title='Blog' />
            </div>

        </div>
    )
}

const CloseBtn = ({ className, ...rest }: ComponentPropsWithoutRef<'button'>) => {
    return <button className='bg-blue p-[5px] self-end rounded-full mb-2' {...rest}>
        <img src={menuClose} alt="close button" />
    </button>
}

const MenuLink = ({ title }: { title: string }) => {

    return (<a href={`#${title}`} className='text-md font-josefin uppercase text-black'>
        {title}
    </a>)
}
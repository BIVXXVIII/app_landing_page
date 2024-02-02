import NavLink from './NavLink';
import { menuLines } from 'assets/svg'
type Props = { handleMenuVisible: () => void }

export default function BarLeft({ handleMenuVisible }: Props) {
    const componentClasses = `bg-white rounded-l-[5px] pl-[18px] pr-[50px] md:pr-[100px] lg:pl-[52px] h-10 flex items-center md:h-[60px] basis-1/2 shadow`;


    return (
        <div className={componentClasses}>
            <button className='xl:hidden' onClick={handleMenuVisible}>
                <img src={menuLines} alt="" />
            </button>
            <div className='hidden xl:flex gap-10'>
                <NavLink link='top'>home</NavLink>
                <NavLink link='about'>about</NavLink>
                <NavLink link='features'>features</NavLink>
            </div>
        </div>
    )
}
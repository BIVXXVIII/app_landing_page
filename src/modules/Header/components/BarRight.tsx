import DownloadBtn from './DownloadBtn';
import NavLink from './NavLink';

type Props = {}

export default function BarRight({ }: Props) {

    const componentClasses = `bg-white rounded-r-[5px] pr-[5px] pl-[50px] md:pl-[100px] h-10 flex items-center  justify-end md:h-[60px] basis-1/2 shadow`;


    return (
        <div className={componentClasses}>

            <div className='gap-10 mr-[43px] xl:flex hidden'>
                <NavLink link='screenshot'>screenshot</NavLink>
                <NavLink link='blog'>blog</NavLink>
            </div>
            <DownloadBtn />
        </div>
    )
}
import { mockupHero } from 'assets/img'

export default function Mockup() {
    return (
        <div className='w-[210px] md:w-[205px] lg:w-[360px] h-[423px] lg:h-[70vh] md:h-[423px]'>
            <img className='max-w-none max-h-full' src={mockupHero} alt="" />
        </div>
    )
}
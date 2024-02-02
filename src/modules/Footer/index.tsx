import { Info, QuickLinks, Subscribe, Contacts } from './components'
import { copiright } from 'assets/svg'
export default function Footer() {
    return (
        <footer className='font-josefin relative mt-[250px]'>
            <Contacts />
            <div className='bg-black text-white pt-[220px] pb-[18px] md:pt-[230px]'>
                <div className='max-w-[1167px] mx-auto px-[18px]'>
                    <div className='flex justify-between flex-col md:flex-row mb-[64px] gap-[60px]'>
                        <div className='flex basis-1/2 justify-between flex-wrap gap-[60px]'>
                            <Info />
                            <QuickLinks />
                        </div>
                        <Subscribe />
                    </div>
                    <div className='w-full h-[1px] bg-white/90 mb-[18px]'></div>
                    <div className='flex justify-center items-center gap-[18px] select-none'>
                        <img src={copiright} alt="copyright sign" className='w-6 h-6' />
                        <p>Copyright 2024. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
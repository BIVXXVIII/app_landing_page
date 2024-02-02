import { gravityMockup } from 'assets/img'

export default function DownloadImg() {
    return (
        <div className='flex items-center justify-end md:basis-[40%]'>
            <img src={gravityMockup} alt="" />
        </div>
    )
}
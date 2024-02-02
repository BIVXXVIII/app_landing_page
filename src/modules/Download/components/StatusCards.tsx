import { StatusCard } from '.'
import { thumbUpIcon, starIcon, downloadIcon } from 'assets/svg'
type Props = {}

export default function StatusCards({ }: Props) {
    return (
        <div className='flex gap-[10px] justify-center sm:justify-normal mb-[60px] md:mb-0'>
            <StatusCard icon={downloadIcon} text='Download' number={59865} />
            <StatusCard icon={thumbUpIcon} text='Like' number={29852} />
            <StatusCard icon={starIcon} text='5 star rating' number={1500} />

        </div>
    )
}
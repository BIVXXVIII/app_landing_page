import AboutCard from './AboutCard'

type Props = {}

export default function AboutCards({ }: Props) {
    return (
        <div className='flex flex-col gap-5'>
            <AboutCard title='Creative design'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutCard>
            <AboutCard title='easy to use'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutCard>
            <AboutCard title='Best user experince'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutCard>

        </div>
    )
}
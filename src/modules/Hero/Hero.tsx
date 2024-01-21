import bgImage from 'assets/img/backgroundRectangle.png'
import HeroText from './components/HeroText'
import Mocap from './components/Mocap'
import BlockWrapper from 'components/BlockWrapper'
import BlockContainer from 'components/BlockContainer'
type Props = {}

export default function Hero({ }: Props) {
    return (
        <BlockWrapper className='min-h-[calc(100vh-160px)] flex justify-center pl-[26px] overflow-hidden' style={{ backgroundImage: `url('${bgImage}')` }}>
            <BlockContainer className='flex-grow lg:items-center md:justify-between justify-center flex-wrap mt-[98px] gap-[50px] pb-[83px] md:pb-0'>
                <HeroText />
                <Mocap />
            </BlockContainer>
        </BlockWrapper>
    )
}
import { BlockContainer, BlockWrapper } from 'components/index'
import { HeroText, Mockup } from './components'

export default function Hero() {
    return (
        <BlockWrapper className='min-h-[calc(100vh-140px)] flex justify-center pl-[26px] overflow-hidden' bgBlue>
            <BlockContainer className='flex-grow lg:items-center md:justify-between justify-center flex-wrap gap-[50px] !pb-0 md:pb-0 !pt-[65px]'>
                <HeroText />
                <Mockup />
            </BlockContainer>
        </BlockWrapper>
    )
}
import { BlockContainer, BlockText, BlockTitle, BlockWrapper } from 'components/index'
import FeatureCards from './components/FeatureCards'

export default function Features() {
    return (
        <BlockWrapper bgBlue id='features'>
            <BlockContainer className='flex-col'>
                <BlockTitle className='text-white'>App features</BlockTitle>
                <BlockText className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </BlockText>
                <FeatureCards />
            </BlockContainer>
        </BlockWrapper>
    )
}


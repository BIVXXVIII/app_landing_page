import BlockContainer from 'components/BlockContainer'
import BlockText from 'components/BlockText'
import BlockTitle from 'components/BlockTitle'
import BlockWrapper from 'components/BlockWrapper'
import bgImage from 'assets/img/backgroundRectangle.png'
import FeatureCards from './components/FeatureCards/FeatureCards'
type Props = {}

export default function Features({ }: Props) {
    return (
        <BlockWrapper style={{ backgroundImage: `url('${bgImage}')` }}>
            <BlockContainer className='flex-col'>
                <BlockTitle className='text-white'>App features</BlockTitle>
                <BlockText className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </BlockText>
                <FeatureCards />
            </BlockContainer>
        </BlockWrapper>
    )
}


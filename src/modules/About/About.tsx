import BlockContainer from 'components/BlockContainer'
import BlockWrapper from 'components/BlockWrapper'
import mockup from 'assets/img/mockup_about.png'
import AboutCards from './components/AboutCards'
import BlockTitle from 'components/BlockTitle'
import BlockText from 'components/BlockText'

type Props = {}

export default function About({ }: Props) {
    return (
        <BlockWrapper>
            <BlockContainer className='flex-col text-center font-josefin'>
                <BlockTitle className='text-black'>About Our App</BlockTitle>
                {/* <h2 className='font-bold leading-[47.25px] text-xl text-black mb-[18px]'>About Our App</h2> */}
                <BlockText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</BlockText>

                <div className='flex flex-col items-center md:flex-row md:justify-between md:gap-[60px] md:items-stretch'>
                    <img src={mockup} alt="" className='w-[238px] mb-[93px] lg:w-[386px]' />
                    <AboutCards />
                </div>
            </BlockContainer>
        </BlockWrapper>
    )
}
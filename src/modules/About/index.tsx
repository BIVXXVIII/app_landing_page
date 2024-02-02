import { mockupAbout } from 'assets/img'
import AboutCards from './components/AboutCards'
import { BlockContainer, BlockText, BlockTitle, BlockWrapper } from 'components/index'


export default function About() {
    return (
        <BlockWrapper id='about'>
            <BlockContainer className='flex-col text-center font-josefin'>
                <BlockTitle className='text-black'>About Our App</BlockTitle>
                <BlockText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </BlockText>
                <div className='flex flex-col items-center md:flex-row md:justify-between md:gap-[60px] md:items-stretch'>
                    <img src={mockupAbout} alt="" className='w-[238px] mb-[93px] lg:w-[386px]' />
                    <AboutCards />
                </div>
            </BlockContainer>
        </BlockWrapper>
    )
}
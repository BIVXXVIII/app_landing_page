import googleplay from 'assets/img/GooglePlayLink.png'
import appstore from 'assets/img/AppStoreLink.png'

export default function HeroText() {
    return (
        <div className='min-w-[240px] h-min relative mb-[60px] font-josefin md:left-[10px]'>
            <div className='bg-white relative -left-[10px] z-10 pt-[30px] pr-3 pb-[21px] pl-[18px] md:pt-[18px] md:pr-2 md:pb-[15px] md:pl-[18px]'>
                <HeroTitle />
                <HeroParagraph />
                <HeroSubtitle />
                <div className='flex gap-2.5'>
                    <HeroStoreLink indeficator='appStore' />
                    <HeroStoreLink indeficator='playMarket' />
                </div>
            </div>
            <div className='absolute left-[10px] -right-[10px] -top-[20px] -bottom-[20px] border-[10px] z-0 border-purple'></div>
        </div>
    )
}

const HeroTitle = () => {
    return <h1
        className='text-blue font-semibold text-lg uppercase pr-[31px] leading-[37.5px] mb-[18px] md:font-bold md:text-xl md:leading-[47.25px] md:pr-0 md:mb-1.5 lg:text-3xl lg:leading-[63.48px]'
    >
        A Great App Makes <br /> Your Life Better
    </h1>
}

const HeroParagraph = () => {
    return <p
        className='text-gray leading-[24px] max-w-[293px] md:max-w-[330px] lg:max-w-[487px] mb-[30px] md:mb-[23px]'
    >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
    </p>
}

const HeroSubtitle = () => {
    return <h4 className='uppercase text-black font-semibold leading-[30px] mb-[19px] text-md md:mb-[23px] lg:text-lg lg:leading-[37.5px]'>Download App Now</h4>
}

type HeroLinkConfig = {
    link: string,
    img: string
}
type HeroLinksConfig = {
    'appStore': HeroLinkConfig,
    'playMarket': HeroLinkConfig
}

const linkConfigs: HeroLinksConfig = {
    "appStore": {
        link: '',
        img: appstore
    },
    playMarket: {
        link: '',
        img: googleplay
    }
}

const HeroStoreLink = ({ indeficator }: { indeficator: keyof HeroLinksConfig }) => {
    return <a href={linkConfigs[indeficator].link} target='_blank'>
        <img className='w-[108px]' src={linkConfigs[indeficator].img} alt={indeficator} />
    </a>
}
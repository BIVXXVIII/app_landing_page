import { BlockContainer, BlockText, BlockTitle, BlockWrapper } from 'components/index'
import { StatusCards, StoreButtons, DownloadImg } from './components'

export default function Download() {
    return (
        <BlockWrapper>
            <BlockContainer className='flex-wrap md:justify-between'>
                <div className='flex-shrink'>
                    <BlockTitle justify='left' className='text-black'>
                        Download App Now
                    </BlockTitle>
                    <BlockText justify='left' className='!mb-10 !ml-0 md:!max-w-[330px] lg:!max-w-[570px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    </BlockText>
                    <StoreButtons />
                    <StatusCards />
                </div>
                <DownloadImg />
            </BlockContainer>
        </BlockWrapper>
    )
}
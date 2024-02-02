import { useState } from "react"
import { Menu, BarLeft, BarRight, Logo } from './components'
import { BlockContainer, BlockWrapper } from 'components'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)
    const handleMenuVisible = () => {
        setMenuVisible(prev => !prev)
    }
    return (
        <BlockWrapper className="flex justify-center sticky z-40 top-[30px]">
            <BlockContainer className="flex max-w-[1170px] flex-grow !pb-0 !pt-0">
                <div className="flex-grow flex justify-center items-center  relative">
                    {menuVisible && <Menu handleMenuVisible={handleMenuVisible} />}
                    <BarLeft handleMenuVisible={handleMenuVisible} />
                    <Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <BarRight />
                </div>
            </BlockContainer>
        </BlockWrapper>
    )
}
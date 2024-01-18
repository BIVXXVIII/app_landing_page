import { useState } from "react"
import BarLeft from "./components/Bars/BarLeft/BarLeft"
import BarRight from "./components/Bars/BarRight/BarRight"
import Logo from "./components/Logo/Logo"
import Menu from "./components/Menu/Menu"
import BlockWrapper from "components/BlockWrapper"
import BlockContainer from 'components/BlockContainer'
type Props = {}

export default function Header({ }: Props) {
    const [menuVisible, setMenuVisible] = useState(false)
    const handleMenuVisible = () => {
        setMenuVisible(prev => !prev)
    }
    return (
        <BlockWrapper className="flex justify-center sticky z-40 top-[30px]">
            <BlockContainer className="flex max-w-[1170px] flex-grow">
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
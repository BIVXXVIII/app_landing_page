import { useScrollTo } from 'helpers'
import { arrowLeftBlue } from 'assets/svg'

type Props = {}

export default function GoToTop({ }: Props) {
    return (
        <>
            {
                <button className='fixed bottom-10 right-10 bg-white border-2 border-purple rounded-full w-10 h-10 hover:scale-110 hover:duration-300 duration-200 opacity-50 hover:opacity-100' onClick={() => { useScrollTo('top') }}>
                    <img src={arrowLeftBlue} alt="" className='rotate-90' />
                </button>}
        </>
    )
}
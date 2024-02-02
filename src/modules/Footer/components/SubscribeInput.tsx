import { arrowSendWhite } from 'assets/svg'

export default function SubscribeInput() {
    return (
        <div className="bg-white flex p-0.5 rounded-[4px]">
            <input type="text" name="" id="" className="flex-grow mr-1 py-[11px] pl-[15px] focus-visible:outline-blue/50 flex-shrink" />
            <button className='bg-blue rounded-[4px] py-[11px] px-[13px] flex-shrink-0'>
                <img src={arrowSendWhite} alt="" />
            </button>
        </div>
    )
}
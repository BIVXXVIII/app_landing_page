import { mockupFeature } from 'assets/img'


export default function () {
    return (
        <div className='flex justify-center mb-[120px]  items-center'>
            <img src={mockupFeature} className='drop-shadow-2xl max-w-[214px] lg:max-w-[375px]' alt="featureImg" />
        </div>
    )
}

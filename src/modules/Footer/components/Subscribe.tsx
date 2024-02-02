import { FooterBlockTitle, SubscribeInput } from '.'


export default function Subscribe() {
    return (
        <div className='max-w-[396px]'>
            <FooterBlockTitle>news letter</FooterBlockTitle>
            <p className='mb-[33px]'>
                Subscribe our newsletter to get our latest update & news
            </p>
            <SubscribeInput />
        </div>
    )
}
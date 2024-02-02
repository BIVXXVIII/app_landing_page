import { LinkIdValue, useScrollTo } from 'helpers'
import { ReactNode } from 'react'
import { FooterBlockTitle } from '.'
type Props = {}

export default function QuickLinks({ }: Props) {
    return (
        <div>
            <FooterBlockTitle>quick link</FooterBlockTitle>
            <ol className='flex flex-col gap-[11px]'>
                <QuickLink link='about'>About</QuickLink>
                <QuickLink link='features'>Features</QuickLink>
                <QuickLink link='screenshot'>ScreenShot</QuickLink>
                <QuickLink link='blog'>Blog</QuickLink>
            </ol>
        </div>
    )
}

const QuickLink = ({ link, children }: { link: LinkIdValue, children: ReactNode }) => <li>
    <button onClick={() => { useScrollTo(link) }}>
        {children}
    </button>
</li>
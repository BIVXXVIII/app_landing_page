import ContactBar from 'modules/ContactsLine/ContactBar/ContactBar'
import Header from 'modules/Header/Header'
import React from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div className='b-white min-h-screen flex flex-col text-base relative'>
            <ContactBar />
            <Header />
            <div className='bg-blue absolute top-0 left-0 right-0 h-[50vh] -z-50' />
            <main className='flex-grow'>{children}</main>
        </div>
    )
}
import React from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div>
            <Navbar />
            {/* <Logo /> */}
        </div>
    )
}
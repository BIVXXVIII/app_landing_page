import React from 'react'

type Props = { children: React.ReactNode }

export default function Workzone({ children }: Props) {
    return (
        <div className='p-5 bg-gray min-h-screen'>{children}</div>
    )
}
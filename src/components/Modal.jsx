import React from 'react'

export default function Modal({ message }) {
    return (
        <div className='grid place-content-center w-screen h-screen fixed bg-gray-950/10 top-0 left-0'>
            <div className='w-96 h-60 shadow-md bg-white rounded-md'>
                <h2>{message}</h2>
            </div>
        </div>
    )
}

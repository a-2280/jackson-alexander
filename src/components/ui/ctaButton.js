import React from "react"

export default function CtaButton({ className }) {
    return (
        <button className={`bg-grey flex p3 gap-3 radius-13 w-fit ${className || ''}`}>
            <div className='ratio-1 pos-rel w-30px m-w100'>
                <img className='bg-image radius-10' src='/images/cta.svg' alt='Cta' />
            </div>
            <div className='bg-frost radius-10 p10 flex justify-center align-center'>
                <p className='text-10 text-white nowrap'>Let’s Chat!</p>
            </div>
        </button>
    )
}

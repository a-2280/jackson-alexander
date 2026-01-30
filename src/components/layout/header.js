import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
    return (
        <header data-sal className='fade-in fixed w-100 z-2'>
            <div className='flex space-between text-14 p20'>
                <Link className='link' to='/'>
                    {siteTitle}
                </Link>
                <div className='flex gap-90'>
                    <div className='flex justify-center align-center gap-5 m-hide pointer'>
                        <div className='circle' />
                        <p>Taking Q4 Bookings</p>
                    </div>
                    <p>Brand & Digital Design</p>
                </div>
            </div>
        </header>
    )
}

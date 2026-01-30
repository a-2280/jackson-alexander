import React, { useEffect, useRef } from "react"

export default function Footer() {
    const ref = useRef()

    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("sal-animate")
                    observer.unobserve(el)
                }
            },
            { threshold: 0.9 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <footer className='bg-black'>
            <div ref={ref} className='fade-in p20 pt35 pb0  text-footer'>
                <div className='grid-2 m-flex m-flex-col'>
                    <div className='text-30'>
                        <h2>Based in Australia</h2>
                        <h2>Working Globally</h2>
                    </div>
                    <div className='grid-2'>
                        <div className='span-2 grid-2 m-flex m-flex-col'>
                            <p>Contact</p>
                            <a className='opacity-4' href='mailto:#'>
                                hello@jacksonalexander.com.au
                            </a>
                        </div>
                        <div className='span-2 grid-2'>
                            <p>Follow Me</p>
                            <div className='flex flex-col'>
                                <a className='opacity-4' href='#'>
                                    Instagram
                                </a>
                                <a className='opacity-4' href='#'>
                                    LinkedIn
                                </a>
                                <a className='opacity-4' href='#'>
                                    X
                                </a>
                            </div>
                        </div>
                        <div className='span-2 grid-2'>
                            <p>Newsletter</p>
                            <input className='opacity-4' type='email' placeholder='Enter Email' />
                        </div>
                        <div className='span-2 grid-2'>
                            <p>Developed by</p>
                            <p className='opacity-4'>Carl Beaverson</p>
                        </div>
                        <div className='span-2 grid-2'>
                            <p>Ventures</p>
                            <p className='opacity-4'>Link Kit</p>
                        </div>
                    </div>
                </div>
                <ul className='jaco'>
                    <li>J</li>
                    <li>A</li>
                    <li>C</li>
                    <li>O</li>
                </ul>
            </div>
        </footer>
    )
}

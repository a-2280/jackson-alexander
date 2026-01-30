import React, { useState } from "react"
import { useSection } from "../../utils/SectionContext"

export default function Hero() {
    const ref = useSection(0)
    const [videoLoaded, setVideoLoaded] = useState(false)

    return (
        <section id='section-0' ref={ref}>
            <div className='h-50vh flex align-end p20 text-30 max-750 m-text-25'>
                <p data-sal className='fade-in'>
                    <span className='text-grey'>Jackson Alexander </span>is a brand and digital design partner helping founders, teams, and creatives create brands that evolve, scale, and connect.
                </p>
            </div>
            <div className='ratio-1920-1080 pos-rel h-100vh w-100 m-h-60vh'>
                <video onCanPlay={e => e.target.play()} autoPlay muted loop playsInline preload='auto' className={`fade-up bg-image${videoLoaded ? " sal-animate" : ""}`} onLoadedData={() => setVideoLoaded(true)} src='https://player.vimeo.com/progressive_redirect/playback/1127016409/rendition/1080p/file.mp4?loc=external&signature=26ba1b3eceb0887c4e74791dc26122bd90df0f2978bc0f6c70013da5d9cad77c' />
            </div>
        </section>
    )
}

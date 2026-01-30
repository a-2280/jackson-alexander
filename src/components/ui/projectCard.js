import React from "react"

export default function ProjectCard({ title, subtitle, image, video, badge, status }) {
    const Overlays = () => (
        <>
            <div className='absolute top-left m20 p10 bg-frost radius-10'>
                <p className='text-inverted'>{status}</p>
            </div>
            <div className='absolute top-right m20 p10 bg-frost radius-10'>
                <p className='text-inverted'>{badge}</p>
            </div>
        </>
    )

    return (
        <article className='project-card flex flex-col gap-20 pointer'>
            {video ? (
                <div className='ratio-453-558 pos-rel'>
                    <video onCanPlay={e => e.target.play()} className='bg-image radius-5' src={video} autoPlay muted loop playsInline preload='auto' />
                    <img className='absolute-center' src={image} alt={title} />
                    <Overlays />
                </div>
            ) : (
                <div className='ratio-453-558 pos-rel'>
                    <img className='bg-image radius-5' src={image} alt={title} />
                    <Overlays />
                </div>
            )}
            <div className='text-20 flex flex-col gap-2'>
                <h3>{title}</h3>
                <p className='text-grey'>{subtitle}</p>
            </div>
        </article>
    )
}

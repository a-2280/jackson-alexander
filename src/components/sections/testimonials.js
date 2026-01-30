import React, { useState } from "react"
import Section from "../ui/Section"
import { testimonials } from "../../lib/testimonials"
import { useSection } from "../../utils/SectionContext"

export default function Testimonials() {
    const sectionRef = useSection(3)
    const [index, setIndex] = useState(0)
    const current = testimonials[index]

    const hasPrev = index > 0
    const hasNext = index < testimonials.length - 1
    const prev = () => {
        if (hasPrev) setIndex(i => i - 1)
    }
    const next = () => {
        if (hasNext) setIndex(i => i + 1)
    }

    return (
        <div id='section-3' ref={sectionRef}>
            <Section title='Testimonials'>
                <div className='subgrid'>
                    <React.Fragment key={index}>
                        <h4 className='testimonial-content'>{current.name}</h4>
                        <p className='testimonial-content span-2 pb40'>{current.description}</p>
                    </React.Fragment>
                    <div />
                    <div className='ratio-220-150 pos-rel h-150px w-220px'>
                        <img className='bg-image' src={current.image} alt='Testimonial image' />
                    </div>
                    <div data-sal className='fade-in flex justify-end align-end'>
                        <div className='flex gap-5'>
                            <p onClick={prev} className={hasPrev ? "text-black" : ""} style={{ cursor: hasPrev ? "pointer" : "default" }}>
                                Prev
                            </p>
                            <p onClick={next} className={hasNext ? "text-black" : ""} style={{ cursor: hasNext ? "pointer" : "default" }}>
                                Next
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

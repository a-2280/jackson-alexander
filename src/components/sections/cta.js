import React from "react"
import CtaButton from "../ui/ctaButton"
import { useSection } from "../../utils/SectionContext"

export default function Cta() {
    const ref = useSection(4)

    return (
        <section id='section-4' ref={ref} data-sal className='h-85vh w-100vw flex justify-center align-center'>
            <div data-sal className='fade-in flex flex-col align-center gap-20'>
                <h2 className='text-30'>Want to work together?</h2>
                <CtaButton />
            </div>
        </section>
    )
}

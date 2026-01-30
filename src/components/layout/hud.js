import React, { useContext, useEffect, useRef } from "react"
import CtaButton from "../ui/ctaButton"
import { SectionContext } from "../../utils/SectionContext"
import { useLenis } from "../../utils/lenis"

const SECTIONS = [{ label: "Introduction" }, { label: "Projects" }, { label: "About" }, { label: "Testimonials" }, { label: "Contact" }]

export default function Hud() {
    const { activeSection } = useContext(SectionContext)
    const lenis = useLenis()
    const hudRef = useRef()

    useEffect(() => {
        const footer = document.querySelector("footer")
        if (!footer) return
        const observer = new IntersectionObserver(([entry]) => hudRef.current?.classList.toggle("hud-hidden", entry.isIntersecting), { threshold: 0 })
        observer.observe(footer)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={hudRef} data-sal className='fade-in delay2 hud'>
            <div className='bg-grey flex p3 gap-3 radius-13 w-fit m-w-100 m-h-40px m-space-evenly'>
                {SECTIONS.map((section, i) => {
                    const isActive = activeSection === i
                    const num = String(i + 1).padStart(2, "0")

                    if (isActive) {
                        return (
                            <div key={i} className='bg-frost radius-10 p10 flex justify-center align-center default'>
                                <p className='text-10 text-white nowrap'>
                                    {num} {section.label}
                                </p>
                            </div>
                        )
                    }

                    return (
                        <div key={i} className='ratio-1 w-30px text-10 text-white flex justify-center align-center radius-10 pointer' onClick={() => lenis?.scrollTo(`#section-${i}`)}>
                            <p>{num}</p>
                        </div>
                    )
                })}
            </div>
            <CtaButton className='m-hide' />
        </div>
    )
}

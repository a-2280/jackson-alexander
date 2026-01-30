import React from "react"
import ProjectsGrid from "../ui/projectsGrid"
import { useSection } from "../../utils/SectionContext"

export default function Projects() {
    const ref = useSection(1)

    return (
        <section id='section-1' ref={ref} className='p20'>
            <div data-sal className='fade-in flex space-between m-flex-col'>
                <h2 className='text-30'>Selected Projects</h2>
                <p className='text-14'>Full Case Studies Coming Soon</p>
            </div>
            <ProjectsGrid />
        </section>
    )
}

import React from "react"
import Section from "../ui/Section"
import { useSection } from "../../utils/SectionContext"

export default function About() {
    const ref = useSection(2)

    return (
        <div id='section-2' ref={ref}>
            <Section title='About'>
                <div className='subgrid'>
                    <h3 data-sal className='fade-in text-30 text-black span-3 m-text-20'>
                        Creating Change for Forward Thinking Companies.
                    </h3>
                    <h4 data-sal className='fade-in'>
                        Bio
                    </h4>
                    <div className='span-2'>
                        <p data-sal className='fade-in'>
                            Jackson Alexander is a brand and digital design practice helping ambitious companies evolve through thoughtful, strategic design.
                        </p>
                        <br />
                        <p data-sal className='fade-in'>
                            Led by Jackson Todd, a designer with over 10 years of experience, the practice is built on the belief that great design starts with understanding. That means getting to know the business, the people behind it, and the change they want to make.
                        </p>
                        <br />
                        <p data-sal className='fade-in'>
                            We work closely with founders and teams to create clear, purposeful brands that are both visually strong and strategically grounded. The practice is independently led but expands through a trusted network of collaborators, allowing us to stay agile, focused, and deeply involved in every project.
                        </p>
                    </div>
                    <h4 data-sal className='fade-in'>
                        Services
                    </h4>
                    <ul data-sal className='fade-in'>
                        <li>Art Direction</li>
                        <li>Brand Identity</li>
                        <li>Brand Strategy</li>
                        <li>UI/UX</li>
                        <li>Website Design</li>
                        <li>Campaign</li>
                        <li>Creative Direction</li>
                        <li>Digital</li>
                        <li>Graphic Design</li>
                    </ul>
                    <ul data-sal className='fade-in'>
                        <li>Illustration</li>
                        <li>NamingPackaging</li>
                        <li>Photography & Motion</li>
                        <li>Production</li>
                        <li>Publication Design</li>
                        <li>Signage & Wayfinding</li>
                        <li>Creative Direction</li>
                        <li>Strategy</li>
                        <li>Website Development</li>
                    </ul>
                    <h4 data-sal className='fade-in'>
                        Experience
                    </h4>
                    <ul data-sal className='fade-in'>
                        <li>Architecture & Interiors</li>
                        <li>Arts & Culture</li>
                        <li>Beauty & Lifestyle</li>
                        <li>Corporate</li>
                        <li>Events</li>
                        <li>Ecommerce</li>
                        <li>Fashion</li>
                        <li>Festivals</li>
                    </ul>
                    <ul data-sal className='fade-in'>
                        <li>Illustration</li>
                        <li>NamingPackaging</li>
                        <li>Photography & Motion</li>
                        <li>Production</li>
                        <li>Publication Design</li>
                        <li>Signage & Wayfinding</li>
                        <li>Creative Direction</li>
                        <li>Strategy</li>
                    </ul>
                </div>
            </Section>
        </div>
    )
}

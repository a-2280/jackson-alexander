import React from "react"
import { ReactLenis } from "../utils/lenis"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Testimonials from "../components/sections/testimonials"
import Spacer from "../components/spacer"
import Cta from "../components/sections/cta"
import Hud from "../components/layout/hud"
import { SectionProvider } from "../utils/SectionContext"

const SCROLL_OPTIONS = {
    duration: 1.2,
    orientation: "vertical",
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
}

export default function IndexPage() {
    return (
        <ReactLenis root options={SCROLL_OPTIONS}>
            <SectionProvider>
                <Layout>
                    <Hud />
                    <Hero />
                    <Projects />
                    <About />
                    <Spacer />
                    <Testimonials />
                    <Cta />
                </Layout>
            </SectionProvider>
        </ReactLenis>
    )
}

export const Head = () => <Seo title='Home' />

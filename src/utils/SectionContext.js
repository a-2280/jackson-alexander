import React, { createContext, useContext, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const SectionContext = createContext(null)

export function SectionProvider({ children }) {
    const [activeSection, setActiveSection] = useState(0)

    return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>
}

export function useSection(index) {
    const { setActiveSection } = useContext(SectionContext)

    const { ref, inView } = useInView({
        rootMargin: "-50% 0px -50% 0px",
    })

    useEffect(() => {
        if (!inView) return
        setActiveSection(index)
    }, [inView, index])

    return ref
}

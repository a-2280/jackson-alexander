import React from "react"

export default function Section({ title, children }) {
    return (
        <section className='section-grid p20 m-flex'>
            <h2 data-sal className='fade-in text-30 h-fit'>
                {title}
            </h2>
            <div>{children}</div>
        </section>
    )
}

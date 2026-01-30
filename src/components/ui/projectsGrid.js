import React from "react"
import { projects } from "../../lib/projects"
import ProjectCard from "./projectCard"

export default function ProjectsGrid() {
    return (
        <div className='grid grid-gap-80 mt80 mb60 m-flex m-flex-col m-gap-30'>
            {projects.map(project => (
                <ProjectCard key={project.id} title={project.title} subtitle={project.subtitle} image={project.image} video={project.video} badge={project.badge} status={project.status} />
            ))}
        </div>
    )
}

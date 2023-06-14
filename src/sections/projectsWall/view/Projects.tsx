import { projects } from 'src/data/schoolProjects';
import ProjectsView from '../main';

export default function ProjectsPage() {
    return (
        <>
            <ProjectsView projects={projects} />
        </>
    )
}
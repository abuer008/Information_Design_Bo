import { Helmet } from 'react-helmet-async';
// sections
import ProjectsPage from "../sections/projectsWall/view";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Muthesius Design Projects | Bo Kong</title>
      </Helmet>

        <ProjectsPage />

    </>
  );
}

import { Navigate, useRoutes } from 'react-router-dom';

//
import {
  // Common
  Page404,
  Page500,
  HomePage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main layout
    {
      children: [
        { element: <HomePage />, index: true },
      ],
    },
    // Simple layout
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

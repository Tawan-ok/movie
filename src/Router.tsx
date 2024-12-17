import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
            </Suspense>
        ),
    },
    {
        path: "/movie/:id",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <MovieDetailPage />
            </Suspense>
        ),
    },{
        path:"*",
        element :(
            <Suspense fallback={<div>Loading...</div>}>
             <PageNotFound/>
            </Suspense>
        )
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;

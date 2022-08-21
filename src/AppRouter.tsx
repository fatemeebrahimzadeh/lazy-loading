import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Spinner from './components/UI/spinner/Spinner';

const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Spinner isLoading={true} />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: 'admin',
            element: <AdminPage />
        },
        {
            path: 'customer',
            element: <CustomerPage />
        },
        {
            path: '*',
            element: <p>***</p>,
            children: [
                { path: '404', element: <p>404</p> },
                { path: '*', element: <Navigate to="/404" replace /> },
            ],
        },
        {
            path: '/',
            element: <HomePage />,
            children: [
                { element: <HomePage />, index: true }
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}

const HomePage = Loadable(lazy(() => import('./components/home/Home')));
const AdminPage = Loadable(lazy(() => import('./components/admin/Admin')));
const CustomerPage = Loadable(lazy(() => import('./components/customer/Customer')));

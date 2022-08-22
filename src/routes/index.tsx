import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Spinner from '../components/UI/spinner/Spinner';

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
            path: '/',
            element: <HomePage />,
        }
    ]);
}

const HomePage = Loadable(lazy(() => import('../pages/home/Home')));
const AdminPage = Loadable(lazy(() => import('../pages/admin/Admin')));
const CustomerPage = Loadable(lazy(() => import('../pages/customer/Customer')));

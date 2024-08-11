import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import('../components/Layout'))
const Home = lazy(() => import('../pages/Home'))
const Wallet = lazy(() => import('../pages/Wallet'))
const SupportAssets = lazy(() => import('../pages/SupportAssets'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Layout></Layout></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense><Home></Home></Suspense>
            },
            {
                path: '/wallet',
                element: <Suspense><Wallet></Wallet></Suspense>
            },
            {
                path: '/support-assets',
                element: <Suspense><SupportAssets></SupportAssets></Suspense>
            }
        ]
    }
])

export default router

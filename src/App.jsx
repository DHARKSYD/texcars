import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Error from './pages/Error'
import Header from './components/Header'
import Login from './pages/Login'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import ProductCard from './components/ProductCard'
import { ConfigProvider } from 'antd'
import AosProvider from './components/AosProvider'
import { useSelector } from 'react-redux'

// Add a placeholder for Overview to prevent ReferenceError
function Overview() {
  return <div>Dashboard Overview</div>
}

export default function App() {

  function PageLayout() {
    return <>
      <Header />
      <div className='min-h-[80vh]'>
        <Outlet />
      </div>
      <Footer />
    </>
  }

  function ProtectedPagesLayout() {
    const site = useSelector(state => state.site)

    if (!site.isLoggedIn) {
      return <Navigate to="/login" replace/>
    }

    return (
      <div className='min-h-[80vh]'>
        <Outlet />
      </div>
    )
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/login', element: <Login /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
        { path: '/productcard', element: <ProductCard /> },
      ],
      errorElement: <Error />
    },
    {
      path: '/dashboard',
      element: <ProtectedPagesLayout />,
      children: [
        {
          path: "/dashboard/overview",
          element: <Overview />
        }
      ]
    }
  ])

  return (
    <>
      <Toaster/>
      <ConfigProvider/>
      <AosProvider>
        <RouterProvider router={pageRoutes} />
      </AosProvider>
    </>
  )
}

import { lazy, Suspense } from 'react'
// import styles from './app.module.css'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import("../page/Layout/Layout"));
const AboutUs = lazy(() => import("../page/AboutUs/AboutUs"));

export const App = () => {
  return (
    <Suspense fallback={
      <div>Loading...</div>
    }>
      <Routes>
        <Route path={'/'} element={<Layout />} />
        <Route path={'/about-us'} element={<AboutUs />} />
      </Routes>
    </Suspense>
  )
}

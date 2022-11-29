import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from '../Views/AboutPage'
import Footer from '../Views/FooterPage'
import HomePage from '../Components/HomeComponents/HomePage'
import SearchPage from '../Components/HomeComponents/SearchPage'
import MisionPage from '../Views/MisionPage'
import VisionPage from '../Views/VisionPage'
import HamburgerPage from '../Components/MenuComponents/HamburgerPage'
import { Navbar } from '../ui/NavBar'
import SesionsPage from '../Components/MenuComponents/SesionsPage'
import CalendarPage from '../Components/MenuComponents/CalendarPage'

const HomeRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container" >
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="mision" element={<MisionPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hamburger" element={<HamburgerPage />} />
          <Route path="sesiones" element={<SesionsPage />} />
          <Route path="calendar" element={<CalendarPage />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>

      <Footer />

    </>
  )
}

export default HomeRoutes

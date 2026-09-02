import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import Technologies from '../components/Technologies'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function HomePage() {
  useEffect(() => {
    document.title = 'alexweb — Full Stack Web Developer'
  }, [])

  // Scroll-reveal — subtle fade-up on cards/sections
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-bg relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <FeaturedProjects />
        <Technologies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

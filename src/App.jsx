import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <div className="shell">
        <Hero />
        <main>
          <Work />
          <Experience />
        </main>
        <Footer />
      </div>
    </>
  )
}

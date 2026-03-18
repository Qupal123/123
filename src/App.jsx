import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CharacterGallery from './components/CharacterGallery'
import Stats from './components/Stats'
import About from './components/About'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  const [selectedBrawler, setSelectedBrawler] = useState(null)

  return (
    <div className="app">
      <Header />
      <Hero />
      <CharacterGallery onSelectBrawler={setSelectedBrawler} />
      <About />
      {selectedBrawler && <Stats brawler={selectedBrawler} onClose={() => setSelectedBrawler(null)} />}
      <Footer />
    </div>
  )
}

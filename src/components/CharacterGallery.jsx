import { useState } from 'react'
import BrawlerCard from './BrawlerCard'
import { BRAWLERS } from '../data/brawlers'
import '../styles/CharacterGallery.css'

export default function CharacterGallery({ onSelectBrawler }) {
  const [filter, setFilter] = useState('all')

  const filteredBrawlers = filter === 'all' 
    ? BRAWLERS 
    : BRAWLERS.filter(b => b.rarity === filter)

  const rarities = ['all', ...new Set(BRAWLERS.map(b => b.rarity))]

  return (
    <section className="gallery" id="characters">
      <div className="gallery-container">
        <h2 className="gallery-title">CHOOSE YOUR BRAWLER</h2>
        
        <div className="filter-buttons">
          {rarities.map(rarity => (
            <button
              key={rarity}
              className={`filter-btn ${filter === rarity ? 'active' : ''}`}
              onClick={() => setFilter(rarity)}
            >
              {rarity === 'all'
                ? 'All Brawlers'
                : rarity.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        <div className="brawlers-grid">
          {filteredBrawlers.map(brawler => (
            <BrawlerCard
              key={brawler.id}
              brawler={brawler}
              onClick={() => onSelectBrawler(brawler)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

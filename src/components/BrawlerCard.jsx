import '../styles/BrawlerCard.css'

export default function BrawlerCard({ brawler, onClick }) {
  const getRarityColor = (rarity) => {
    const colors = {
      common: '#888',
      uncommon: '#4ade80',
      rare: '#3b82f6',
      super_rare: '#a855f7',
      epic: '#f59e0b',
      mythic: '#ef4444',
      legendary: '#fbbf24'
    }
    return colors[rarity] || '#888'
  }

  return (
    <div 
      className="brawler-card"
      onClick={onClick}
      style={{ '--rarity-color': getRarityColor(brawler.rarity) }}
    >
      <div className="card-image">
        <div className="image-placeholder">{brawler.emoji}</div>
      </div>
      <div className="card-info">
        <h3 className="card-name">{brawler.name}</h3>
        <div className="card-stats">
          <div className="stat">
            <span className="stat-label">HP</span>
            <span className="stat-value">{brawler.health}</span>
          </div>
          <div className="stat">
            <span className="stat-label">ATK</span>
            <span className="stat-value">{brawler.attack}</span>
          </div>
        </div>
        <span className="card-rarity">{brawler.rarity.toUpperCase()}</span>
      </div>
    </div>
  )
}

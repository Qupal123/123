import '../styles/Stats.css'

export default function Stats({ brawler, onClose }) {
  return (
    <div className="stats-modal-overlay" onClick={onClose}>
      <div className="stats-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-emoji">{brawler.emoji}</div>
          <h2>{brawler.name}</h2>
        </div>

        <div className="modal-content">
          <p className="modal-description">{brawler.description}</p>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-icon">❤️</span>
              <h4>Health</h4>
              <p>{brawler.health}</p>
            </div>
            <div className="stat-box">
              <span className="stat-icon">⚔️</span>
              <h4>Attack</h4>
              <p>{brawler.attack}</p>
            </div>
            <div className="stat-box">
              <span className="stat-icon">⚡</span>
              <h4>Speed</h4>
              <p>{brawler.speed}</p>
            </div>
            <div className="stat-box">
              <span className="stat-icon">🎯</span>
              <h4>Range</h4>
              <p>{brawler.range}</p>
            </div>
          </div>

          <div className="abilities">
            <h3>ABILITIES</h3>
            <div className="ability">
              <h4>Main Attack</h4>
              <p>{brawler.mainAttack}</p>
            </div>
            <div className="ability">
              <h4>Super</h4>
              <p>{brawler.super}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

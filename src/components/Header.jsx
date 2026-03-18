import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">⭐ BRAWL STARS</span>
          <span className="logo-subtitle">Character Hub</span>
        </div>
        <nav className="nav">
          <a href="#characters">Brawlers</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  )
}

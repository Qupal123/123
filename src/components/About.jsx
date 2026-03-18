import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Character Hub</h2>
        <div className="about-content">
          <p>
            Welcome to the ultimate Brawl Stars Character Hub! This site is dedicated to
            providing players with detailed information about their favorite brawlers,
            their unique abilities, and stats.
          </p>
          <p>
            Whether you're a seasoned veteran or just starting your journey in the
            Brawl Stars universe, our database helps you understand the strengths
            and weaknesses of each brawler to improve your gameplay.
          </p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🔍</span>
              <h3>Detailed Stats</h3>
              <p>Check health, attack, and speed for every brawler.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <h3>Abilities</h3>
              <p>Learn about Main Attacks and powerful Supers.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💎</span>
              <h3>Rarity Guide</h3>
              <p>Filter brawlers by their rarity and unlock status.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

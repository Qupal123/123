import '../styles/Hero.css'

export default function Hero() {
  const scrollToCharacters = () => {
    const section = document.getElementById('characters');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Brawl Stars Universe</h1>
        <p className="hero-subtitle">Discover legendary brawlers and their powerful abilities</p>
        <button className="hero-btn" onClick={scrollToCharacters}>Explore Brawlers</button>
      </div>
      <div className="hero-glow"></div>
    </section>
  )
}

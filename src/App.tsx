import { ArrowDown, ArrowUpRight, Check, ChevronRight, Leaf, Menu, MoveUpRight, Sun, Zap } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/33829178/pexels-photo-33829178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const projectImage = 'https://images.pexels.com/photos/9875674/pexels-photo-9875674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const projectImageTwo = 'https://images.pexels.com/photos/18825426/pexels-photo-18825426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const services = [
  { number: '01', title: 'Home energy', text: 'A smarter roof, a calmer bill. We design solar systems around how your home actually lives.', icon: Sun },
  { number: '02', title: 'Power for business', text: 'Turn your roof into a high-performing asset with reliable, visible energy savings.', icon: Zap },
  { number: '03', title: 'Install & care', text: 'From first panel to long-term performance, our team stays close at every step.', icon: MoveUpRight },
  { number: '04', title: 'Battery backup', text: 'Keep the lights on and your essentials running when the grid takes a pause.', icon: Leaf },
];

const projects = [
  { location: 'Palm Springs, CA', title: 'The Sol House', image: heroImage, stat: '87% less grid power' },
  { location: 'Austin, TX', title: 'Juniper Works', image: projectImage, stat: '42.6 kW system' },
  { location: 'Scottsdale, AZ', title: 'Canyon Residence', image: projectImageTwo, stat: '24 panels installed' },
];

function App() {
  return (
    <main className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> Now booking autumn installations <a href="#contact">Get a free energy plan <ArrowUpRight size={14} /></a></div>

      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Solstice home"><span className="brand-mark"><Sun size={18} strokeWidth={2.5} /></span><span>solstice<span className="brand-dot">.</span></span></a>
        <div className="nav-links"><a href="#about">Our story</a><a href="#services">Solutions</a><a href="#projects">Field notes</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Get a quote <ArrowUpRight size={16} /></a>
        <a className="mobile-menu" href="#contact" aria-label="Open contact"><Menu size={21} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Independent solar, thoughtfully done</div>
          <h1>Power your<br /><em>everyday.</em></h1>
          <p className="hero-intro">Clean energy for the places you call home, work, and yours. Designed with intention. Installed to last.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Start your switch <ArrowUpRight size={18} /></a><a className="text-link" href="#projects">See our work <ChevronRight size={16} /></a></div>
          <div className="hero-proof"><div className="avatars"><span>AM</span><span>JL</span><span>SK</span></div><div><strong>4.9 / 5</strong><small>Loved by 800+ energy owners</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={heroImage} alt="A modern home with solar panels in a sunlit field" /><div className="image-wash" /></div>
          <div className="floating-note"><span className="note-icon"><Leaf size={16} /></span><span><strong>Made for more sun.</strong><small>Every panel, purposefully placed.</small></span></div>
          <div className="sun-orbit"><span>100%</span><small>renewable<br />potential</small></div>
        </div>
      </section>

      <section className="ticker" aria-label="Company highlights"><div><strong>12 yrs</strong><span>in the sun</span></div><div><strong>2.8k</strong><span>systems live</span></div><div><strong>31m</strong><span>kg CO₂ avoided</span></div><div className="ticker-note"><Sun size={17} /> Energy that gives back</div></section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-kicker">A brighter way forward <span>✳</span></div>
        <div className="intro-grid"><h2>Good for your <em>place.</em><br />Better for the planet.</h2><div><p className="large-copy">Solstice is an independent solar company for people who care about where their energy comes from — and where it takes them.</p><p className="muted-copy">No noise. No one-size-fits-all packages. Just beautifully considered solar, built around your life and backed by people who know their craft.</p><a className="text-link" href="#services">Why Solstice <ChevronRight size={16} /></a></div></div>
      </section>

      <section className="services-section section-wrap" id="services"><div className="section-heading"><div><div className="section-kicker">What we do <span>✳</span></div><h2>Energy, <em>reimagined.</em></h2></div><p>From the first sketch to your hundredth sunny morning, we make going solar feel simple.</p></div><div className="service-grid">{services.map(({ number, title, text, icon: Icon }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>)}</div></section>

      <section className="why-section"><div className="why-visual"><div className="grid-lines" /><div className="why-sun"><Sun size={44} strokeWidth={1.2} /></div><div className="why-caption">The future is already<br /><em>shining.</em></div></div><div className="why-copy"><div className="section-kicker">The Solstice standard <span>✳</span></div><h2>More than panels.<br /><em>A better rhythm.</em></h2><p>We believe good energy should feel good. That means clear advice, beautiful work, and a team that treats your home like it matters — because it does.</p><ul>{['A plan shaped around your real usage', 'Premium panels with honest performance', 'One dedicated team from quote to care'].map(item => <li key={item}><span><Check size={15} /></span>{item}</li>)}</ul><a className="button button-light" href="#contact">Meet your energy goals <ArrowUpRight size={17} /></a></div></section>

      <section className="projects-section section-wrap" id="projects"><div className="section-heading"><div><div className="section-kicker">Field notes <span>✳</span></div><h2>Good work, <em>out in the world.</em></h2></div><a className="text-link" href="#contact">Explore all projects <ChevronRight size={16} /></a></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><div><small>{project.location}</small><h3>{project.title}</h3></div><span>{project.stat}</span></div></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-kicker">Let’s make a plan <span>✳</span></div><h2>Ready to make<br /><em>the switch?</em></h2><p>Tell us a little about your place. We’ll tell you what’s possible — no pressure, ever.</p><a className="button button-dark" href="mailto:hello@solstice.energy">Talk to a solar guide <ArrowUpRight size={18} /></a></div><div className="contact-sun"><Sun size={190} strokeWidth={0.7} /></div></section>

      <footer className="footer"><div className="footer-main"><a className="brand" href="#top"><span className="brand-mark"><Sun size={18} strokeWidth={2.5} /></span><span>solstice<span className="brand-dot">.</span></span></a><p>Energy for a more<br />considered tomorrow.</p><div className="footer-links"><div><strong>Explore</strong><a href="#about">Our story</a><a href="#services">Solutions</a><a href="#projects">Field notes</a></div><div><strong>Say hello</strong><a href="mailto:hello@solstice.energy">hello@solstice.energy</a><a href="tel:+18007628542">+1 800 762 8542</a></div></div></div><div className="footer-bottom"><span>© 2024 Solstice Energy Co.</span><span>Made for the long light.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

export default App;

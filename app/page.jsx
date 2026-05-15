import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Novelle — Wellness Spa & Beauty Studio</title>
        <meta name="description" content="Indulge in a sanctuary of calm. Novelle offers bespoke treatments crafted to restore, renew, and reveal your most radiant self." />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        :root {
          --rose: #f9e8ec;
          --rose-mid: #f2c4d0;
          --rose-deep: #c97d92;
          --rose-dark: #8b4a5c;
          --cream: #fdf7f5;
          --text: #3a2530;
          --muted: #9e7080;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Jost', sans-serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
        }

        /* NAV */
        .nov-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 4rem;
          background: rgba(253,247,245,0.95);
          position: fixed;
          top: 0; width: 100%;
          z-index: 100;
          border-bottom: 1px solid var(--rose-mid);
        }
        .nov-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: var(--rose-dark);
          text-decoration: none;
        }
        .nov-nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nov-nav-links a {
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.3s;
        }
        .nov-nav-links a:hover { color: var(--rose-dark); }
        .nov-nav-btn {
          background: var(--rose-dark);
          color: #fff;
          padding: 0.55rem 1.5rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }
        .nov-nav-btn:hover { background: var(--rose-deep); }

        /* HERO */
        .nov-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 80px;
        }
        .nov-hero-left {
          background: var(--rose);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem;
        }
        .nov-hero-tag {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--rose-deep);
          margin-bottom: 1.5rem;
        }
        .nov-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4.2rem;
          font-weight: 300;
          line-height: 1.15;
          color: var(--rose-dark);
          margin-bottom: 1.5rem;
        }
        .nov-hero-title em { font-style: italic; }
        .nov-hero-sub {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--muted);
          max-width: 380px;
          margin-bottom: 2.5rem;
        }
        .nov-hero-ctas { display: flex; gap: 1rem; align-items: center; }
        .nov-btn-primary {
          background: var(--rose-dark);
          color: #fff;
          padding: 0.85rem 2.2rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }
        .nov-btn-primary:hover { background: var(--rose-deep); }
        .nov-btn-ghost {
          background: transparent;
          color: var(--rose-dark);
          padding: 0.85rem 2.2rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1.5px solid var(--rose-deep);
          cursor: pointer;
          transition: all 0.3s;
        }
        .nov-btn-ghost:hover { background: var(--rose-mid); }
        .nov-hero-right {
          position: relative;
          background: linear-gradient(135deg, #f0d0d8 0%, #e8b8c4 40%, #d4a0b0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .nov-hero-visual { text-align: center; z-index: 2; position: relative; }
        .nov-hero-circle {
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }
        .nov-hero-circle-inner {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          color: rgba(255,255,255,0.7);
        }
        .nov-hero-badge {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.05em;
        }
        .nov-deco {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .nov-deco2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* STRIP */
        .nov-strip {
          background: var(--rose-dark);
          padding: 1rem 4rem;
          display: flex;
          gap: 4rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nov-strip-item {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

        /* SECTIONS */
        .nov-section { padding: 5rem 4rem; }
        .nov-section-label {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--rose-deep);
          margin-bottom: 0.75rem;
        }
        .nov-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--rose-dark);
          margin-bottom: 1rem;
        }
        .nov-section-sub {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.8;
          max-width: 480px;
        }

        /* ABOUT */
        .nov-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .nov-about-img {
          height: 420px;
          background: linear-gradient(160deg, #f5d5de, #e8b8c4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-style: italic;
          color: rgba(139,74,92,0.5);
        }
        .nov-stats { display: flex; gap: 2rem; margin-top: 2.5rem; }
        .nov-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          color: var(--rose-dark);
        }
        .nov-stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* SERVICES */
        .nov-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .nov-service-card {
          background: var(--rose);
          padding: 2rem;
          transition: transform 0.3s;
        }
        .nov-service-card:hover { transform: translateY(-4px); }
        .nov-service-icon { font-size: 2rem; margin-bottom: 1rem; }
        .nov-service-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          color: var(--rose-dark);
          margin-bottom: 0.5rem;
        }
        .nov-service-desc { font-size: 0.87rem; line-height: 1.7; color: var(--muted); }
        .nov-service-price {
          margin-top: 1rem;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          color: var(--rose-deep);
          text-transform: uppercase;
        }

        /* VIDEO */
        .nov-video-section { background: #f5eaed; padding: 5rem 4rem; }
        .nov-video-wrap {
          max-width: 800px;
          margin: 2.5rem auto 0;
          background: #e8c4cf;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
        }
        .nov-play-btn {
          width: 70px; height: 70px;
          border-radius: 50%;
          background: var(--rose-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nov-play-arrow {
          width: 0; height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 20px solid #fff;
          margin-left: 4px;
        }
        .nov-video-label {
          position: absolute;
          bottom: 1.5rem; left: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: rgba(139,74,92,0.6);
          font-size: 1rem;
        }

        /* TESTIMONIALS */
        .nov-testimonials { background: var(--rose); padding: 5rem 4rem; }
        .nov-testimonials-inner { max-width: 700px; margin: 0 auto; text-align: center; }
        .nov-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-style: italic;
          line-height: 1.7;
          color: var(--rose-dark);
          margin: 2rem 0;
        }
        .nov-quote-author {
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .nov-stars { color: var(--rose-deep); font-size: 1rem; margin-bottom: 0.5rem; }

        /* SOCIAL */
        .nov-social-strip {
          background: var(--cream);
          padding: 3rem 4rem;
          border-top: 1px solid var(--rose-mid);
          border-bottom: 1px solid var(--rose-mid);
        }
        .nov-social-inner { display: flex; align-items: center; justify-content: space-between; }
        .nov-social-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-style: italic;
          color: var(--rose-dark);
        }
        .nov-social-icons { display: flex; gap: 1.5rem; }
        .nov-soc-icon {
          width: 42px; height: 42px;
          border: 1px solid var(--rose-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--rose-dark);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .nov-soc-icon:hover { background: var(--rose-dark); color: #fff; border-color: var(--rose-dark); }

        /* FOOTER */
        .nov-footer {
          background: var(--rose-dark);
          color: rgba(255,255,255,0.7);
          padding: 3rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .nov-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .nov-footer-tagline { font-size: 0.82rem; line-height: 1.7; }
        .nov-footer-col-title {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 1rem;
        }
        .nov-footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .nov-footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.87rem; transition: color 0.3s; }
        .nov-footer-links a:hover { color: #fff; }
        .nov-footer-bottom {
          background: var(--rose-dark);
          padding: 1rem 4rem;
          text-align: center;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="nov-nav">
        <a href="/" className="nov-logo">Novelle</a>
        <ul className="nov-nav-links">
          <li><a href="/">Acasă</a></li>
          <li><a href="/about">Despre noi</a></li>
          <li><a href="/services">Servicii</a></li>
          <li><a href="/gallery">Galerie</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/booking" className="nov-nav-btn" style={{
  background: "#8b4a5c",
  color: "#fff",
  padding: "0.55rem 1.5rem",
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block"
}}>Programează-te acum</a>
      </nav>

      {/* HERO */}
      <section className="nov-hero">
        <div className="nov-hero-left">
          <p className="nov-hero-tag">Spa & Studio de frumusețe</p>
          <h1 className="nov-hero-title">
            Unde<br /><em>transformarea</em><br />ta prinde viață
          </h1>
          <p className="nov-hero-sub">
          Un spațiu al liniștii și reconectării. Novelle creează experiențe personalizate de beauty și wellbeing, menite să te revitalizeze și să evidențieze cea mai luminoasă versiune a ta.          </p>
          <div className="nov-hero-ctas">
            <Link href="/booking" className="nov-btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
              Programează-te acum
            </Link>
            <Link href="/services" className="nov-btn-ghost" style={{ textDecoration: "none", display: "inline-block" }}>
              Serviciile noastre
            </Link>
          </div>
        </div>
        <div className="nov-hero-right">
          <div className="nov-deco" />
          <div className="nov-deco2" />
          <div className="nov-hero-visual">
            <div className="nov-hero-circle">
              <span className="nov-hero-circle-inner">✿</span>
            </div>
            <p className="nov-hero-badge">est. 2024 · București</p>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="nov-strip">
        {["Spa & Relaxation", "Skin & Facial Care", "Body Rituals", "Beauty Studio", "Wellness Coaching"].map((s) => (
          <span key={s} className="nov-strip-item">{s}</span>
        ))}
      </div>

      {/* ABOUT */}
      <section className="nov-section">
        <div className="nov-about">
          <img 
            src="/images/day-at-spa.png" 
            alt="Povestea noastră" 
            style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} 
          />          
          <div>
            <p className="nov-section-label">Despre Novelle</p>
            <h2 className="nov-section-title">Frumusețe, relaxare și încredere într-un singur loc</h2>
            <p className="nov-section-sub" style={{ marginBottom: "1rem" }}>
              La Novelle, transformăm îngrijirea de sine într-o stare de spirit. Inspirați de echilibrul dintre frumusețea interioară și tendințele moderne, am creat un spațiu unde tratamentele noastre nu doar îți pun în valoare estetica, ci îți reîncarcă energia și spiritu
              </p>
            <p className="nov-section-sub">
             Specialiștii noștri experți combină tehnici consacrate cu inovația modernă pentru a oferi o experiență unică în București.
            </p>
            <div className="nov-stats">
              {[["2+", "Ani de experiență"], ["500+", "Clienți fericiți"], ["18", "Tratamente"]].map(([num, label]) => (
                <div key={label}>
                  <div className="nov-stat-num">{num}</div>
                  <div className="nov-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="nov-section" style={{ background: "#fef5f7" }}>
        <p className="nov-section-label">Ce oferim</p>
        <h2 className="nov-section-title">Tratamentele noastre emblematice</h2>
        <div className="nov-services-grid">
          {[
            { icon: "🌸", name: "Clean Girl Glow",  desc: "Un ritual facial luxuriant ce utilizează extracte pure de trandafir și tehnici de masaj limfatic pentru a hidrata profund și a oferi tenului acea strălucire naturală, de tip 'glass skin'.", price: "180 lei · 60 min" },
            { icon: "🕊️", name: "Soft Glam Experience",      desc: "Nu este doar un machiaj, ci o experiență de înfrumusețare subtilă. Punem accent pe trăsăturile tale naturale prin tehnici moderne de conturare, oferindu-ți un look impecabil, dar aerat, perfect pentru orice feed de Instagram.",           price: "180 lei · 90 min" },
            { icon: "💆", name: "Swedish Massage",    desc: "Masaj terapeutic clasic, conceput special pentru a topi tensiunea musculară și a restabili starea de relaxare profundă a spiritului, într-o atmosferă multisenzorială.",                    price: "150 lei · 60 min" },
            { icon: "✨", name: "Glow Body Wrap",       desc: "Un tratament corporal complet ce include exfoliere delicată și împachetări bogate în minerale. Îți hrănește pielea și o lasă catifelată, oferindu-ți strălucirea necesară pentru a te simți perfect.",            price: "220 lei · 75 min" },
            { icon: "💅", name: "Velvet Touch",        desc: "Servicii complete de manichiură, gene și sprâncene. Folosim cele mai noi trenduri vizuale pentru a-ți asigura un look personalizat, gata de postat.",          price: "De la 80 lei · variază" },
            { icon: "🌿", name: "Mindful Reset",      desc: "O experiență holistică ce îmbină masajul cu pietre calde de bazalt și aromaterapie. Este serviciul nostru de tip 'reset' total, creat pentru a echilibra mintea și corpul în cel mai estetic mod posibil.",            price: "280 lei · 3 ore" },
          ].map((s) => (
            <div key={s.name} className="nov-service-card">
              <div className="nov-service-icon">{s.icon}</div>
              <div className="nov-service-name">{s.name}</div>
              <div className="nov-service-desc">{s.desc}</div>
              <div className="nov-service-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* poza */}
      <div className="nov-video-section">
        <p className="nov-section-label">Experimentează Novelle</p>
        <h2 className="nov-section-title">Descoperă sanctuarul nostru</h2>
      <div style={{ maxWidth: "800px", margin: "2.5rem auto 0", overflow: "hidden", cursor: "pointer" }}>
  <img 
    src="/images/locatia.png" 
    alt="Novelle Spa" 
    style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }} 
  />
</div>
        <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#9e7080", marginTop: "0.8rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", letterSpacing: "0.05em" }}>
          Str. Florilor 12, București
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div className="nov-testimonials">
        <div className="nov-testimonials-inner">
          <p className="nov-section-label" style={{ textAlign: "center" }}>Poveștile clienților noștri</p>
          <h2 className="nov-section-title" style={{ textAlign: "center" }}>Ce spun clienții noștri</h2>
          <div className="nov-stars">★★★★★</div>
          <p className="nov-quote">
            "Novelle este cel mai relaxant loc pe care l-am vizitat vreodată. Tratamentul facial mi-a lăsat tenul luminos zile întregi, iar personalul m-a făcut să mă simt complet confortabil încă din primul moment."
          </p>
          <p className="nov-quote-author">— Andreea M., Bucharest</p>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="nov-social-strip">
        <div className="nov-social-inner">
          <p className="nov-social-text">Urmărește-ne pe Social Media</p>
          <div className="nov-social-icons">
            {[["IG", "https://www.instagram.com/novelle_wellness/"], ["TikTok", "https://www.tiktok.com/@novelle.com6?_r=1&_t=ZN-96OAkbVl3Vm"]].map(([label, href]) => (
              <a key={label} className="nov-soc-icon" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="nov-footer">
        <div>
          <div className="nov-footer-logo">Novelle</div>
          <p className="nov-footer-tagline">Wellness Spa & Beauty Studio<br />București, România</p>
        </div>
        <div>
          <p className="nov-footer-col-title">Navigare</p>
          <ul className="nov-footer-links">
            {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="nov-footer-col-title">Contact</p>
          <ul className="nov-footer-links">
            <li><a href="#">📍 Str. Florilor 12, Bucharest</a></li>
            <li><a href="tel:+40721000000">📞 +40 721 000 000</a></li>
            <li><a href="mailto:hello@novelle.ro">✉️ aarfir@novelle.ro</a></li>
            <li><a href="/booking" style={{ marginTop: "0.5rem", display: "block" }}>Fă-ți o programare →</a></li>
          </ul>
        </div>
      </footer>
      <div className="nov-footer-bottom">
        © 2024 Novelle Spa & Beauty. All rights reserved.
      </div>
      <a href="/feedback" style={{ position: "fixed", bottom: "2rem", right: "2rem", background: "#8b4a5c", color: "#fff", padding: "0.8rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", zIndex: 999, boxShadow: "0 4px 20px rgba(139,74,92,0.3)" }}>
  💬 Feedback
</a>
    </>
  );
}

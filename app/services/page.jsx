export default function ServicesPage() {
const facials = [
    { icon: "🌸", name: "Clean Girl Glow", duration: "60 min", desc: "Ritual facial luxuriant cu extracte de trandafir și masaj limfatic pentru hidratare și acea strălucire naturală de tip 'glass skin'.", tags: ["Curățare profundă", "Mască trandafir", "Masaj facial", "Serum HA"], price: "180", featured: true, featuredLabel: "Bestseller" },
    { icon: "✨", name: "Luminosity Peel", duration: "45 min", desc: "Exfoliere enzimatică delicată pentru uniformizarea texturii pielii și redarea unui aspect sănătos și luminos instantaneu.", tags: ["Enzyme peel", "Mască iluminatoare", "Finish SPF"], price: "150" },
    { icon: "💧", name: "Hydra Infusion Facial", duration: "75 min", desc: "Terapie de hidratare intensă ce folosește tehnologie de infuzie pentru a livra nutrienți în straturile profunde ale pielii.", tags: ["Micro-infusion", "Serum colagen", "Mască hidratantă"], price: "220" },
    { icon: "🍃", name: "Express Glow-up", duration: "30 min", desc: "Un tratament rapid dar puternic pentru un boost de strălucire. Perfect înainte de un eveniment sau ca întreținere rapidă.", tags: ["Curățare express", "Vitamine", "Moisturise"], price: "120" },
  ];

  const massages = [
    { icon: "🕊️", name: "Swedish Reset Massage", duration: "90 min", desc: "Masaj clasic de relaxare folosind mișcări fluide pentru a elimina tensiunea și a restabili echilibrul de la cap până la picioare.", tags: ["Full body", "Uleiuri esențiale", "Prosoape calde"], price: "190", featured: true, featuredLabel: "Most Loved" },
    { icon: "🪨", name: "Hot Stone Ritual", duration: "90 min", desc: "Pietre vulcanice de bazalt încălzite, combinate cu tehnici de masaj pentru a elibera tensiunea musculară profundă și fluxul de energie.", tags: ["Pietre bazalt", "Deep tissue", "Focus spate"], price: "280" },
    { icon: "✨", name: "Glow Body Wrap", duration: "75 min", desc: "Exfoliere corporală urmată de o împachetare bogată în minerale pentru detoxifiere și o piele incredibil de fină și radiantă.", tags: ["Scrub organic", "Împachetare", "Hidratare"], price: "220" },
    { icon: "🌊", name: "Deep Tissue Therapy", duration: "60 min", desc: "Tehnici de presiune punctată pentru a ajunge la straturile musculare profunde, ameliorând durerile cronice și îmbunătățind postura.", tags: ["Recuperare", "Trigger points", "Stretching"], price: "200" },
  ];

  const beauty = [
    { icon: "💅", name: "Velvet Touch Nails", duration: "60 min", desc: "Manichiură sau pedichiură cu gel de lungă durată, îngrijirea cuticulelor și un masaj nutritiv pentru mâini sau picioare.", tags: ["Gel polish", "Trend Nails", "Masaj"], price: "120" },
    { icon: "👁️", name: "Lash & Brow Design", duration: "45 min", desc: "Laminare gene și sprâncene combinată cu stilizare de precizie pentru un look șlefuit și fără efort în fiecare zi.", tags: ["Lash lift", "Laminare", "Stilizare"], price: "160" },
    { icon: "💄", name: "Soft Glam Experience", duration: "90 min", desc: "Machiaj profesional subtil care evidențiază trăsăturile naturale, ideal pentru evenimente sau sesiuni foto de lifestyle.", tags: ["Day makeup", "Soft Glam", "Glowy finish"], price: "250" },
    { icon: "🌿", name: "Lami & Tint Ritual", duration: "60 min", desc: "Pachet complet de curățare, laminare și vopsire a sprâncenelor pentru un aspect natural, dar definit.", tags: ["Brow tint", "Laminare", "Organic care"], price: "140" },
  ];

  const packages = [
    { name: "Restore", tagline: "Introducere în universul Novelle", price: "250", duration: "2 ore", items: ["Express Glow Facial (30 min)", "Swedish Back Massage (60 min)", "Ritual de bun venit & Ceai", "10% reducere la produse"] },
    { name: "That Girl Reset", tagline: "Cea mai populară experiență completă", price: "450", duration: "4 ore", featured: true, items: ["Clean Girl Glow (60 min)", "Hot Stone Massage (90 min)", "Glow Body Scrub (30 min)", "Champagne & snacks sănătoase", "15% reducere la produse"] },
    { name: "Main Character Makeover", 
      tagline: "Transformarea supremă pentru un look de revistă", 
      price: "580", 
      duration: "4.5 ore", 
      featured: true, 
      items: ["Soft Glam Experience (90 min)", "Velvet Touch Nails & Brows (120 min)", "Glow Body Scrub (30 min)", "Champagne & Snacks sănătoase", "Sesiune foto 'Insta-ready' inclusă"] 
    },
  ];

  const TreatmentCard = ({ treatment }) => (
    <div style={{
      background: "#fff",
      border: treatment.featured ? "2px solid #c97d92" : "1px solid #f2c4d0",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      transition: "transform 0.3s",
      position: "relative",
    }}>
      {treatment.featured && (
        <div style={{ position: "absolute", top: "-1px", right: "1.5rem", background: "#8b4a5c", color: "#fff", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.3rem 0.8rem" }}>
          {treatment.featuredLabel}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "2rem" }}>{treatment.icon}</div>
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c97d92", background: "#f9e8ec", padding: "0.3rem 0.8rem" }}>{treatment.duration}</span>
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#8b4a5c" }}>{treatment.name}</div>
      <div style={{ fontSize: "0.87rem", lineHeight: "1.7", color: "#9e7080" }}>{treatment.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {treatment.tags.map((tag) => (
          <span key={tag} style={{ fontSize: "0.72rem", color: "#c97d92", border: "1px solid #f2c4d0", padding: "0.2rem 0.6rem" }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid #f2c4d0" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#8b4a5c" }}>
          {treatment.price} lei<span style={{ fontSize: "0.8rem", fontFamily: "'Jost', sans-serif", color: "#9e7080", marginLeft: "4px" }}>/ session</span>
        </div>
        <button style={{ background: "transparent", border: "1px solid #8b4a5c", color: "#8b4a5c", padding: "0.5rem 1.2rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
          Programează-te acum
        </button>
      </div>
    </div>
  );

  const CategorySection = ({ title, count, treatments }) => (
    <div style={{ padding: "4rem 4rem 2rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#8b4a5c" }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "#f2c4d0" }} />
        <span style={{ fontSize: "0.78rem", letterSpacing: "0.1em", color: "#9e7080", textTransform: "uppercase" }}>{count} treatments</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
        {treatments.map((t) => <TreatmentCard key={t.name} treatment={t} />)}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        .nov-nav-btn:hover { background: #c97d92; }
        .nov-filter-btn:hover { background: #f9e8ec; color: #8b4a5c; }
        .nov-pkg-btn:hover { background: rgba(255,255,255,0.15); }
        .nov-footer-links a:hover { color: #fff; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}><a href={href} style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: label === "Services" ? "#8b4a5c" : "#9e7080", borderBottom: label === "Services" ? "1px solid #8b4a5c" : "none", paddingBottom: label === "Services" ? "2px" : "0" }}>{label}</a></li>
          ))}
        </ul>
        <button className="nov-nav-btn" style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

      {/* PAGE HERO */}
      <div style={{ background: "#f9e8ec", padding: "5rem 4rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "1rem" }}>Tratamentele noastre</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300, lineHeight: 1.2, color: "#8b4a5c", marginBottom: "1.2rem" }}>
            Ritualuri create<br /> pentru <em>strălucirea ta</em> 
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#9e7080", maxWidth: "400px" }}>
          Fiecare tratament de la Novelle este o experiență personalizată — gândită pentru a restabili echilibrul, a evidenția frumusețea și a te lăsa cu o stare de reînnoire profundă.          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[["🕐", "Durate flexibile", "Tratamente de la 30 de minute până la ritualuri complete de 3 ore"], ["🌿", "Produse naturale", "Folosim exclusiv produse organice și cruelty-free"], ["👐", "Terapeuți experți", "Specialiști certificați cu peste 3 ani de experiență"]].map(([icon, title, text]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid #f2c4d0", padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{icon}</span>
              <div>
                <strong style={{ color: "#8b4a5c", display: "block", fontSize: "0.9rem", fontWeight: 500 }}>{title}</strong>
                <span style={{ fontSize: "0.85rem", color: "#9e7080", lineHeight: 1.5 }}>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ padding: "2rem 4rem", display: "flex", gap: "1rem", borderBottom: "1px solid #f2c4d0", flexWrap: "wrap" }}>
        {["Toate tratamentele", "Facial & Skin", "Massage & Body", "Beauty Studio", "Wellness Rituals"].map((f, i) => (
          <button key={f} className="nov-filter-btn" style={{ padding: "0.5rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #f2c4d0", background: i === 0 ? "#8b4a5c" : "transparent", color: i === 0 ? "#fff" : "#9e7080", cursor: "pointer" }}>{f}</button>
        ))}
      </div>

      {/* TREATMENT CATEGORIES */}
      <CategorySection title="Facial & Skin Care" count={4} treatments={facials} />
      <CategorySection title="Massage & Body" count={4} treatments={massages} />
      <CategorySection title="Beauty Studio" count={3} treatments={beauty} />

      {/* PACKAGES */}
      <div style={{ background: "#8b4a5c", padding: "4rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 300, color: "#fff", marginBottom: "0.5rem" }}>Pachete Novelle</p>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: "3rem" }}>Pentru o experiență premium</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {packages.map((pkg) => (
            <div key={pkg.name} style={{ background: pkg.featured ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)", border: pkg.featured ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.15)", padding: "2rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#fff", marginBottom: "0.3rem" }}>{pkg.name}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>{pkg.tagline}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: "#fff", marginBottom: "1.5rem" }}>
                {pkg.price} lei<span style={{ fontSize: "0.9rem", fontFamily: "'Jost', sans-serif", color: "rgba(255,255,255,0.5)" }}> / {pkg.duration}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                {pkg.items.map((item) => (
                  <li key={item} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", paddingLeft: "1rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#f2c4d0", fontSize: "0.6rem", top: "3px" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="nov-pkg-btn" style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", padding: "0.7rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                Programează pachet
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* INFO STRIP */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#f9e8ec" }}>
        {[["📅", "Programare ușoară", "Programează online sau sună-ne — confirmăm în maximum 2 ore"], ["🧴", "Produse Premium", "100% organice, cruelty-free și obținute sustenabil"], ["🎁", "Vouchere cadou", "Cadoul perfect — disponibile pentru orice tratament sau sumă"], ["♿", "Accesibilitate completă", "Spațiul nostru este complet accesibil pentru toți clienții"]].map(([icon, title, text], i) => (
          <div key={title} style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? "1px solid #f2c4d0" : "none", textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#8b4a5c", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.82rem", color: "#9e7080", lineHeight: 1.6 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#8b4a5c", color: "rgba(255,255,255,0.7)", padding: "3rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>Novelle</div>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>Wellness Spa & Beauty Studio<br />București, Romania</p>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Navigare</p>
          <ul className="nov-footer-links" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={label}><a href={href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Contact</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>📍 Str. Florilor 12, Bucharest</a></li>
            <li><a href="tel:+40721000000" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>📞 +40 721 000 000</a></li>
            <li><a href="mailto:hello@novelle.ro" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>✉️ hello@novelle.ro</a></li>
          </ul>
        </div>
      </footer>
      <div style={{ background: "rgba(0,0,0,0.15)", padding: "1rem 4rem", textAlign: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", backgroundColor: "#7a3f4f" }}>
        © 2024 Novelle Spa & Beauty. All rights reserved.
      </div>
          <a href="/feedback" style={{ position: "fixed", bottom: "2rem", right: "2rem", background: "#8b4a5c", color: "#fff", padding: "0.8rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", zIndex: 999, boxShadow: "0 4px 20px rgba(139,74,92,0.3)" }}>
      💬 Feedback
    </a>
    </>
  );
}

export default function AboutPage() {
  const team = [
    {
      name: "Alina",
      img: "/images/alina.jpg",
      role: "Fondatoare & Specialist în îngrijire",
      initial: "D",
      colorFrom: "#f0d5de",
      colorTo: "#dda8bc",
      bio: "Cu peste 12 ani de experiență în wellness și un background în terapie holistică, Alina a fondat Novelle pentru a crea sanctuarul pe care și l-a dorit mereu. Caldă, intuitivă și complet dedicată stării de bine a clientelor sale.",
      tags: ["Swedish Massage", "Hot Stone", "Wellness Coaching"],
    },
    {
      name: "Anaïs",
      img: "/images/portretANAIS.jpg",
      role: "Specialist în Skincare",
      initial: "A",
      colorFrom: "#e8d0e8",
      colorTo: "#c9a0c9",
      bio: "Anaïs s-a format la Paris și aduce o abordare distinct franțuzească a îngrijirii pielii — meticuloasă, elegantă și extrem de eficientă. Ea este cea care stă în spatele tratamentelor faciale semnătură Novelle și a selecției de produse.",
      tags: ["Rose Ritual Facial", "Luminosity Peel", "Skin Consultation"],
    },
    {
      name: "Diana",
      img: "/images/portretd.png",
      role: "Specialist beauty & body",
      initial: "A",
      colorFrom: "#d5dff0",
      colorTo: "#a8b8d8",
      bio: "Talentul artistic și precizia Dianei fac din ea inima studioului de beauty Novelle. De la ritualuri impecabile de manichiură până la sprâncene perfect conturate, are un ochi excepțional pentru detalii și un dar de a face fiecare client să se simtă în cea mai frumoasă versiune a sa.",
      tags: ["Nail Ritual", "Lash & Brow", "Glow Body Wrap"],
    },
  ];

  const values = [
    { icon: "🌿", name: "Natural", text: "Fiecare produs pe care îl folosim este organic, cruelty-free și obținut sustenabil — pentru că avem grijă de planetă la fel de mult cum avem grijă de pielea ta." },
    { icon: "🤍", name: "Genuine Care", text: "Fiecare client este unic — ascultăm, ne adaptăm și personalizăm fiecare experiență în funcție de ceea ce ai cu adevărat nevoie în acea zi." },
    { icon: "✨", name: "Excelență în permanență", text: "De la pregătirea terapeuților noștri până la calitatea produselor, ne menținem la cele mai înalte standarde — mereu învățând, mereu evoluând." },
    { icon: "🕊️", name: "Un spațiu al liniștii", text: "În momentul în care pășești în interior, lumea de afară dispare. Novelle este pauza ta — calmă, fără grabă și în întregime a ta." },
  ];

  const timeline = [
      {
    year: "2024",
    event: "The beginning of Novelle",
    desc: "Novelle își deschide porțile în București, pornind ca un mic studio de beauty cu o viziune clară: experiențe moderne, personalizate și rafinate."
  },
  {
    year: "2025",
    event: "500+ clients & organic growth",
    desc: "Fără promovare intensă, Novelle ajunge la peste 500 de clienți în primii doi ani, construindu-și reputația prin rezultate și recomandări."
  },
  {
    year: "2026",
    event: "Social media era begins",
    desc: "Novelle începe promovarea activă pe social media, aducând estetica și experiența brandului către o comunitate mai largă."
  }];


  const stats = [
    ["2+", "Ani în București"],
    ["500+", "Clienți fericiți"],
    ["24", "Tratamente emblematice"],
    ["3", "Profesioniste"],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        .nov-book-btn:hover { background: #c97d92 !important; }
        .nov-ghost-btn:hover { background: #f2c4d0 !important; }
        .nov-team-card:hover { transform: translateY(-4px); }
        .nov-value-card:hover { border-color: #c97d92; }
        .nov-footer-link:hover { color: #fff !important; }
        .nov-nav-link:hover { color: #8b4a5c !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}>
              <a href={href} className="nov-nav-link" style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: label === "About" ? "#8b4a5c" : "#9e7080", borderBottom: label === "About" ? "1px solid #8b4a5c" : "none", paddingBottom: label === "About" ? "2px" : "0" }}>{label}</a>
            </li>
          ))}
        </ul>
        <button className="nov-book-btn" style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}>Programează-te acum</button>
      </nav>

      {/* HERO */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "70vh" }}>
        <div style={{ background: "#8b4a5c", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 4rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1.2rem" }}>Povestea noastră</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.8rem", fontWeight: 300, lineHeight: 1.15, color: "#fff", marginBottom: "1.5rem" }}>
            Născută din iubire pentru <em>frumusețe și stare de bine</em>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(255,255,255,0.65)", maxWidth: "380px" }}>
            Novelle s-a născut dintr-o singură convingere — că fiecare om merită o clipă de liniște profundă, de grijă autentică și de strălucire care rămâne cu tine mult timp.
          </p>
        </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img 
          src="/images/alina.jpg" 
          alt="Novelle" 
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
        />
        {/* citatul peste poza */}
        <div style={{ position: "absolute", bottom: "3rem", left: "3rem" }}>
          <div style={{background: "rgba(139,74,92,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "2rem", maxWidth: "320px" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontStyle: "italic", color: "#fff", lineHeight: 1.6, marginBottom: "0.8rem" }}>
              "Nu urmărim frumusețea perfectă — o reinventăm, o rafinăm și o transformăm într-o experiență modernă, vie, imposibil de ignorat."
            </p>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>— Alina, Fondatoarea Novelle</p>
          </div>
        </div>
      </div> </div>

      {/* STORY */}
      <section style={{ padding: "6rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
        <div style={{ width: "100%", height: "380px", overflow: "hidden" }}>
          <img 
            src="/images/locatia.png" 
            alt="Cum a început totul" 
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} 
          />
        </div>
          <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", width: "160px", height: "160px", background: "#8b4a5c", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "1.5rem" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: "#fff" }}>2</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Ani de grijă față de clienți</div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>Cum a început totul</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 300, color: "#8b4a5c", marginBottom: "1.5rem", lineHeight: 1.2 }}>Un sanctuar construit cu intenție</h2>
          {["Novelle și-a deschis porțile în București în 2024, fiind fondat de Alina — specialist în beauty și make-up, dar și în tratamente de wellness, cu o pasiune profundă pentru frumusețea holistică. Născut din dorința de a crea un spațiu modern și rafinat, Novelle își propune să redefinească experiența de beauty prin servicii atent gândite și rezultate vizibile.",
            "Numele Novelle vine din cuvântul francez \"nou\" — reflectând convingerea noastră că fiecare vizită este o șansă de a o lua de la capăt, de a renunța la ceea ce nu îți mai servește și de a reveni în lume simțindu-te reînnoit.",
            "Astăzi, echipa noastră de trei terapeuți experți aduce împreună ani de experiență combinată în skincare, masaj terapeutic și beauty — uniți de un angajament comun față de excelență și căldură."
          ].map((p, i) => (
            <p key={i} style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "#9e7080", marginBottom: "1rem" }}>{p}</p>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <div style={{ background: "#f9e8ec", padding: "5rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>În ce credem noi</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 300, color: "#8b4a5c" }}>Valorile noastre</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
          {values.map((v) => (
            <div key={v.name} className="nov-value-card" style={{ background: "#fff", padding: "2rem", textAlign: "center", border: "1px solid #f2c4d0", transition: "border-color 0.3s" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{v.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#8b4a5c", marginBottom: "0.5rem" }}>{v.name}</div>
              <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: "#9e7080" }}>{v.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>Oamenii din spatele Novelle</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 300, color: "#8b4a5c", marginBottom: "1rem" }}>Echipa noastră</h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#9e7080", maxWidth: "500px" }}>Trei specialiști dedicați, uniți de aceeași viziune — să creeze experiențe care îi ajută pe clienți să își recapete încrederea în ei înșiși, să se simtă bine în pielea lor și să plece mai luminoși decât au venit.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {team.map((member) => (
            <div key={member.name} className="nov-team-card" style={{ transition: "transform 0.3s" }}>
            <div style={{ height: "380px", overflow: "hidden" }}>
              {member.img ? (
                <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
              ) : (
                <div style={{ height: "100%", background: `linear-gradient(160deg, ${member.colorFrom}, ${member.colorTo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>{member.initial}</span>
                </div>
              )}
            </div>
              <div style={{ padding: "1.5rem", background: "#fff", border: "1px solid #f2c4d0", borderTop: "none" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#8b4a5c", marginBottom: "0.2rem" }}>{member.name}</div>
                <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>{member.role}</div>
                <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: "#9e7080" }}>{member.bio}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                  {member.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.7rem", color: "#c97d92", border: "1px solid #f2c4d0", padding: "0.2rem 0.6rem" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "#8b4a5c", padding: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
        {stats.map(([num, label], i) => (
          <div key={label} style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none", padding: "0 2rem" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", color: "#fff", lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* TIMELINE */}
      <div style={{ padding: "5rem 4rem", background: "#fef5f7" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>Călătoria noastră</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 300, color: "#8b4a5c", marginBottom: "3rem" }}>Cum a crescut Novelle</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {timeline.map((item) => (
            <div key={item.year} style={{ display: "grid", gridTemplateColumns: "120px 1px 1fr", gap: "0 2rem", alignItems: "start" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#8b4a5c", textAlign: "right", padding: "1.5rem 0" }}>{item.year}</div>
              <div style={{ background: "#f2c4d0", position: "relative" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#8b4a5c", position: "absolute", left: "-4.5px", top: "1.8rem" }} />
              </div>
              <div style={{ padding: "1.5rem 0 2.5rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "0.3rem" }}>{item.event}</div>
                <div style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#9e7080" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#f9e8ec", padding: "5rem 4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 300, color: "#8b4a5c", marginBottom: "1rem" }}>Ești gata să trăiești experiența Novelle?</h2>
        <p style={{ fontSize: "0.95rem", color: "#9e7080", marginBottom: "2.5rem", lineHeight: 1.8 }}>Fie că este prima ta vizită sau a cincizecea, abia așteptăm să te primim.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button className="nov-book-btn" style={{ background: "#8b4a5c", color: "#fff", padding: "0.85rem 2.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}>Programează un tratament</button>
          <button className="nov-ghost-btn" style={{ background: "transparent", color: "#8b4a5c", padding: "0.85rem 2.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "1.5px solid #c97d92", cursor: "pointer", transition: "background 0.3s" }}>Vezi serviciile noastre</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#8b4a5c", color: "rgba(255,255,255,0.7)", padding: "3rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>Novelle</div>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>Wellness Spa & Beauty Studio<br />Bucharest, Romania</p>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Navigare</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
             {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={label}><a href={href} className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Contact</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="#" className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>📍 Str. Florilor 12, Bucharest</a></li>
            <li><a href="tel:+40721000000" className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>📞 +40 721 000 000</a></li>
            <li><a href="mailto:hello@novelle.ro" className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>✉️ hello@novelle.ro</a></li>
            <li><a href="/booking" className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem", marginTop: "0.5rem", display: "block" }}>Book an appointment →</a></li>
          </ul>
        </div>
      </footer>
      <div style={{ background: "#7a3f4f", padding: "1rem 4rem", textAlign: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
        © 2024 Novelle Spa & Beauty. All rights reserved.
      </div>
    </>
  );
}

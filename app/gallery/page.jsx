"use client";
import { useState } from "react";

const galleryItems = [
  { id: 1, icon: "🌸", bg: ["#f5d5de", "#e8b8c4"], label: "Clean Girl Glow", tag: "Facial & Skin", cat: "facial", height: 360, img: "/images/rose-ritual.jpg" },
  { id: 2, icon: "🏛️", bg: ["#e8d0e8", "#d4a8d4"], label: "The Novelle Lounge", tag: "Spațiul nostru", cat: "space", height: 280, img: "/images/locatia.png" },
  { id: 3, icon: "🪨", bg: ["#d5e8f0", "#b8cce0"], label: "Hot Stone Therapy", tag: "Massage & Body", cat: "massage", height: 420, img: "/images/hot-stone.jpg" },
  { id: 4, icon: "🕯️", bg: ["#f0e8d0", "#ddd0b0"], label: "Treatment Room", tag: "Spațiul nostru", cat: "space", height: 420, img: "/images/treatment-room.jpg" },
  { id: 5, icon: "💅", bg: ["#d5f0e0", "#b0d8c0"], label: "Nail Ritual", tag: "Beauty Studio", cat: "beauty", height: 280, img: "/images/diana.png" },
  { id: 6, icon: "🧴", bg: ["#f5e0d5", "#e0c0b0"], label: "Produsele noastre", tag: "Produse", cat: "products", height: 200, img: "/images/rose-coll.png" },
  { id: 7, icon: "✨", bg: ["#f5d5d5", "#e8b8b8"], label: "Glow Treatment", tag: "Facial & Skin", cat: "facial", height: 200, img: "/images/glow-treatment.jpg" },
  { id: 8, icon: "👁️", bg: ["#f5f0d5", "#e8ddb0"], label: "Lash & Brow Design", tag: "Beauty Studio", cat: "beauty", height: 280, img: "/images/lash.jpg" },
  ];

const filters = ["All", "Spațiul nostru", "Tratamente faciale", "Masaj", "Beauty Studio", "Produse"];
const filterMap = { "All": "all", "Spațiul nostru": "space", "Tratamente faciale": "facial", "Masaj": "massage", "Beauty Studio": "beauty", "Produse": "products" };

const audioTracks = [
  { icon: "🎵", title: "Atmosferă de sanctuar", desc: "Sunetele blânde ale spa-ului nostru — muzică soft, ciripit de păsări și liniște.", time: "1:24", total: "4:00", fill: 35 },
  { icon: "🌊", title: "Relaxare profundă", desc: "Valuri oceanice și tonuri fine pentru o liniște mentală totală.", time: "0:00", total: "5:30", fill: 0 },
  { icon: "🌸", title: "Grădina de trandafiri", desc: "Un soundscape floral și meditativ inspirat de ritualul nostru cu trandafiri.", time: "2:42", total: "4:30", fill: 60 },
];

const videos = [
  { bg: ["#e8c4d0", "#d4a0b8"], caption: "A day at Novelle Spa · 3:24", main: true },
  { bg: ["#f0d5de", "#e0b8c8"], caption: "Meet our team · 1:45" },
  { bg: ["#d5e8d5", "#b8d8b8"], caption: "The Rose Ritual · 2:10" },
];

function PlayArrow({ size = "lg" }) {
  const s = size === "lg" ? { btn: 64, arrow: { top: 10, bot: 10, left: 18 }, ml: 4 } : { btn: 44, arrow: { top: 7, bot: 7, left: 12 }, ml: 3 };
  return (
    <div style={{ width: s.btn, height: s.btn, borderRadius: "50%", background: "rgba(139,74,92,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 0, height: 0, borderTop: `${s.arrow.top}px solid transparent`, borderBottom: `${s.arrow.bot}px solid transparent`, borderLeft: `${s.arrow.left}px solid #fff`, marginLeft: s.ml }} />
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter(i => i.cat === filterMap[activeFilter]);

  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  const GalleryCard = ({ item }) => (
    <div onClick={() => setLightbox(item)} style={{ position: "relative", overflow: "hidden", cursor: "pointer", marginBottom: "1.2rem" }}
      onMouseEnter={e => { e.currentTarget.querySelector('.nov-overlay').style.opacity = 1; e.currentTarget.querySelector('.nov-gimg').style.transform = 'scale(1.04)'; }}
      onMouseLeave={e => { e.currentTarget.querySelector('.nov-overlay').style.opacity = 0; e.currentTarget.querySelector('.nov-gimg').style.transform = 'scale(1)'; }}>
   <div className="nov-gimg" style={{ height: item.height, transition: "transform 0.5s ease", overflow: "hidden" }}>
        {item.img ? (
          <img src={item.img} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ height: "100%", background: `linear-gradient(145deg, ${item.bg[0]}, ${item.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
            {item.icon}
          </div>
        )}
</div>
      <div className="nov-overlay" style={{ position: "absolute", inset: 0, background: "rgba(139,74,92,0.55)", opacity: 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🔍</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#fff", fontStyle: "italic" }}>{item.label}</div>
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "0.3rem" }}>{item.tag}</div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        .nov-filter-btn:hover { background: #f9e8ec; color: #8b4a5c; }
        .nov-footer-link:hover { color: #fff !important; }
        .nov-nav-link:hover { color: #8b4a5c !important; }
        .nov-cta-btn:hover { background: #c97d92 !important; }
      `}</style>

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(58,37,48,0.95)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "700px", width: "90%" }}>
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "-2.5rem", right: 0, background: "transparent", border: "none", color: "#fff", fontSize: "1.1rem", cursor: "pointer", fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}>✕ close</button>
          <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
            {lightbox.img ? (
              <img src={lightbox.img} alt={lightbox.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ width: "100%", height: "100%", background: `linear-gradient(145deg, ${lightbox.bg[0]}, ${lightbox.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem" }}>{lightbox.icon}</div>
            )}
          </div>            
<div style={{ textAlign: "center", marginTop: "1rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>{lightbox.label}</div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}><a href={href} className="nov-nav-link" style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: label === "Gallery" ? "#8b4a5c" : "#9e7080", borderBottom: label === "Gallery" ? "1px solid #8b4a5c" : "none", paddingBottom: label === "Gallery" ? "2px" : "0" }}>{label}</a></li>
          ))}
        </ul>
        <button style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

      {/* HERO */}
      <div style={{ background: "#8b4a5c", padding: "5rem 4rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Lumea noastră în imagini</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300, color: "#fff", marginBottom: "1rem" }}>Pășește în <em>Novelle</em></h1>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: "480px", margin: "0 auto" }}>O privire în sanctuarul nostru — tratamentele, spațiul nostru și momentele de liniște pură pe care le creăm în fiecare zi.</p>
      </div>

      {/* FILTER */}
      <div style={{ padding: "2rem 4rem", display: "flex", gap: "0.8rem", justifyContent: "center", borderBottom: "1px solid #f2c4d0", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button key={f} onClick={() => setActiveFilter(f)} className="nov-filter-btn" style={{ padding: "0.45rem 1.3rem", fontFamily: "'Jost', sans-serif", fontSize: "0.73rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #f2c4d0", background: activeFilter === f ? "#8b4a5c" : "transparent", color: activeFilter === f ? "#fff" : "#9e7080", cursor: "pointer", transition: "all 0.2s" }}>{f}</button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div style={{ padding: "3rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.2rem", alignItems: "start" }}>
        <div>{col1.map(item => <GalleryCard key={item.id} item={item} />)}</div>
        <div>{col2.map(item => <GalleryCard key={item.id} item={item} />)}</div>
        <div>{col3.map(item => <GalleryCard key={item.id} item={item} />)}</div>
      </div>

      {/* AUDIO */}
      <div style={{ padding: "4rem", background: "#fdf7f5" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem", textAlign: "center" }}>Sunet & Atmosferă</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#8b4a5c", marginBottom: "0.5rem", textAlign: "center" }}>Sunetele Novelle</h2>
        <p style={{ fontSize: "0.87rem", color: "#9e7080", textAlign: "center", marginBottom: "2.5rem", lineHeight: 1.7 }}>Închide ochii și lasă-te purtat de soundscape-urile noastre ambientale către următoarea ta vizită.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.2rem", maxWidth: "900px", margin: "0 auto" }}>
          {audioTracks.map((track) => (
            <div key={track.title} style={{ background: "#fff", border: "1px solid #f2c4d0", padding: "1.5rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{track.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#8b4a5c", marginBottom: "0.3rem" }}>{track.title}</div>
              <div style={{ fontSize: "0.78rem", color: "#9e7080", marginBottom: "1rem", lineHeight: 1.6 }}>{track.desc}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <button style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#8b4a5c", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #fff", marginLeft: "2px" }} />
                </button>
                <div style={{ flex: 1, height: "3px", background: "#f2c4d0", borderRadius: "2px", position: "relative", cursor: "pointer" }}>
                  <div style={{ height: "100%", background: "#8b4a5c", borderRadius: "2px", width: `${track.fill}%` }} />
                </div>
                <span style={{ fontSize: "0.72rem", color: "#9e7080", whiteSpace: "nowrap" }}>{track.time} / {track.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#f9e8ec", padding: "4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: "#8b4a5c", marginBottom: "0.8rem" }}>Ești gata să o trăiești în realitate?</h2>
        <p style={{ fontSize: "0.92rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.8 }}>Experiența reală este chiar mai bună. Programează primul tău tratament și pășește în sanctuarul tău.</p>
        <button className="nov-cta-btn" style={{ background: "#8b4a5c", color: "#fff", padding: "0.85rem 2.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}>Programează-te acum</button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#8b4a5c", color: "rgba(255,255,255,0.7)", padding: "3rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>Novelle</div>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>Wellness Spa & Beauty Studio<br />Bucharest, Romania</p>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Navigation</p>
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
          </ul>
        </div>
      </footer>
      <div style={{ background: "#7a3f4f", padding: "1rem 4rem", textAlign: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
        © 2024 Novelle Spa & Beauty. All rights reserved.
      </div>
      <a href="/feedback" style={{ position: "fixed", bottom: "2rem", right: "2rem", background: "#8b4a5c", color: "#fff", padding: "0.8rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", zIndex: 999, boxShadow: "0 4px 20px rgba(139,74,92,0.3)" }}>
  💬 Feedback
</a>
    </>
  );
}

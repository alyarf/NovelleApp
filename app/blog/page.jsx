"use client";
import { useState } from "react";

const posts = [
  { id: 1, icon: "🌸", bg: ["#f5d5de", "#e8b8c4"], tag: "Skincare", title: "5 semne că pielea ta este deshidratată (și ce poți face în privința asta)", excerpt: "Aspect tern, senzație de piele care „strânge”, linii fine — pielea deshidratată transmite semnale clare. Iată cum să le înțelegi și să îți redai strălucirea.", author: "Anaïs", authorColor: "#c97d92", authorInitial: "A", date: "Mar 2024", category: "Skincare" },
  { id: 2, icon: "🕊️", bg: ["#d5e8f5", "#b8cce8"], tag: "Masaj & Corp", title: "Masaj cu pietre calde vs. masaj suedez: care ți se potrivește?", excerpt: "Ambele sunt profund relaxante — dar funcționează în moduri diferite. Alina explică ce tip de masaj se potrivește cel mai bine corpului și stării tale.", author: "Alina", authorColor: "#8b4a5c", authorInitial: "Al", date: "Mar 2024", category: "Masaj & Corp" },
  { id: 3, icon: "🌿", bg: ["#d5f0e0", "#b8ddc8"], tag: "Wellness", title: "Ritualul de dimineață Novelle: cum să îți începi ziua cu intenție", excerpt: "Câteva minute de mindfulness dimineața îți pot transforma întreaga zi. Fondatoarea noastră, Alina, își împărtășește rutina personală.", author: "Alina", authorColor: "#8b4a5c", authorInitial: "Al", date: "Feb 2024", category: "Wellness" },
  { id: 4, icon: "💅", bg: ["#f5e8d5", "#e8d0b8"], tag: "Sfaturi de beauty", title: "Cum să îți faci manichiura cu gel să reziste peste 3 săptămâni", excerpt: "Cele mai bune sfaturi profesionale ale Alinei pentru unghii impecabile și fără ciobiri mult timp după plecarea din salon.", author: "Alina", authorColor: "#a8b8d8", authorInitial: "Al", date: "Feb 2024", category: "Sfaturi de beauty" },
  { id: 5, icon: "✨", bg: ["#e8d5f5", "#d0b8e8"], tag: "Skincare", title: "Retinol, AHA, BHA — ghid pentru începători despre ingrediente active", excerpt: "Lumea skincare-ului este plină de acronime. Anaïs explică simplu ce face fiecare ingredient și cum funcționează.", author: "Anaïs", authorColor: "#c97d92", authorInitial: "A", date: "Ian 2024", category: "Skincare" },
  { id: 6, icon: "🏡", bg: ["#f5d5d5", "#e8b8b8"], tag: "Din culise", title: "Cum am creat Novelle să se simtă ca o a doua casă", excerpt: "De la mirosul de la intrare până la calitatea prosoapelor — fiecare detaliu din Novelle a fost ales cu intenție.", author: "Alina", authorColor: "#8b4a5c", authorInitial: "Al", date: "Ian 2024", category: "Din culise" },
];

const categories = [
  ["Skincare", 8], ["Masaj & Corp", 5], ["Wellness", 6], ["Sfaturi de beauty", 7], ["Din culise", 3],
];

const tags = ["Trandafir", "Hidratare", "Masaj", "Strălucire", "Îngrijire de sine", "Skincare", "Wellness", "Unghii", "Ritual", "Relaxare"];
const recentPosts = [
  { icon: "🌸", bg: ["#f5d5de", "#e8b8c4"], title: "Arta facialului cu trandafir", date: "Aprilie 2024" },
  { icon: "🌿", bg: ["#d5f0e0", "#b8ddc8"], title: "Ritualul de dimineață Novelle", date: "Februarie 2024" },
  { icon: "💅", bg: ["#f5e8d5", "#e8d0b8"], title: "Cum să îți faci manichiura cu gel să reziste mai mult", date: "Februarie 2024" },
];

const filters = ["All", "Skincare", "Masaj & Corp", "Wellness", "Sfaturi de beauty", "Din culise"];
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeFilter === "All" ? posts : posts.filter((p) => p.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        .nov-post-card:hover { transform: translateY(-3px); border-color: #c97d92 !important; }
        .nov-sidebar-cat:hover { color: #8b4a5c !important; }
        .nov-sidebar-tag:hover { background: #8b4a5c !important; color: #fff !important; border-color: #8b4a5c !important; }
        .nov-footer-link:hover { color: #fff !important; }
        input:focus { outline: none; border-color: #c97d92 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}><a href={href} style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: label === "Blog" ? "#8b4a5c" : "#9e7080", borderBottom: label === "Blog" ? "1px solid #8b4a5c" : "none", paddingBottom: label === "Blog" ? "2px" : "0" }}>{label}</a></li>
          ))}
        </ul>
        <button style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

      {/* HERO */}
      <div style={{ background: "#8b4a5c", padding: "5rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Călătoria Novelle</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}>
            Sfaturi de wellness, <em>secrete de frumusețe</em> & ritualuri spa
          </h1>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "380px" }}>
            Descoperă lumea noastră — de la recomandări experte de skincare până la știința relaxării, scrise cu grijă de echipa Novelle.
          </p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", padding: "2rem" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f2c4d0", marginBottom: "1rem" }}>✦ Articol recomandat</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#fff", marginBottom: "0.8rem", lineHeight: 1.3 }}>Arta trandafirului: de ce am construit tratamentul nostru emblematic în jurul unei singure flori</h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>De Anaïs · Aprilie 2025 · 5 min read</p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>Extractul de trandafir de Damasc este folosit în skincare de secole — dar ce îl face cu adevărat excepțional? Specialistul nostru în skincare, Anaïs, explică știința și ritualul din spatele acestuia.</p>
          <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", padding: "0.6rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>Citește articolul →</button>
        </div>
      </div>

      {/* BLOG BODY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", padding: "4rem" }}>

        {/* MAIN */}
        <div>
          {/* FILTER BAR */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: "0.4rem 1.1rem", fontFamily: "'Jost', sans-serif", fontSize: "0.73rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #f2c4d0", background: activeFilter === f ? "#8b4a5c" : "transparent", color: activeFilter === f ? "#fff" : "#9e7080", cursor: "pointer", transition: "all 0.2s" }}>{f}</button>
            ))}
          </div>

          {/* POSTS GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {filtered.map((post) => (
              <div key={post.id} className="nov-post-card" style={{ background: "#fff", border: "1px solid #f2c4d0", transition: "transform 0.3s, border-color 0.3s", cursor: "pointer" }}>
                <div style={{ height: "180px", background: `linear-gradient(135deg, ${post.bg[0]}, ${post.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>{post.icon}</div>
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.6rem" }}>{post.tag}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#8b4a5c", marginBottom: "0.6rem", lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#9e7080", marginBottom: "1rem" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.73rem", color: "#9e7080", paddingTop: "1rem", borderTop: "1px solid #f2c4d0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: post.authorColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 500, color: "#fff" }}>{post.authorInitial}</div>
                      {post.author} · {post.date}
                    </div>
                    <span style={{ color: "#c97d92", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#9e7080" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#8b4a5c", marginBottom: "0.5rem" }}>No posts yet in this category</div>
              <p style={{ fontSize: "0.85rem" }}>Check back soon — our team is always writing!</p>
            </div>
          )}

          {/* PAGINATION */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "2rem", alignItems: "center" }}>
            {[1, 2, 3, "→"].map((p, i) => (
              <button key={i} style={{ width: "36px", height: "36px", border: "1px solid #f2c4d0", background: p === 1 ? "#8b4a5c" : "transparent", color: p === 1 ? "#fff" : "#9e7080", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{p}</button>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div>
          {/* SUBSCRIBE */}
          <div style={{ marginBottom: "2.5rem", background: "#f9e8ec", padding: "1.5rem", border: "1px solid #f2c4d0" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "0.5rem" }}>Join the Novelle Journal</h3>
            <p style={{ fontSize: "0.8rem", color: "#9e7080", marginBottom: "1rem", lineHeight: 1.6 }}>Wellness tips, seasonal rituals and exclusive offers — delivered gently to your inbox.</p>
            {subscribed ? (
              <p style={{ fontSize: "0.82rem", color: "#8b4a5c", fontStyle: "italic" }}>🌸 Thank you for subscribing!</p>
            ) : (
              <>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" style={{ width: "100%", border: "1px solid #f2c4d0", background: "#fff", padding: "0.65rem 0.8rem", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem" }} />
                <button onClick={() => setSubscribed(true)} style={{ width: "100%", background: "#8b4a5c", color: "#fff", padding: "0.65rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Subscribe</button>
              </>
            )}
          </div>

          {/* CATEGORIES */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #f2c4d0" }}>Categories</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {categories.map(([cat, count]) => (
                <div key={cat} onClick={() => setActiveFilter(cat)} className="nov-sidebar-cat" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0", borderBottom: "1px solid #f2c4d0", fontSize: "0.83rem", color: "#3a2530", cursor: "pointer", transition: "color 0.2s" }}>
                  <span>{cat}</span>
                  <span style={{ fontSize: "0.72rem", color: "#9e7080", background: "#f9e8ec", padding: "0.15rem 0.5rem" }}>{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT POSTS */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #f2c4d0" }}>Recent Posts</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {recentPosts.map((p) => (
                <div key={p.title} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", cursor: "pointer" }}>
                  <div style={{ width: "54px", height: "54px", flexShrink: 0, background: `linear-gradient(135deg, ${p.bg[0]}, ${p.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>{p.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.82rem", color: "#3a2530", lineHeight: 1.4, marginBottom: "0.2rem" }}>{p.title}</p>
                    <p style={{ fontSize: "0.72rem", color: "#9e7080" }}>{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #f2c4d0" }}>Popular Tags</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tags.map((tag) => (
                <span key={tag} className="nov-sidebar-tag" style={{ fontSize: "0.72rem", letterSpacing: "0.05em", color: "#c97d92", border: "1px solid #f2c4d0", padding: "0.3rem 0.7rem", cursor: "pointer", transition: "all 0.2s" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
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
    </>
  );
}

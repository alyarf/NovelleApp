"use client";
import { useState } from "react";

const faqs = [
  { q: "Cum pot face o programare?", a: "Poți programa apelându-ne, trimițându-ne un mesaj prin acest formular sau un email la hello@novelle.ro. Confirmăm toate programările în maximum 2 ore." },
  { q: "Ce ar trebui să port la programare?", a: "Îmbrăcămintea confortabilă este ideală. Oferim halate și papuci pentru toate tratamentele corporale și de masaj. Pentru tratamente faciale, vino doar cu tenul curat!" },
  { q: "Oferiți vouchere cadou?", a: "Da! Voucherele cadou sunt disponibile pentru orice sumă sau tratament specific. Sunt un cadou minunat și nu expiră timp de 12 luni de la achiziție." },
  { q: "Care este politica de anulare?", a: "Te rugăm să ne anunți cu 24 de ore înainte pentru anulări. Anulările târzii sau neprezentările pot implica o taxă de 50% din prețul tratamentului." },
  { q: "Sunt produsele potrivite pentru ten sensibil?", a: "Toate produsele noastre sunt organice și hipoalergenice. Te rugăm să ne informezi despre orice alergii sau sensibilități în momentul programării, pentru a personaliza tratamentul." },
  { q: "Pot ajunge mai devreme la programare?", a: "Absolut — recomandăm să ajungi cu 10 minute mai devreme pentru a te relaxa, a completa formularele necesare și a savura un ceai în lounge-ul nostru." },
];

const hours = [
  ["Luni – Vineri", "9:00 – 20:00"],
  ["Sâmbătă", "9:00 – 18:00"],
  ["Duminică", "10:00 – 16:00"],
];

const socials = [
  ["IG", "https://www.instagram.com/novelle_wellness/"],
  ["TikTok", "https://www.tiktok.com/@novelle.com6?_r=1&_t=ZN-96OAkbVl3Vm"],
];

const topics = [
  "Select a topic",
  "Booking an appointment",
  "Treatment information",
  "Packages & pricing",
  "Gift vouchers",
  "General enquiry",
  "Feedback",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "" });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputStyle = {
    width: "100%",
    border: "1px solid #f2c4d0",
    background: "#fff",
    padding: "0.8rem 1rem",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.87rem",
    color: "#3a2530",
    outline: "none",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #c97d92 !important; }
        .nov-submit-btn:hover { background: #c97d92 !important; }
        .nov-soc-btn:hover { background: rgba(255,255,255,0.15) !important; border-color: rgba(255,255,255,0.4) !important; }
        .nov-faq-item:hover { border-color: #c97d92 !important; }
        .nov-footer-link:hover { color: #fff !important; }
        .nov-nav-link:hover { color: #8b4a5c !important; }
        select { appearance: none; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}>
              <a href={href} className="nov-nav-link" style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: label === "Contact" ? "#8b4a5c" : "#9e7080", borderBottom: label === "Contact" ? "1px solid #8b4a5c" : "none", paddingBottom: label === "Contact" ? "2px" : "0" }}>{label}</a>
            </li>
          ))}
        </ul>
        <button style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

    {/* HERO */}
      <div style={{ background: "#f9e8ec", padding: "4rem 4rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "1rem" }}>
            Ia legătura cu noi
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3.5rem",
              fontWeight: 300,
              color: "#8b4a5c",
              lineHeight: 1.15,
              marginBottom: "1rem"
            }}
          >
            Ne-ar face plăcere să <em>ne cunoaștem</em>
          </h1>

          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.8,
              color: "#9e7080",
              maxWidth: "380px",
              marginBottom: "3rem"
            }}
          >
            Fie că ai o întrebare despre tratamentele noastre, vrei să faci o programare sau pur și simplu să ne saluți — ne bucurăm întotdeauna să te auzim.
          </p>
        </div>

        <div
          style={{
            height: "260px",
            background: "linear-gradient(160deg, #f0d0d8, #e0afc0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "5rem",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Cormorant Garamond', serif"
          }}
        >
          🌸
        </div>
      </div>

      {/* CONTACT BODY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

        {/* FORM */}
        <div style={{ padding: "4rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#8b4a5c", marginBottom: "0.5rem" }}>
            Trimite-ne un mesaj
          </h2>

          <p style={{ fontSize: "0.87rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.7 }}>
            Îți vom răspunde în maximum 24 de ore. Pentru programări urgente, te rugăm să ne suni direct.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
            {[
              ["firstName", "Prenume", "text", "Andreea"],
              ["lastName", "Nume", "text", "Ionescu"]
            ].map(([key, label, type, ph]) => (
              <div key={key}>
                <label style={{ fontSize: "0.8rem", color: "#3a2530", marginBottom: "0.5rem", display: "block" }}>
                  {label}
                </label>
                <input type={type} placeholder={ph} value={form[key]} onChange={set(key)} style={inputStyle} />
              </div>
            ))}
          </div>

          {[
            ["email", "Adresă email", "email", "andreea@email.com"],
            ["phone", "Număr de telefon (opțional)", "tel", "+40 721 000 000"]
          ].map(([key, label, type, ph]) => (
            <div key={key} style={{ marginBottom: "1.2rem" }}>
              <label style={{ fontSize: "0.8rem", color: "#3a2530", marginBottom: "0.5rem", display: "block" }}>
                {label}
              </label>
              <input type={type} placeholder={ph} value={form[key]} onChange={set(key)} style={inputStyle} />
            </div>
          ))}

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.8rem", color: "#3a2530", marginBottom: "0.5rem", display: "block" }}>
              Despre ce este solicitarea ta?
            </label>
            <select value={form.topic} onChange={set("topic")} style={inputStyle}>
              {topics.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.8rem", color: "#3a2530", marginBottom: "0.5rem", display: "block" }}>
              Mesajul tău
            </label>
            <textarea
              placeholder="Spune-ne cum te putem ajuta..."
              value={form.message}
              onChange={set("message")}
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            />
          </div>

          {!submitted ? (
            <button
              className="nov-submit-btn"
              onClick={() => setSubmitted(true)}
              style={{
                width: "100%",
                background: "#8b4a5c",
                color: "#fff",
                padding: "1rem",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.82rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s"
              }}
            >
              Trimite mesajul →
            </button>
          ) : (
            <div style={{ background: "#f9e8ec", border: "1px solid #f2c4d0", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌸</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#8b4a5c", marginBottom: "0.3rem" }}>
                Mulțumim{form.firstName ? `, ${form.firstName}` : ""}!
              </div>
              <div style={{ fontSize: "0.85rem", color: "#9e7080" }}>
                Îți vom răspunde în maximum 24 de ore.
              </div>
            </div>
          )}
        </div>

        {/* INFO */}
        <div style={{ background: "#8b4a5c", padding: "4rem", color: "rgba(255,255,255,0.8)" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#fff", marginBottom: "0.5rem" }}>
            Ne găsești aici
          </h2>

          <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Suntem localizați în inima Bucureștiului — ușor de ajuns pe jos, cu mașina sau cu transportul public.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              ["📍", "Adresă", "Str. Florilor 12, Sector 1\nBucurești, România", "Lângă Piața Victoriei"],
              ["📞", "Telefon", "+40 721 000 000", "Lun–Sâmb, 9:00–19:00"],
              ["✉️", "Email", "hello@novelle.ro", "Răspundem în 24h"]
            ].map(([icon, title, text, sub]) => (
              <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0
                  }}
                >
                  {icon}
                </div>

                <div>
                  <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>
                    {title}
                  </div>

                  <div style={{ fontSize: "0.9rem", color: "#fff", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {text}
                  </div>

                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
            Program de lucru
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {hours.map(([day, time]) => (
              <div
                key={day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{day}</span>
                <span style={{ color: "#fff" }}>{time}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
            Urmărește-ne
          </div>

          <div style={{ display: "flex", gap: "0.8rem" }}>
            {socials.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nov-soc-btn"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.72rem",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.3s"
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAP */}
      <div style={{ background: "#f0d8de", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {[600, 400].map((size) => (
          <div key={size} style={{ position: "absolute", width: `${size}px`, height: `${size}px`, borderRadius: "50%", border: "1px solid rgba(139,74,92,0.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        ))}
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#8b4a5c", marginBottom: "0.3rem" }}>Novelle Spa & Beauty</div>
          <div style={{ fontSize: "0.85rem", color: "#9e7080", marginBottom: "1rem" }}>Str. Florilor 12, Sector 1, Bucharest</div>
          <button onClick={() => window.open("https://maps.google.com/?q=Bucharest+Romania", "_blank")} style={{ background: "#8b4a5c", color: "#fff", padding: "0.6rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
            Deschide pe Google Maps →
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: "5rem 4rem", background: "#fef5f7" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.8rem" }}>Întrebări frecvente</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", color: "#8b4a5c", marginBottom: "3rem" }}>Tot ceea ce trebuie să știi despre noi</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {faqs.map((faq) => (
            <div key={faq.q} className="nov-faq-item" style={{ background: "#fff", border: "1px solid #f2c4d0", padding: "1.5rem", transition: "border-color 0.2s" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#8b4a5c", marginBottom: "0.6rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: "#9e7080" }}>{faq.a}</div>
            </div>
          ))}
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

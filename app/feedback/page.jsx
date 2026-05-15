"use client";
import { useState } from "react";

const starLabels = ["", "Terrible", "Poor", "Average", "Great", "Excellent!"];

const treatments = [
  "Rose Ritual Facial", "Swedish Full Body Massage", "Hot Stone Therapy",
  "Glow Body Wrap", "Beauty Studio (unghii, gene, sprâncene)", "Un pachet întreg", "Altceva",
];
const therapists = ["Diana", "Anaïs", "Alina", "Nu sunt sigur"];
const sources = [
  "Instagram", "Google", 
  "TikTok", "Prieteni/Familie", "Am trecut pe lângă salon", "Altceva",
];

function StarRating({ id, label, value, onChange }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label style={{ fontSize: "0.82rem", letterSpacing: "0.05em", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>{label}</label>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.3rem" }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} onClick={() => onChange(n)} style={{ fontSize: "2.5rem", cursor: "pointer", color: n <= value ? "#8b4a5c" : "#e0c0c8", lineHeight: 1, transition: "color 0.15s" }}>★</span>
        ))}
      </div>
      {id === "overall" && (
        <div style={{ fontSize: "0.8rem", color: "#9e7080", marginTop: "0.3rem" }}>
          {value === 0 ? "Click to rate" : starLabels[value]}
        </div>
      )}
    </div>
  );
}

function RadioGroup({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {options.map((opt) => (
        <div key={opt} onClick={() => onChange(opt)} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.8rem 1rem", border: `1px solid ${value === opt ? "#8b4a5c" : "#f2c4d0"}`, background: value === opt ? "#f9e8ec" : "#fff", cursor: "pointer", transition: "all 0.2s" }}>
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: `1.5px solid ${value === opt ? "#8b4a5c" : "#f2c4d0"}`, background: value === opt ? "#8b4a5c" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {value === opt && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />}
          </div>
          <span style={{ fontSize: "0.87rem", color: "#3a2530" }}>{opt}</span>
        </div>
      ))}
    </div>
  );
}

function MultiSelect({ options, values, onChange }) {
  const toggle = (opt) => {
    if (values.includes(opt)) onChange(values.filter((v) => v !== opt));
    else onChange([...values, opt]);
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
      {options.map((opt) => {
        const active = values.includes(opt);
        return (
          <div key={opt} onClick={() => toggle(opt)} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.8rem 1rem", border: `1px solid ${active ? "#8b4a5c" : "#f2c4d0"}`, background: active ? "#f9e8ec" : "#fff", cursor: "pointer", transition: "all 0.2s" }}>
            <div style={{ width: "16px", height: "16px", border: `1.5px solid ${active ? "#8b4a5c" : "#f2c4d0"}`, background: active ? "#8b4a5c" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#fff" }}>
              {active && "✓"}
            </div>
            <span style={{ fontSize: "0.87rem", color: "#3a2530" }}>{opt}</span>
          </div>
        );
      })}
    </div>
  );
}

function NpsScale({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {[0,1,2,3,4,5,6,7,8,9,10].map((n) => (
        <button key={n} onClick={() => onChange(n)} style={{ width: "44px", height: "44px", border: `1px solid ${value === n ? "#8b4a5c" : "#f2c4d0"}`, background: value === n ? "#8b4a5c" : "transparent", color: value === n ? "#fff" : "#9e7080", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", cursor: "pointer", transition: "all 0.2s" }}>{n}</button>
      ))}
    </div>
  );
}

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "",
    treatment: "", therapist: "",
    overallStar: 0, treatmentStar: 0, atmosphereStar: 0, staffStar: 0,
    nps: null,
    sources: [],
    loved: "", improve: "", other: "",
  });

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const SectionHeader = ({ num, title }) => (
    <>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c97d92", marginBottom: "0.4rem" }}>{num}</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#8b4a5c", marginBottom: "1.5rem" }}>{title}</h2>
      <div style={{ height: "1px", background: "#f2c4d0", marginBottom: "2rem" }} />
    </>
  );

  if (submitted) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap'); *{box-sizing:border-box;margin:0;padding:0;} body{font-family:'Jost',sans-serif;background:#fdf7f5;}`}</style>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0" }}>
          <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        </nav>
<div style={{ textAlign: "center", padding: "6rem 2rem" }}>
  <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🌸</div>

  <h2
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "2.8rem",
      color: "#8b4a5c",
      marginBottom: "1rem"
    }}
  >
        Îți mulțumim din suflet{form.name ? `, ${form.name}` : ""}!
      </h2>

      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#9e7080",
          maxWidth: "420px",
          margin: "0 auto 1rem"
        }}
      >
        Feedback-ul tău înseamnă enorm pentru noi. Citim fiecare răspuns și îl folosim pentru a face Novelle un loc și mai bun pentru toată lumea.
      </p>

      <p
        style={{
          fontSize: "0.85rem",
          color: "#9e7080",
          marginBottom: "2rem"
        }}
      >
        Sperăm să te revedem foarte curând.
      </p>

      <a
        href="/"
        style={{
          background: "#8b4a5c",
          color: "#fff",
          padding: "0.85rem 2.5rem",
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.78rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "inline-block"
        }}
      >
        Înapoi la pagina principală
      </a>
    </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; }
        textarea, input { font-family: 'Jost', sans-serif; }
        textarea:focus, input:focus { outline: none; border-color: #c97d92 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Gallery", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}><a href={href} style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9e7080" }}>{label}</a></li>
          ))}
        </ul>
        <button style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

      {/* HERO */}
      <div style={{ background: "#f9e8ec", padding: "5rem 4rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "1rem" }}>
          Ne-ar face plăcere să îți auzim părerea
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "3.2rem",
            fontWeight: 300,
            color: "#8b4a5c",
            marginBottom: "1rem"
          }}
        >
          Împărtășește-ți <em>experiența Novelle</em>
        </h1>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#9e7080",
            maxWidth: "500px",
            margin: "0 auto"
          }}
        >
          Feedback-ul tău ne ajută să creștem, să ne îmbunătățim și să continuăm să oferim grija excepțională pe care o meriți. Durează doar 2 minute.
        </p>
      </div>

      {/* FORM */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem" }}>

      {/* 01 — DESPRE VIZITA TA */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader num="01" title="Despre vizita ta" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          {[
            ["name", "Prenumele tău", "text", "ex: Andreea"],
            ["email", "Email-ul tău (opțional)", "email", "ex: andreea@email.com"]
          ].map(([key, label, type, ph]) => (
            <div key={key}>
              <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                value={form[key]}
                onChange={(e) => set(key)(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #f2c4d0",
                  background: "#fff",
                  padding: "0.75rem 1rem",
                  fontSize: "0.87rem",
                  color: "#3a2530"
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
            Ce tratament ai primit?
          </label>
          <RadioGroup options={treatments} value={form.treatment} onChange={set("treatment")} />
        </div>

        <div>
          <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
            Cu ce specialist ai interacționat?
          </label>
          <RadioGroup options={therapists} value={form.therapist} onChange={set("therapist")} />
        </div>
      </div>

      {/* 02 — EVALUARE CU STELE */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader num="02" title="Evaluează experiența ta" />

        <StarRating id="overall" label="Experiență generală" value={form.overallStar} onChange={set("overallStar")} />
        <StarRating id="treatment" label="Calitatea tratamentului" value={form.treatmentStar} onChange={set("treatmentStar")} />
        <StarRating id="atmosphere" label="Atmosferă & ambient" value={form.atmosphereStar} onChange={set("atmosphereStar")} />
        <StarRating id="staff" label="Amabilitatea personalului" value={form.staffStar} onChange={set("staffStar")} />
      </div>

      {/* 03 — NPS */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader num="03" title="Ne-ai recomanda?" />

        <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
          Cât de probabil este să recomanzi Novelle unui prieten sau unui membru al familiei?
        </label>

        <span style={{ fontSize: "0.78rem", color: "#9e7080", marginBottom: "0.8rem", display: "block" }}>
          0 = Deloc probabil · 10 = Extrem de probabil
        </span>

        <NpsScale value={form.nps} onChange={set("nps")} />
      </div>

      {/* 04 — CUM AI AFLAT DE NOI */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader num="04" title="Cum ai aflat de noi?" />

        <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
          Selectează toate variantele care se aplică
        </label>

        <MultiSelect options={sources} values={form.sources} onChange={set("sources")} />
      </div>

      {/* 05 — FEEDBACK DESCHIS */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader num="05" title="Spune-ne mai multe" />

        {[
          ["loved", "Ce ți-a plăcut cel mai mult la vizita ta?", "Facialul cu trandafir mi-a lăsat pielea luminoasă zile întregi..."],
          ["improve", "Ce am putea îmbunătăți?", "Orice sugestie este binevenită..."],
          ["other", "Alte comentarii?", "Orice altceva ai dori să ne împărtășești..."]
        ].map(([key, label, ph]) => (
          <div key={key} style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontSize: "0.82rem", color: "#3a2530", marginBottom: "0.6rem", display: "block" }}>
              {label}
            </label>

            <textarea
              placeholder={ph}
              value={form[key]}
              onChange={(e) => set(key)(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #f2c4d0",
                background: "#fff",
                padding: "1rem",
                fontSize: "0.87rem",
                color: "#3a2530",
                resize: "vertical",
                minHeight: "100px"
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setSubmitted(true)}
        style={{
          width: "100%",
          background: "#8b4a5c",
          color: "#fff",
          padding: "1.1rem",
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer"
        }}
      >
        Trimite feedback-ul meu →
      </button>
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
      <div style={{ background: "#7a3f4f", padding: "1rem 4rem", textAlign: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
        © 2024 Novelle Spa & Beauty. All rights reserved.
      </div>
    </>
  );
}

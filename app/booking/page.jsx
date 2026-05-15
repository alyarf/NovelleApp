"use client";
import { useState } from "react";

const treatments = [
  { icon: "🌸", name: "Clean Girl Glow", price: "180 lei", duration: "60 min" },
  { icon: "🕊️", name: "Soft Glam Experience", price: "250 lei", duration: "90 min" },
  { icon: "💆", name: "Swedish Reset Massage", price: "150 lei", duration: "60 min" },
  { icon: "✨", name: "Glow Body Wrap", price: "220 lei", duration: "75 min" },
  { icon: "💧", name: "Luminosity Peel", price: "150 lei", duration: "45 min" },
  { icon: "💅", name: "Velvet Touch Nails", price: "120 lei", duration: "60 min" },
];

const therapists = [
  { name: "Alina", role: "Fondatoare & Specialist în îngrijire", from: "#f0d5de", to: "#dda8bc" },
  { name: "Anaïs", role: "Skincare Specialist", from: "#e8d0e8", to: "#c9a0c9" },
  { name: "Diana", role: "Beauty & Body Specialist", from: "#d5dff0", to: "#a8b8d8" },
];

const calDays = [
  { day: null }, { day: null }, { day: null },
  ...Array.from({ length: 10 }, (_, i) => ({ day: i + 1, disabled: true })),
  { day: 11, today: true }, { day: 12 }, { day: 13 }, { day: 14 },
  { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 },
  { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 },
  { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 },
  { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 },
];

const timeSlots = [
  { time: "09:00", taken: true }, { time: "09:30" }, { time: "10:00" }, { time: "10:30", taken: true },
  { time: "11:00" }, { time: "11:30" }, { time: "12:00", taken: true }, { time: "12:30", taken: true },
  { time: "14:00" }, { time: "14:30" }, { time: "15:00" }, { time: "15:30", taken: true },
  { time: "16:00" }, { time: "16:30" }, { time: "17:00", taken: true }, { time: "17:30" },
];

const stepLabels = ["Tratament", "Specialist", "Data & Ora", "Detaliile tale"];
function PlayArrow() {
  return (
    <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #fff", marginLeft: "2px" }} />
  );
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [booking, setBooking] = useState({ treatment: null, therapist: null, date: null, time: null });
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", notes: "" });

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputStyle = {
    width: "100%", border: "1px solid #f2c4d0", background: "#fff",
    padding: "0.75rem 1rem", fontFamily: "'Jost', sans-serif", fontSize: "0.87rem", color: "#3a2530", outline: "none",
  };

  const SummaryValue = ({ val, empty = "Neselectat" }) => (
    <div style={{ fontSize: "0.92rem", color: val ? "#fff" : "rgba(255,255,255,0.35)", fontStyle: val ? "normal" : "italic" }}>{val || empty}</div>
  );

  if (confirmed) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap'); *{box-sizing:border-box;margin:0;padding:0;} body{font-family:'Jost',sans-serif;background:#fdf7f5;}`}</style>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0" }}>
          <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        </nav>
        <div style={{ textAlign: "center", padding: "5rem 2rem" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🌸</div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.8rem",
            color: "#8b4a5c",
            marginBottom: "1rem"
          }}
        >
          Ești programat{form.firstName ? `, ${form.firstName}` : ""}!
        </h2>

        <p
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.8,
            color: "#9e7080",
            maxWidth: "440px",
            margin: "0 auto 2rem"
          }}
        >
          Îți mulțumim că ai ales Novelle. Îți vom trimite în scurt timp o confirmare pe email și abia așteptăm să te primim.
        </p>

        <div
          style={{
            background: "#f9e8ec",
            border: "1px solid #f2c4d0",
            padding: "2rem",
            maxWidth: "440px",
            margin: "0 auto 2rem",
            textAlign: "left"
          }}
        >
          {[
            ["Tratament", booking.treatment?.name],
            ["Specialist", booking.therapist?.name],
            ["Data & Ora", booking.date && booking.time ? `${booking.date} · ${booking.time}` : null],
            ["Total", booking.treatment?.price]
          ].map(([label, val]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.6rem 0",
                borderBottom: "1px solid #f2c4d0",
                fontSize: "0.85rem"
              }}
            >
              <span style={{ color: "#9e7080" }}>{label}</span>
              <span style={{ color: "#8b4a5c", fontWeight: 500 }}>{val || "—"}</span>
            </div>
          ))}
        </div>

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
        </a></div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; background: #fdf7f5; color: #3a2530; overflow-x: hidden; }
        input:focus, textarea:focus { border-color: #c97d92 !important; }
        .nov-treatment-opt:hover { border-color: #c97d92 !important; }
        .nov-therapist-opt:hover { border-color: #c97d92 !important; }
        .nov-time-slot:hover { border-color: #c97d92 !important; background: #f9e8ec !important; }
        .nov-cal-day:hover { border-color: #f2c4d0 !important; background: #f9e8ec !important; }
        .nov-btn-next:hover { background: #c97d92 !important; }
        .nov-footer-link:hover { color: #fff !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 4rem", background: "rgba(253,247,245,0.97)", borderBottom: "1px solid #f2c4d0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, letterSpacing: "0.12em", color: "#8b4a5c", textDecoration: "none" }}>Novelle</a>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Acasă", "/"], ["Despre noi", "/about"], ["Servicii", "/services"], ["Galerie", "/gallery"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <li key={label}><a href={href} style={{ textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9e7080" }}>{label}</a></li>
          ))}
        </ul>
        <button style={{ background: "#8b4a5c", color: "#fff", padding: "0.55rem 1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>Programează-te acum</button>
      </nav>

      {/* HERO */}
      <div style={{ background: "#f9e8ec", padding: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c97d92", marginBottom: "1rem" }}>Programări</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#8b4a5c", lineHeight: 1.2, marginBottom: "1rem" }}>
              Programează-ți <em>experiența Novelle</em>
            </h1>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#9e7080" }}>
            Alege ritualul dorit, specialistul și momentul tău perfect. De restul ne ocupăm noi.
          </p>        
          </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {[  ["🕐", "Programare ușoară", "confirmare în maximum 2 ore"],
    ["❌", "Anulare gratuită", "cu până la 24h înainte"],
    ["🌿", "Toate produsele", "organice & cruelty-free"]
  ].map(([icon, title, sub]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid #f2c4d0", padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.85rem", color: "#9e7080" }}>
              <span>{icon}</span><span><strong style={{ color: "#8b4a5c", fontWeight: 500 }}>{title}</strong> — {sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STEPS BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f2c4d0", padding: "0 4rem", display: "flex" }}>
        {stepLabels.map((label, i) => {
          const n = i + 1;
          const isActive = step === n;
          const isDone = step > n;
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "1.2rem 2rem 1.2rem 0", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: isActive ? "#8b4a5c" : isDone ? "#c97d92" : "#9e7080" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: `1.5px solid ${isActive ? "#8b4a5c" : isDone ? "#c97d92" : "#f2c4d0"}`, background: isActive || isDone ? (isActive ? "#8b4a5c" : "#c97d92") : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: isActive || isDone ? "#fff" : "#9e7080", flexShrink: 0 }}>
                {isDone ? "✓" : n}
              </div>
              {label}
              {n < 4 && <span style={{ marginLeft: "1.5rem", color: "#f2c4d0" }}>›</span>}
            </div>
          );
        })}
      </div>

      {/* BOOKING BODY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "60vh" }}>

        {/* MAIN */}
        <div style={{ padding: "3rem 4rem" }}>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#8b4a5c", marginBottom: "0.4rem" }}>
  Alege tratamentul tău
</h2>
<p style={{ fontSize: "0.83rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.6 }}>
  Selectează tratamentul pe care dorești să îl programezi. Toate prețurile sunt per ședință.
</p>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
   {treatments.map((t) => (
                  <div key={t.name} className="nov-treatment-opt" onClick={() => setBooking((b) => ({ ...b, treatment: t }))}
                    style={{ border: `1.5px solid ${booking.treatment?.name === t.name ? "#8b4a5c" : "#f2c4d0"}`, background: booking.treatment?.name === t.name ? "#f9e8ec" : "#fff", padding: "1.2rem", cursor: "pointer", transition: "all 0.2s", position: "relative" }}>
                    <div style={{ position: "absolute", top: "0.8rem", right: "0.8rem", width: "18px", height: "18px", borderRadius: "50%", border: `1.5px solid ${booking.treatment?.name === t.name ? "#8b4a5c" : "#f2c4d0"}`, background: booking.treatment?.name === t.name ? "#8b4a5c" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#fff" }}>
                      {booking.treatment?.name === t.name && "✓"}
                    </div>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{t.icon}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#8b4a5c", marginBottom: "0.2rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9e7080" }}>{t.duration} · {t.price}</div>
                  </div>
                ))}
              </div>
              <button className="nov-btn-next" onClick={() => setStep(2)} style={{ background: "#8b4a5c", color: "#fff", padding: "0.85rem 2.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}>Continuă →</button>
            </div>
          )}

          {/* PASUL 2 */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#8b4a5c", marginBottom: "0.4rem" }}>
                Alege specialistul
              </h2>
              <p style={{ fontSize: "0.83rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.6 }}>
                Fiecare dintre specialiștii noștri are o expertiză unică. Alege persoana la care dorești să mergi.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", marginBottom: "2rem" }}>
                {therapists.map((t) => (
                  <div
                    key={t.name}
                    className="nov-therapist-opt"
                    onClick={() => setBooking((b) => ({ ...b, therapist: t }))}
                    style={{
                      border: `1.5px solid ${booking.therapist?.name === t.name ? "#8b4a5c" : "#f2c4d0"}`,
                      background: booking.therapist?.name === t.name ? "#f9e8ec" : "#fff",
                      padding: "1.5rem 1rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.8rem",
                        fontStyle: "italic",
                        color: "rgba(255,255,255,0.8)",
                        margin: "0 auto 0.8rem"
                      }}
                    >
                      {t.name[0]}
                    </div>

                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.1rem",
                        color: "#8b4a5c",
                        marginBottom: "0.2rem"
                      }}
                    >
                      {t.name}
                    </div>

                    <div style={{ fontSize: "0.72rem", color: "#9e7080", letterSpacing: "0.05em" }}>
                      {t.role}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    background: "transparent",
                    color: "#8b4a5c",
                    padding: "0.85rem 2rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid #f2c4d0",
                    cursor: "pointer"
                  }}
                >
                  ← Înapoi
                </button>

                <button
                  className="nov-btn-next"
                  onClick={() => setStep(3)}
                  style={{
                    background: "#8b4a5c",
                    color: "#fff",
                    padding: "0.85rem 2.5rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                >
                  Continuă →
                </button>
              </div>
            </div>
          )}

          {/* PASUL 3 */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#8b4a5c", marginBottom: "0.4rem" }}>
                Alege data & ora
              </h2>
              <p style={{ fontSize: "0.83rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.6 }}>
                Selectează data și intervalul orar preferat pentru programare.
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <button style={{ background: "transparent", border: "1px solid #f2c4d0", width: "32px", height: "32px", cursor: "pointer", fontSize: "0.9rem", color: "#9e7080" }}>
                    ‹
                  </button>

                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#8b4a5c" }}>
                    Mai 2026
                  </span>

                  <button style={{ background: "transparent", border: "1px solid #f2c4d0", width: "32px", height: "32px", cursor: "pointer", fontSize: "0.9rem", color: "#9e7080" }}>
                    ›
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "4px" }}>
                  {["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"].map(d => (
                    <div
                      key={d}
                      style={{
                        textAlign: "center",
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#9e7080",
                        padding: "0.4rem 0"
                      }}
                    >
                      {d}
                    </div>
                  ))}

                  {calDays.map((d, i) => (
                    <div
                      key={i}
                      onClick={() => !d.disabled && d.day && setBooking((b) => ({ ...b, date: `${d.day} Mai` }))}
                      className={!d.disabled && d.day ? "nov-cal-day" : ""}
                      style={{
                        textAlign: "center",
                        padding: "0.5rem",
                        fontSize: "0.85rem",
                        cursor: d.disabled || !d.day ? "default" : "pointer",
                        border: `1px solid ${booking.date === `${d.day} Mai` ? "#8b4a5c" : "transparent"}`,
                        background: booking.date === `${d.day} Mai` ? "#8b4a5c" : "transparent",
                        color: booking.date === `${d.day} Mai` ? "#fff" : d.disabled ? "#ddd" : d.today ? "#8b4a5c" : "#3a2530",
                        fontWeight: d.today ? 500 : 400,
                        transition: "all 0.2s"
                      }}
                    >
                      {d.day || ""}
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8b4a5c", marginBottom: "1rem" }}>
                Intervale disponibile
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem", marginBottom: "2rem" }}>
                {timeSlots.map((s) => (
                  <div
                    key={s.time}
                    onClick={() => !s.taken && setBooking((b) => ({ ...b, time: s.time }))}
                    className={!s.taken ? "nov-time-slot" : ""}
                    style={{
                      padding: "0.6rem",
                      border: `1px solid ${booking.time === s.time ? "#8b4a5c" : "#f2c4d0"}`,
                      textAlign: "center",
                      fontSize: "0.82rem",
                      cursor: s.taken ? "not-allowed" : "pointer",
                      background: booking.time === s.time ? "#8b4a5c" : "transparent",
                      color: booking.time === s.time ? "#fff" : s.taken ? "#ccc" : "#3a2530",
                      textDecoration: s.taken ? "line-through" : "none",
                      transition: "all 0.2s"
                    }}
                  >
                    {s.time}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    background: "transparent",
                    color: "#8b4a5c",
                    padding: "0.85rem 2rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid #f2c4d0",
                    cursor: "pointer"
                  }}
                >
                  ← Înapoi
                </button>

                <button
                  className="nov-btn-next"
                  onClick={() => setStep(4)}
                  style={{
                    background: "#8b4a5c",
                    color: "#fff",
                    padding: "0.85rem 2.5rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                >
                  Continuă →
                </button>
              </div>
            </div>
          )}

          {/* PASUL 4 */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#8b4a5c", marginBottom: "0.4rem" }}>
                Detaliile tale
              </h2>

              <p style={{ fontSize: "0.83rem", color: "#9e7080", marginBottom: "2rem", lineHeight: 1.6 }}>
                Aproape am terminat — avem nevoie doar de câteva detalii pentru a confirma programarea ta.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                {[
                  ["firstName", "Prenume", "text", "Andreea"],
                  ["lastName", "Nume", "text", "Ionescu"]
                ].map(([k, l, t, p]) => (
                  <div key={k}>
                    <label
                      style={{
                        fontSize: "0.8rem",
                        color: "#3a2530",
                        marginBottom: "0.4rem",
                        display: "block"
                      }}
                    >
                      {l}
                    </label>
                    <input
                      type={t}
                      placeholder={p}
                      value={form[k]}
                      onChange={setField(k)}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                {[
                  ["email", "Adresă de email", "email", "andreea@email.com"],
                  ["phone", "Număr de telefon", "tel", "+40 721 000 000"]
                ].map(([k, l, t, p]) => (
                  <div key={k}>
                    <label
                      style={{
                        fontSize: "0.8rem",
                        color: "#3a2530",
                        marginBottom: "0.4rem",
                        display: "block"
                      }}
                    >
                      {l}
                    </label>
                    <input
                      type={t}
                      placeholder={p}
                      value={form[k]}
                      onChange={setField(k)}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    fontSize: "0.8rem",
                    color: "#3a2530",
                    marginBottom: "0.4rem",
                    display: "block"
                  }}
                >
                  Observații pentru specialistul tău? (opțional)
                </label>

                <textarea
                  placeholder="Alergii, preferințe, zone de concentrare..."
                  value={form.notes}
                  onChange={setField("notes")}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                />
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    background: "transparent",
                    color: "#8b4a5c",
                    padding: "0.85rem 2rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid #f2c4d0",
                    cursor: "pointer"
                  }}
                >
                  ← Înapoi
                </button>

                <button
                  className="nov-btn-next"
                  onClick={() => setConfirmed(true)}
                  style={{
                    background: "#8b4a5c",
                    color: "#fff",
                    padding: "0.85rem 2.5rem",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                >
                  Confirmă programarea →
                </button>
              </div>
            </div>
          )}
</div>
     {/* PANOU REZUMAT */}
      <div style={{ background: "#8b4a5c", padding: "2.5rem" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.4rem",
            color: "#fff",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255,255,255,0.15)"
          }}
        >
          Rezumatul programării tale
        </div>

  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    {[
      ["Tratament", booking.treatment?.name],
      ["Durată", booking.treatment?.duration],
      ["Specialist", booking.therapist?.name],
      ["Data", booking.date ? `${booking.date} 2026` : null],
      ["Ora", booking.time]
    ].map(([label, val]) => (
      <div key={label}>
        <div
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "0.2rem"
          }}
        >
          {label}
        </div>
        <SummaryValue val={val} />
      </div>
    ))}
  </div>

  <div
    style={{
      marginTop: "2rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.15)"
    }}
  >
    <div
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.45)",
        marginBottom: "0.3rem"
      }}
    >
      Total
    </div>

    <div
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2.2rem",
        color: "#fff"
      }}
    >
      {booking.treatment?.price || "— lei"}
    </div>

    <div
      style={{
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.4)",
        marginTop: "0.5rem",
        lineHeight: 1.5
      }}
    >
      Plata se face la salon în ziua programării. Nu este necesar avans.
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
            {[["Home","/"],["About Us","/about"],["Services","/services"],["Gallery","/gallery"],["Blog","/blog"],["Contact","/contact"]].map(([l,h]) => (
              <li key={l}><a href={h} className="nov-footer-link" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.87rem" }}>{l}</a></li>
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

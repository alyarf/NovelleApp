import { useState } from "react";

export default function HomePage() {
  const moods = [
    { title: "Calm Reset", emoji: "🌿", desc: "Relax, unwind, recharge" },
    { title: "Confidence Boost", emoji: "🔥", desc: "Bold, powerful, radiant" },
    { title: "Soft Glow", emoji: "✨", desc: "Natural, fresh, luminous" },
    { title: "Main Character", emoji: "💅", desc: "All eyes on you energy" },
  ];

  const services = [
    {
      title: "Mood-Based Hair Experience",
      desc: "Hair transformation based on how you want to feel.",
    },
    {
      title: "Signature Nail Rituals",
      desc: "Elegant nail care with aesthetic design focus.",
    },
    {
      title: "Glow Skin Treatment",
      desc: "Hydration + radiance restoration for your skin.",
    },
  ];

  const testimonials = [
    {
      name: "Amina",
      text: "I didn’t just change my look, I changed how I feel about myself.",
    },
    {
      name: "Elena",
      text: "The calm atmosphere made it feel like therapy, not just a salon.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f6] text-[#1f1f1f] font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-semibold tracking-wide">MOOD Studio</h1>
        <nav className="space-x-6 text-sm opacity-80">
          <a href="#moods">Moods</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a className="font-semibold" href="#book">Book</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-24">
        <h2 className="text-5xl md:text-6xl font-light leading-tight">
          Beauty that starts with your <br />
          <span className="font-medium">state of mind</span>
        </h2>

        <p className="mt-6 text-lg opacity-70 max-w-xl mx-auto">
          A new kind of beauty studio where every transformation begins with how you feel,
          not just how you look.
        </p>

        <button className="mt-10 px-8 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition">
          Book your mood
        </button>
      </section>

      {/* MOODS */}
      <section id="moods" className="px-10 py-20 bg-white">
        <h3 className="text-3xl font-light mb-10 text-center">
          Choose your mood
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {moods.map((mood, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl text-center hover:shadow-md transition bg-[#faf7f6]"
            >
              <div className="text-3xl">{mood.emoji}</div>
              <h4 className="mt-3 font-medium">{mood.title}</h4>
              <p className="text-sm opacity-70 mt-2">{mood.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-10 py-20">
        <h3 className="text-3xl font-light text-center mb-10">
          Our experiences
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white border rounded-2xl hover:shadow-lg transition"
            >
              <h4 className="font-medium text-lg">{s.title}</h4>
              <p className="text-sm opacity-70 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-10 py-20 bg-[#fff]">
        <h3 className="text-3xl font-light text-center mb-10">
          What clients feel
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-[#faf7f6]">
              <p className="italic opacity-80">"{t.text}"</p>
              <p className="mt-4 font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="text-center py-24 px-6 bg-black text-white">
        <h3 className="text-4xl font-light">
          Ready to feel different?
        </h3>

        <p className="mt-4 opacity-70">
          Book your personalized beauty experience today.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:opacity-80 transition">
          Book appointment
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm opacity-60">
        © {new Date().getFullYear()} MOOD Studio — Beauty is emotional
      </footer>
    </div>
  );
}
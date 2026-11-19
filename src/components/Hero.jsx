import { useCallback, useEffect, useState } from "react";
import { SLIDES, WHATSAPP } from "../data/site";
import { useCountUp } from "../hooks";
import { Molecule } from "./Icons";
import Reveal from "./Reveal";

function Stat({ value, label }) {
  const n = useCountUp(value);
  return <div><b>{n}</b><span>{label}</span></div>;
}

function Slider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;
  const go = useCallback((i) => setIdx((i + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 4500);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <Reveal className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slides" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {SLIDES.map((s) => <img key={s.src} src={s.src} alt={s.alt} />)}
      </div>
      <button className="sl-btn prev" aria-label="Previous" onClick={() => go(idx - 1)}>←</button>
      <button className="sl-btn next" aria-label="Next" onClick={() => go(idx + 1)}>→</button>
      <div className="dots">
        {SLIDES.map((s, i) => (
          <button key={s.src} aria-label={`Slide ${i + 1}`} className={i === idx ? "on" : ""} onClick={() => go(i)} />
        ))}
      </div>
    </Reveal>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <span className="orb o1" /><span className="orb o2" /><span className="orb o3" />
        <Molecule className="molecule" />
      </div>
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="pill">🧪 Selection Carnival — up to 87% off</span>
          <h1>Where <span className="grad">Chemistry</span><br />Comes Alive.</h1>
          <p>Expert-led courses for KVS, NVS, PGT, CSIR NET, GATE and Assistant Professor exams — built to take you from zero to selection.</p>
          <div className="hero-cta">
            <a href="#courses" className="btn btn-primary btn-lg">Explore Courses →</a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-glass btn-lg">Talk to a Mentor</a>
          </div>
          <div className="stats">
            <Stat value={15} label="+ Courses" />
            <Stat value={87} label="% Max discount" />
            <div><b>Hindi</b><span>+ English</span></div>
          </div>
        </Reveal>
        <Slider />
      </div>
    </section>
  );
}

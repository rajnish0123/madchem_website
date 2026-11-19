import { FEATURES } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2>Welcome to Madchem Classes Pvt. Ltd. 🔬</h2>
          <p>Your trusted destination to master Chemistry in a fun, clear and effective way. We're more than a coaching institute — we're a new-age learning platform transforming how Chemistry is taught and experienced.</p>
          <p>At Madchem, we believe Chemistry is not just about equations — it's a powerful tool to understand the world. Our goal is to help you score high and develop a lifelong love for the subject.</p>
          <a href="#" className="btn btn-primary">Subscribe on YouTube ▶</a>
        </Reveal>
        <div className="features">
          {FEATURES.map((f) => (
            <Reveal key={f.title} className="feat">
              <span>{f.icon}</span>
              <b>{f.title}</b>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CATEGORIES } from "../data/site";
import Reveal from "./Reveal";

export default function Browse() {
  return (
    <section className="section" id="browse">
      <div className="container">
        <Reveal className="sec-head">
          <div><span className="eyebrow">Browse</span><h2>Learn your way</h2></div>
        </Reveal>
        <div className="browse-grid">
          {CATEGORIES.map((c) => (
            <Reveal as="a" key={c.name} className="cat" href="#courses">
              <span className="ico">{c.icon}</span>
              <b>{c.name}</b>
              <small>{c.sub}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

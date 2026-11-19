import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import CourseCard, { CourseThumb, discount, inr } from "../components/CourseCard";
import CourseContent from "../components/CourseContent";
import Reveal from "../components/Reveal";
import { COURSE_DETAILS, MENTORS } from "../data/courseDetails";
import { buyUrl, COURSES, coursePath, findCourse, WHATSAPP } from "../data/site";

function PatternTable({ pattern }) {
  return (
    <div className="pattern">
      <h4>{pattern.title}</h4>
      {pattern.notes?.length > 0 && (
        <ul className="pattern-notes">{pattern.notes.map((n) => <li key={n}>{n}</li>)}</ul>
      )}
      <div className="table-wrap">
        <table>
          <thead><tr>{pattern.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {pattern.rows.map((r, i) => (
              <tr key={i} className={r[0] === "Total" ? "total" : ""}>
                {r.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PriceCard({ course }) {
  const [copied, setCopied] = useState(false);
  const free = course.price === 0;
  const off = discount(course);
  const enquire = `${WHATSAPP}?text=${encodeURIComponent(`Hi, I'd like to know more about: ${course.title}`)}`;

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <aside className="price-card">
      <h1 className="pc-title">{course.title}</h1>
      <div className="pc-price">
        {free ? <b>Free</b> : <><b>{inr(course.price)}</b><s>{inr(course.mrp)}</s><span className="pc-off">{off}% OFF</span></>}
      </div>
      {!free && <p className="pc-save">You save {inr(course.mrp - course.price)}</p>}
      <ul className="pc-meta">
        <li><span>⏳</span>Validity: <b>{course.validity}</b></li>
        <li><span>📱</span>Access on <b>app &amp; web</b></li>
      </ul>
      <a href={buyUrl(course)} target="_blank" rel="noopener" className="btn btn-primary btn-lg pc-buy">
        {free ? "Enroll Free" : "Buy Now"} ↗
      </a>
      <a href={enquire} target="_blank" rel="noopener" className="btn btn-glass pc-enquire">
        💬 Enquire on WhatsApp
      </a>
      <button className="pc-share" onClick={share}>{copied ? "✓ Link copied" : "🔗 Share this course"}</button>
      <p className="pc-note">Checkout opens on madchemclasses.online</p>
    </aside>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = findCourse(slug);

  useEffect(() => {
    if (course) document.title = `${course.title} – Madchem Classes`;
    return () => { document.title = "Madchem Classes – Where Chemistry Comes Alive"; };
  }, [course]);

  if (!course) return <Navigate to="/" replace />;
  // Old or mistyped slug → canonical URL.
  if (slug !== `${course.id}-${course.slug}`) return <Navigate to={coursePath(course)} replace />;

  const d = COURSE_DETAILS[course.id] ?? { overview: [course.desc], highlights: [], idealFor: [] };
  const related = COURSES.filter((c) => c.tag === course.tag && c.id !== course.id).slice(0, 3);

  return (
    <div className="detail">
      <div className="detail-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to={{ pathname: "/", hash: "#courses" }}>Courses</Link><span>/</span>
            <em>{course.title}</em>
          </nav>
        </div>
      </div>

      <div className="container detail-grid">
        <div className="detail-main">
          <Reveal>
            <CourseThumb course={course} className="detail-thumb">
              {course.isNew && <span className="badge">NEW</span>}
              {course.price === 0 && <span className="badge free">FREE</span>}
            </CourseThumb>
          </Reveal>

          {d.tagline && <p className="tagline">{d.tagline}</p>}

          <Reveal as="section" className="d-section">
            <h2>About this course</h2>
            {d.overview.map((p) => <p key={p}>{p}</p>)}
          </Reveal>

          {d.highlights.length > 0 && (
            <Reveal as="section" className="d-section">
              <h2>What you'll get</h2>
              <ul className="checks">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            </Reveal>
          )}

          <CourseContent courseId={course.id} buyHref={buyUrl(course)} />

          {d.idealFor.length > 0 && (
            <Reveal as="section" className="d-section">
              <h2>Who should join?</h2>
              <div className="ideal">{d.idealFor.map((x) => <div key={x}>🎯 {x}</div>)}</div>
            </Reveal>
          )}

          {d.patterns?.length > 0 && (
            <Reveal as="section" className="d-section">
              <h2>Exam pattern</h2>
              {d.patterns.map((p) => <PatternTable key={p.title} pattern={p} />)}
            </Reveal>
          )}

          <Reveal as="section" className="d-section">
            <h2>Learn from IITians</h2>
            <div className="mentors">
              {MENTORS.map((m) => (
                <div key={m.name} className="mentor">
                  <div className="avatar">{m.name[0]}</div>
                  <div>
                    <b>{m.name}</b>
                    <small>{m.from} · <span className="m-badge">{m.badge}</span></small>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <PriceCard course={course} />
      </div>

      {related.length > 0 && (
        <section className="section alt related">
          <div className="container">
            <div className="sec-head"><div><span className="eyebrow">Keep exploring</span><h2>Related courses</h2></div></div>
            <div className="course-grid">
              {related.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* Sticky buy bar on phones */}
      <div className="mobile-buy">
        <div>
          {course.price === 0 ? <b>Free</b> : <><b>{inr(course.price)}</b><s>{inr(course.mrp)}</s></>}
        </div>
        <a href={buyUrl(course)} target="_blank" rel="noopener" className="btn btn-primary">
          {course.price === 0 ? "Enroll Free" : "Buy Now"}
        </a>
      </div>
    </div>
  );
}

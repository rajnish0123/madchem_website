import { useEffect, useState } from "react";
import { COURSES, FILTERS } from "../data/site";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";

export default function Courses({ query }) {
  const [filter, setFilter] = useState("all");
  // A new search looks across every course, not just the selected filter.
  useEffect(() => { if (query) setFilter("all"); }, [query]);
  const q = query.trim().toLowerCase();
  const list = COURSES.filter(
    (c) =>
      (filter === "all" || c.tag === filter) &&
      (!q || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
  );

  return (
    <section className="section alt" id="courses">
      <div className="container">
        <Reveal className="sec-head">
          <div><span className="eyebrow">Featured</span><h2>Top batches right now</h2></div>
        </Reveal>
        <div className="filters">
          {FILTERS.map((f) => (
            <button key={f.id} className={`chip${filter === f.id ? " active" : ""}`} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {list.map((c, i) => <CourseCard key={c.id + filter} course={c} index={i} />)}
        </div>
        {list.length === 0 && <p className="empty">No courses match your search.</p>}
      </div>
    </section>
  );
}

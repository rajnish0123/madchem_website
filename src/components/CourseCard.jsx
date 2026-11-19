import { useState } from "react";
import { Link } from "react-router-dom";
import { coursePath } from "../data/site";

export const inr = (n) => "₹" + n.toLocaleString("en-IN");
export const discount = (c) => (c.price === 0 ? 0 : Math.round((1 - c.price / c.mrp) * 100));

/** Course image with a branded fallback if the image fails to load. */
export function CourseThumb({ course, className = "thumb", children }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className={`${className}${broken ? " noimg" : ""}`}>
      {!broken && <img src={course.img} alt={course.title} loading="lazy" onError={() => setBroken(true)} />}
      {children}
    </div>
  );
}

export default function CourseCard({ course, index = 0 }) {
  const free = course.price === 0;
  const off = discount(course);
  const to = coursePath(course);

  return (
    <article className="card" style={{ animationDelay: `${index * 40}ms` }}>
      <Link to={to} className="card-link" aria-label={course.title}>
        <CourseThumb course={course}>
          {free ? <span className="badge free">FREE</span> : course.isNew && <span className="badge">NEW</span>}
          {off > 0 && <span className="off">{off}% off</span>}
        </CourseThumb>
      </Link>
      <div className="card-body">
        <h3><Link to={to}>{course.title}</Link></h3>
        <p>{course.desc}</p>
        <div className="price">
          {free ? <b>Free</b> : <><b>{inr(course.price)}</b><s>{inr(course.mrp)}</s></>}
        </div>
        <Link to={to} className="btn btn-primary">{free ? "Enroll Free" : "View Details"}</Link>
      </div>
    </article>
  );
}

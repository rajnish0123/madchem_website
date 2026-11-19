import { useEffect, useState } from "react";
import Reveal from "./Reveal";

// Node shape (see src/data/courseContent.json):
//   n: title · k: "d" folder | "v" video | "f" file/PDF | "t" test
//   c: [videos, files, tests] (folders) · d: duration (videos)
//   ch: children · m: items not listed (-1 = unknown number)

const ICON = { d: "📁", v: "▶", f: "📄", t: "📝" };
const KIND = { d: "Folder", v: "Video", f: "PDF / Notes", t: "Test" };

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

function Counts({ c }) {
  if (!c) return null;
  const [v, f, t] = c;
  return (
    <span className="cc-counts">
      {v > 0 && <span>▶ {plural(v, "video")}</span>}
      {f > 0 && <span>📄 {plural(f, "file")}</span>}
      {t > 0 && <span>📝 {plural(t, "test")}</span>}
    </span>
  );
}

/** Sum the counts of a module list; loose files/videos/tests count as one each. */
function totals(nodes) {
  return nodes.reduce(
    (acc, n) => {
      if (n.k === "d") n.c?.forEach((x, i) => (acc[i] += x));
      else acc[{ v: 0, f: 1, t: 2 }[n.k]] += 1;
      return acc;
    },
    [0, 0, 0]
  );
}

function Row({ node, onOpen }) {
  const open = node.k === "d" && node.ch?.length > 0;
  const empty = node.k === "d" && !node.c && !node.ch;
  const Tag = open ? "button" : "div";
  return (
    <li>
      <Tag className={`cc-row k-${node.k}${open ? " openable" : ""}`} onClick={open ? onOpen : undefined}>
        <span className="cc-ico" aria-hidden="true">{ICON[node.k]}</span>
        <span className="cc-main">
          <span className="cc-title">{node.n}</span>
          <span className="cc-meta">
            {node.k === "d" ? (empty ? <span>Coming soon</span> : <Counts c={node.c} />) : <span>{KIND[node.k]}</span>}
            {node.d && <span>⏱ {node.d}</span>}
          </span>
        </span>
        {open ? <span className="cc-go" aria-hidden="true">›</span> : node.k !== "d" && <span className="cc-lock" title="Unlocks after enrolling">🔒</span>}
      </Tag>
    </li>
  );
}

export default function CourseContent({ courseId, buyHref }) {
  const [data, setData] = useState(null);
  const [path, setPath] = useState([]); // stack of folder nodes

  useEffect(() => {
    let alive = true;
    import("../data/courseContent.json").then((m) => alive && setData(m.default));
    return () => { alive = false; };
  }, []);
  useEffect(() => setPath([]), [courseId]);

  const modules = data?.[courseId];
  if (data && !modules?.length) return null;

  const current = path.length ? path[path.length - 1].ch : modules;
  const folder = path[path.length - 1];
  const [v, f, t] = modules ? totals(modules) : [0, 0, 0];

  return (
    <Reveal as="section" className="d-section cc" id="content">
      <div className="cc-head">
        <h2>Course content</h2>
        {modules && (
          <div className="cc-totals">
            {v > 0 && <span><b>{v}</b> videos</span>}
            {f > 0 && <span><b>{f}</b> files</span>}
            {t > 0 && <span><b>{t}</b> tests</span>}
          </div>
        )}
      </div>

      {!modules ? (
        <div className="cc-loading">Loading content…</div>
      ) : (
        <>
          <nav className="cc-crumbs" aria-label="Content folders">
            <button onClick={() => setPath([])} disabled={!path.length}>All modules</button>
            {path.map((p, i) => (
              <span key={i}>
                <span className="sep">›</span>
                <button onClick={() => setPath(path.slice(0, i + 1))} disabled={i === path.length - 1}>{p.n}</button>
              </span>
            ))}
          </nav>

          {folder && (
            <button className="cc-back" onClick={() => setPath(path.slice(0, -1))}>‹ Back</button>
          )}

          <ul className="cc-list" key={path.length + (folder?.n ?? "")}>
            {current.map((node, i) => (
              <Row key={i} node={node} onOpen={() => setPath([...path, node])} />
            ))}
            {folder?.m && (
              <li>
                <a className="cc-row cc-more" href={buyHref} target="_blank" rel="noopener">
                  <span className="cc-ico" aria-hidden="true">🔒</span>
                  <span className="cc-main">
                    <span className="cc-title">
                      {folder.m > 0 ? `+ ${plural(folder.m, "more item")}` : "See the full folder"}
                    </span>
                    <span className="cc-meta"><span>Enroll to unlock everything inside</span></span>
                  </span>
                </a>
              </li>
            )}
          </ul>
          <p className="cc-note">🔒 Lessons, notes and tests unlock after you enroll.</p>
        </>
      )}
    </Reveal>
  );
}

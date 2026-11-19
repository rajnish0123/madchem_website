import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGO } from "../data/site";
import { useActiveSection } from "../hooks";
import { ChevronIcon, MenuIcon, MoonIcon, SearchIcon, SunIcon } from "./Icons";

const SECTIONS = ["home", "browse", "courses", "about"];
const LINKS = [
  { hash: "#home", label: "Home" },
  { hash: "#courses", label: "All Courses" },
  { hash: "#browse", label: "Live Course" },
  { hash: "#browse", label: "Video Course" },
];
const MORE = ["Study Material", "Test Series", "Offline Books", "Ebooks", "Free Courses"];

/** Link to a section of the home page that works from any route. */
export const homeLink = (hash) => ({ pathname: "/", hash });

export function Brand() {
  return (
    <Link to={homeLink("#home")} className="brand">
      <img src={LOGO} alt="Madchem logo" />
      <span>Mad<b>chem</b></span>
    </Link>
  );
}

export default function Navbar({ theme, onToggleTheme, query, onQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";
  const section = useActiveSection(SECTIONS);
  const active = onHome ? section : "courses";

  const close = () => { setMenuOpen(false); setMoreOpen(false); };

  const handleSearch = (e) => {
    onQuery(e.target.value);
    if (!e.target.value) return;
    if (onHome) document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    else navigate(homeLink("#courses"));
  };

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Brand />
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={homeLink(l.hash)}
                onClick={close}
                className={l.hash === `#${active}` && l.label !== "Video Course" ? "active" : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className={`dropdown${moreOpen ? " open" : ""}`}>
            <button className="dd-toggle" onClick={() => setMoreOpen((o) => !o)}>
              More <ChevronIcon />
            </button>
            <div className="dd-menu">
              {MORE.map((m) => <Link key={m} to={homeLink("#browse")} onClick={close}>{m}</Link>)}
              <Link to={homeLink("#about")} onClick={close}>About Us</Link>
            </div>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen((o) => !o)}>
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#" className="btn btn-ghost hide-sm">Sign in</a>
          <a href="#" className="btn btn-primary hide-sm">Sign up</a>
          <button className="icon-btn burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      {searchOpen && (
        <div className="search-bar open">
          <input
            type="search"
            autoFocus
            value={query}
            onChange={handleSearch}
            placeholder="Search courses — e.g. CSIR NET, KVS, GATE…"
          />
        </div>
      )}
    </header>
  );
}

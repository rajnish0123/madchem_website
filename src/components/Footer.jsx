import { CONTACT, WHATSAPP } from "../data/site";
import { WhatsAppIcon } from "./Icons";
import { Link } from "react-router-dom";
import { Brand, homeLink } from "./Navbar";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container foot-grid">
          <div>
            <Brand />
            <p className="muted">Making Chemistry an adventure you'll enjoy and excel in.</p>
            <div className="social">
              <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${CONTACT.phone}`}>📞 {CONTACT.phone}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener">💬 {CONTACT.whatsapp}</a>
            <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refunds &amp; Cancellation Policy</a>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to={homeLink("#courses")}>All Courses</Link>
            <Link to={homeLink("#browse")}>Test Series</Link>
            <Link to={homeLink("#about")}>About Us</Link>
          </div>
        </div>
        <div className="container copy">© {new Date().getFullYear()} Madchem Classes Pvt. Ltd. All rights reserved.</div>
      </footer>

      <a className="wa-fab" href={WHATSAPP} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <WhatsAppIcon size={28} color="#fff" />
      </a>
    </>
  );
}

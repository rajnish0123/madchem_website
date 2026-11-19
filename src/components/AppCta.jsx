import { PLAY_STORE, WINDOWS_APP } from "../data/site";
import { PlayStoreIcon, WindowsIcon } from "./Icons";
import Reveal from "./Reveal";

export default function AppCta() {
  return (
    <section className="container">
      <Reveal className="app-cta">
        <div>
          <h2>Learn on the go 📲</h2>
          <p>Download the Madchem Classes app for live classes, recorded lectures and test series.</p>
        </div>
        <div className="stores">
          <a href={PLAY_STORE} target="_blank" rel="noopener" className="store">
            <PlayStoreIcon />
            <span><small>GET IT ON</small>Google Play</span>
          </a>
          <a href={WINDOWS_APP} className="store">
            <WindowsIcon />
            <span><small>Download for</small>Windows</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

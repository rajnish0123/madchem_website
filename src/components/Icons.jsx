export const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);

export const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
);

export const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);

export const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" /></svg>
);

export const WhatsAppIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.1z" /></svg>
);

export const PlayStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#34A853" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2z" /><path fill="#FBBC04" d="m17.1 15.3-3.3-3.3 3.3-3.3 3.8 2.2c1 .6 1 1.6 0 2.2z" /><path fill="#4285F4" d="M13.8 12 3.6 22.2c.4.2.9.2 1.4-.1l12.1-6.8z" /><path fill="#EA4335" d="M13.8 12 17.1 8.7 5 1.9c-.5-.3-1-.3-1.4-.1z" /></svg>
);

export const WindowsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M3 5.5 10 4.5v7H3zM11 4.3 21 3v8.5H11zM3 12.5h7v7l-7-1zM11 12.5h10V21l-10-1.3z" /></svg>
);

export const Molecule = (props) => (
  <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
    <g stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M100 30 L160 65 L160 135 L100 170 L40 135 L40 65 Z" />
      <path d="M100 52 L141 76 M141 124 L100 148 M59 124 L59 76" />
      <path d="M100 30 L100 5 M160 65 L185 50 M40 135 L15 150" />
    </g>
    <g fill="currentColor">
      {[[100, 30], [160, 65], [160, 135], [100, 170], [40, 135], [40, 65]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" />
      ))}
    </g>
  </svg>
);

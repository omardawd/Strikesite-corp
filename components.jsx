/* Shared components: Header, Footer, common building blocks */

const { useState, useEffect, useRef } = React;

function Logo() {
  return (
    <a href="#/" className="brand" onClick={(e) => navTo(e, '/')}>
      <img src="assets/strike-logo.png" alt="Strike SCF" />
    </a>
  );
}

function navTo(e, path) {
  if (e) e.preventDefault();
  window.location.hash = '#' + path;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function Nav({ route }) {
  const links = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/banks', label: 'For Banks' },
    { path: '/anchors', label: 'For Anchors' },
    { path: '/suppliers', label: 'For Suppliers' },
    { path: '/platform', label: 'Platform' },
    { path: '/contact', label: 'Contact' },
  ];
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className="nav-links">
          {links.map(l => (
            <a key={l.path} href={'#' + l.path}
               className={route === l.path ? 'active' : ''}
               onClick={(e) => navTo(e, l.path)}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="btn btn-ghost btn-sm" style={{ borderColor: 'var(--border-strong)' }}>Log In</button>
          <a href="#/contact" className="btn btn-sm btn-blue btn-arrow"
             onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo />
            <p className="body body-gray" style={{ marginTop: 22, maxWidth: '34ch', fontSize: 14 }}>
              Institutional supply chain finance infrastructure for banks, anchors and the suppliers they fund.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <ul>
              <li><a href="#/solutions" onClick={(e) => navTo(e, '/solutions')}>SCF Engine</a></li>
              <li><a href="#/solutions" onClick={(e) => navTo(e, '/solutions')}>Strike AI</a></li>
              <li><a href="#/platform" onClick={(e) => navTo(e, '/platform')}>Architecture</a></li>
              <li><a href="#/platform" onClick={(e) => navTo(e, '/platform')}>API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#/banks" onClick={(e) => navTo(e, '/banks')}>For Banks</a></li>
              <li><a href="#/anchors" onClick={(e) => navTo(e, '/anchors')}>For Anchors</a></li>
              <li><a href="#/solutions" onClick={(e) => navTo(e, '/solutions')}>Payables Finance</a></li>
              <li><a href="#/solutions" onClick={(e) => navTo(e, '/solutions')}>Receivables Finance</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>About</a></li>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Security</a></li>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Press</a></li>
              <li><a href="#/contact" onClick={(e) => navTo(e, '/contact')}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Terms</a></li>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Privacy</a></li>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Disclosures</a></li>
              <li><a href="#/" onClick={(e) => navTo(e, '/')}>Data Processing</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Strike SCF Inc.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section head ---------- */
function SectionHead({ eyebrow, title, kicker }) {
  return (
    <div className="section-head">
      <div className="side">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {kicker && <div className="mono" style={{ marginTop: 14, color: 'var(--gray)' }}>{kicker}</div>}
      </div>
      <h2 className="display-md">{title}</h2>
    </div>
  );
}

/* ---------- Stat ---------- */
function Stat({ value, label, desc, blue, mono }) {
  return (
    <div className="stat">
      <div className={'stat-num' + (blue ? ' blue' : '')}>{value}</div>
      <div className="stat-label">{label}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
}

/* ---------- Feature row list ---------- */
function FeatureList({ items }) {
  return (
    <div className="flist">
      {items.map((it, i) => (
        <div className="row" key={i}>
          <div className="num">{String(i + 1).padStart(2, '0')}</div>
          <div className="title">{it.title}</div>
          <div className="desc">{it.desc}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Logo, Nav, Footer, SectionHead, Stat, FeatureList, navTo
});

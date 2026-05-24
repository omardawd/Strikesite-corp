/* Shared components: Header, Footer, common building blocks */

const { useState, useEffect, useRef } = React;

function Logo() {
  return (
    <a href="/" className="brand" onClick={(e) => navTo(e, '/')}>
      <img src="assets/strike-logo.png" alt="Strike SCF" />
    </a>
  );
}

function navTo(e, path) {
  if (e) e.preventDefault();
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function Nav({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/banks', label: 'Banks' },
    { path: '/anchors', label: 'Anchors' },
    { path: '/suppliers', label: 'Suppliers' },
    { path: '/platform', label: 'Platform' },
    { path: '/contact', label: 'Contact' },
  ];
  return (
    <React.Fragment>
      <header className="site-header">
        <div className="container nav">
          <Logo />
          <nav className="nav-links">
            {links.map(l => (
              <a key={l.path} href={l.path}
                 className={route === l.path ? 'active' : ''}
                 onClick={(e) => navTo(e, l.path)}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <button className="btn btn-ghost btn-sm" style={{ borderColor: 'var(--border-strong)' }}>Log In</button>
            <a href="/contact" className="btn btn-sm btn-blue btn-arrow"
               onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
          </div>
          <button className={`nav-burger${menuOpen ? ' open' : ''}`}
                  onClick={() => setMenuOpen(o => !o)}
                  aria-label="Toggle menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="nav-drawer">
          {links.map(l => (
            <a key={l.path} href={l.path}
               className="drawer-link"
               onClick={(e) => { setMenuOpen(false); navTo(e, l.path); }}>{l.label}</a>
          ))}
          <div className="nav-drawer-ctas">
            <button className="btn btn-ghost" style={{ borderColor: 'var(--border-strong)' }}>Log In</button>
            <a href="/contact" className="btn btn-blue btn-arrow"
               onClick={(e) => { setMenuOpen(false); navTo(e, '/contact'); }}>Talk to Sales</a>
          </div>
        </div>
      )}
    </React.Fragment>
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
              <li><a href="/solutions" onClick={(e) => navTo(e, '/solutions')}>SCF Engine</a></li>
              <li><a href="/solutions" onClick={(e) => navTo(e, '/solutions')}>Strike AI</a></li>
              <li><a href="/platform" onClick={(e) => navTo(e, '/platform')}>Architecture</a></li>
              <li><a href="/platform" onClick={(e) => navTo(e, '/platform')}>API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="/banks" onClick={(e) => navTo(e, '/banks')}>For Banks</a></li>
              <li><a href="/anchors" onClick={(e) => navTo(e, '/anchors')}>For Anchors</a></li>
              <li><a href="/solutions" onClick={(e) => navTo(e, '/solutions')}>Payables Finance</a></li>
              <li><a href="/solutions" onClick={(e) => navTo(e, '/solutions')}>Receivables Finance</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>About</a></li>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Security</a></li>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Press</a></li>
              <li><a href="/contact" onClick={(e) => navTo(e, '/contact')}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Terms</a></li>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Privacy</a></li>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Disclosures</a></li>
              <li><a href="/" onClick={(e) => navTo(e, '/')}>Data Processing</a></li>
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

/* ---------- Typewriter Hero ---------- */
const TW_WORDS = [
  {
    word: 'tariff pressure',
    card: { signal: 'Vietnam Sourcing Exposure', supplier: 'Pacific Oxide Group', detail: '3 of 7 active suppliers flagged', action: 'REVIEW RECOMMENDED', confidence: 94 },
  },
  {
    word: 'supplier stress',
    card: { signal: 'Fragile Supplier Detected', supplier: 'Kestra Industrials Ltd', detail: 'Payment delays up 40% over 60 days', action: 'EARLY PAYMENT ADVISED', confidence: 87 },
  },
  {
    word: 'payment gaps',
    card: { signal: 'Liquidity Gap Identified', supplier: 'Meridian Optics SA', detail: '$1.2M in eligible invoices unfunded', action: 'PROGRAM ENROLLMENT OPEN', confidence: 91 },
  },
];

function TypewriterHero({ children }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const target = TW_WORDS[wordIdx].word;
    let t;
    if (!deleting && charIdx < target.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 85);
    } else if (!deleting && charIdx === target.length) {
      // showCard is not a dep, so this setState won't re-trigger the effect
      setShowCard(true);
      t = setTimeout(() => {
        setShowCard(false);
        setDeleting(true);
      }, 2600);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 50);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % TW_WORDS.length);
    }
    return () => clearTimeout(t);
  }, [wordIdx, charIdx, deleting]);

  const current = TW_WORDS[wordIdx];
  const c = current.card;

  return (
    <div className="typewriter-hero">
      <div className="typewriter-left">
        <h1 className="display-xl hero-headline" style={{ maxWidth: '26ch' }}>
          AI that acts when supply chains face
          <span className="tw-word-line">
            <span className="typewriter-word">{current.word.slice(0, charIdx)}</span>
            <span className="typewriter-cursor" />
          </span>
        </h1>
        {children}
      </div>
      <div className="tw-right-col">
        <div className={`typewriter-card${showCard ? ' visible' : ''}`}>
          <div className="tc-topbar">
            <div className="tc-topbar-left">
              <span className="tc-live-dot" />
              <span className="tc-brand">STRIKE AI</span>
            </div>
            <span className="tc-live">LIVE</span>
          </div>
          <div className="tc-body">
            <div className="tc-row"><span className="tc-k">SIGNAL</span><span className="tc-v">{c.signal}</span></div>
            <div className="tc-row"><span className="tc-k">SUPPLIER</span><span className="tc-v">{c.supplier}</span></div>
            <div className="tc-row"><span className="tc-k">DETAIL</span><span className="tc-v">{c.detail}</span></div>
            <div className="tc-row"><span className="tc-k">ACTION</span><span className="tc-v tc-v-blue">{c.action}</span></div>
          </div>
          <div className="tc-footer">
            <span className="tc-conf-label">CONFIDENCE</span>
            <div className="tc-bar-track">
              <div className="tc-bar-fill" style={{ width: c.confidence + '%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Logo, Nav, Footer, SectionHead, Stat, FeatureList, TypewriterHero, navTo
});

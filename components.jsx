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

  const programLinks = [
    { path: '/programs/po-financing',      label: 'PO Financing',          desc: 'Fund suppliers before goods ship' },
    { path: '/programs/invoice-factoring', label: 'Invoice Factoring',     desc: 'Unlock cash from approved invoices' },
    { path: '/programs/reverse-factoring', label: 'Reverse Factoring',     desc: 'Buyer-led early payment programs' },
    { path: '/programs/dynamic-discounting', label: 'Dynamic Discounting', desc: 'Deploy your own cash for yield' },
  ];
  const audienceLinks = [
    { path: '/banks',     label: 'Banks',     desc: 'Fund programs at scale' },
    { path: '/anchors',   label: 'Anchors',   desc: 'Optimise payables and supplier health' },
    { path: '/suppliers', label: 'Suppliers', desc: 'Access early payment on your terms' },
  ];
  const platformLinks = [
    { path: '/platform', label: 'Architecture',  desc: 'How Strike is built' },
    { path: '/platform', label: 'Strike AI',     desc: 'Intelligence and risk scoring' },
    { path: '/platform', label: 'API Reference', desc: 'Integrate with your stack' },
  ];

  const isProgramsActive = programLinks.some(l => route === l.path);
  const isAudienceActive = audienceLinks.some(l => route === l.path);

  return (
    <React.Fragment>
      <header className="site-header">
        <div className="container nav">
          <Logo />
          <nav className="nav-links">
            <button
              type="button"
              className={`nav-label${isProgramsActive ? ' active' : ''}`}
              onClick={() => navTo(null, '/solutions')}
              aria-haspopup="true"
              tabIndex={0}
            >Programs</button>
            <button
              type="button"
              className={`nav-label${isAudienceActive ? ' active' : ''}`}
              onClick={() => navTo(null, '/banks')}
              aria-haspopup="true"
              tabIndex={0}
            >Who It's For</button>
            <div className={`nav-item${route === '/platform' ? ' active' : ''}`}>
              <a href="/platform" onClick={(e) => navTo(e, '/platform')}>Platform</a>
            </div>
            <div className={`nav-item${route === '/redbook' ? ' active' : ''}`}>
              <a href="/redbook" onClick={(e) => navTo(e, '/redbook')}>RedBook</a>
            </div>
            <div className={`nav-item${route === '/contact' ? ' active' : ''}`}>
              <a href="/contact" onClick={(e) => navTo(e, '/contact')}>Contact</a>
            </div>
          </nav>
          <div className="nav-right">
            <a
              href="https://app.strikescf.com"
              className="btn btn-ghost btn-sm"
              style={{ borderColor: 'var(--border-strong)' }}
              target="_self"
              rel="noopener noreferrer"
            >Log In</a>
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

        {/* Mega panel — CSS-driven, hidden by default, expands on header hover */}
        <div className="mega-panel">
          <div className="container">
            <div className="mega-grid">
              <div className="mega-col">
                <div className="mega-col-head">Programs</div>
                {programLinks.map(l => (
                  <a key={l.path + l.label} href={l.path}
                     className={`mega-link${route === l.path ? ' active' : ''}`}
                     onClick={(e) => navTo(e, l.path)}>
                    <span className="mega-link-title">{l.label}</span>
                    <span className="mega-link-desc">{l.desc}</span>
                  </a>
                ))}
              </div>
              <div className="mega-col">
                <div className="mega-col-head">Who It's For</div>
                {audienceLinks.map(l => (
                  <a key={l.path} href={l.path}
                     className={`mega-link${route === l.path ? ' active' : ''}`}
                     onClick={(e) => navTo(e, l.path)}>
                    <span className="mega-link-title">{l.label}</span>
                    <span className="mega-link-desc">{l.desc}</span>
                  </a>
                ))}
              </div>
              <div className="mega-col">
                <div className="mega-col-head">Platform</div>
                {platformLinks.map((l, i) => (
                  <a key={i} href={l.path}
                     className={`mega-link${route === l.path && i === 0 ? ' active' : ''}`}
                     onClick={(e) => navTo(e, l.path)}>
                    <span className="mega-link-title">{l.label}</span>
                    <span className="mega-link-desc">{l.desc}</span>
                  </a>
                ))}
              </div>
              <div className="mega-col">
                <div className="mega-col-head">RedBook</div>
                <a href="/redbook"
                   className={`mega-link${route === '/redbook' ? ' active' : ''}`}
                   onClick={(e) => navTo(e, '/redbook')}>
                  <span className="mega-link-title">Read the RedBook</span>
                  <span className="mega-link-desc">The SCF operating standard</span>
                </a>
                <a href="/contact"
                   className="mega-link"
                   onClick={(e) => navTo(e, '/contact')}>
                  <span className="mega-link-title">Request Access</span>
                  <span className="mega-link-desc">Talk to the Strike team</span>
                </a>
              </div>
            </div>
            <div className="mega-footer">
              <span className="eyebrow">Strike SCF · Institutional Supply Chain Finance</span>
              <a href="/contact" className="btn btn-sm btn-blue btn-arrow"
                 onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="nav-drawer">
          <div className="drawer-section-header">Programs</div>
          {programLinks.map(l => (
            <a key={l.path} href={l.path} className="drawer-link drawer-link-indent"
               onClick={(e) => { setMenuOpen(false); navTo(e, l.path); }}>{l.label}</a>
          ))}
          <div className="drawer-section-header">Who It's For</div>
          {audienceLinks.map(l => (
            <a key={l.path} href={l.path} className="drawer-link drawer-link-indent"
               onClick={(e) => { setMenuOpen(false); navTo(e, l.path); }}>{l.label}</a>
          ))}
          {[
            { path: '/platform', label: 'Platform' },
            { path: '/redbook',  label: 'RedBook' },
            { path: '/contact',  label: 'Contact' },
          ].map(l => (
            <a key={l.path} href={l.path} className="drawer-link"
               onClick={(e) => { setMenuOpen(false); navTo(e, l.path); }}>{l.label}</a>
          ))}
          <div className="nav-drawer-ctas">
            <a
              href="https://app.strikescf.com"
              className="btn btn-ghost"
              style={{ borderColor: 'var(--border-strong)' }}
              target="_self"
              rel="noopener noreferrer"
            >Log In</a>
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
              Decisioning and liquidity orchestration for resilient supply chains. Connecting supplier risk, operational signals, and financing options on one intelligent platform.
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
              <li><a href="/platform#security" onClick={(e) => navTo(e, '/platform')}>Security</a></li>
              <li><a href="/contact?inquiry=press" onClick={(e) => navTo(e, '/contact')}>Press</a></li>
              <li><a href="/contact?inquiry=careers" onClick={(e) => navTo(e, '/contact')}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="mailto:legal@strikescf.com">Terms</a></li>
              <li><a href="mailto:legal@strikescf.com">Privacy</a></li>
              <li><a href="mailto:legal@strikescf.com">Disclosures</a></li>
              <li><a href="mailto:legal@strikescf.com">Data Processing</a></li>
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
function SectionHead({ title }) {
  return (
    <div className="section-head">
      <div className="side"></div>
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

/* ---------- Scroll fade-in ---------- */
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(22px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
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
  Logo, Nav, Footer, SectionHead, Stat, FeatureList, FadeIn, TypewriterHero, navTo
});

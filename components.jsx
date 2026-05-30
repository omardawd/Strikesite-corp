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
              onClick={() => navTo(null, '/programs/po-financing')}
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
            
            <div className={`nav-item${route === '/redbook' ? ' active' : ''}`}>
              <a href="/redbook" onClick={(e) => navTo(e, '/redbook')}>RedBook</a>
            </div>
            {/* <div className={`nav-item${route === '/about' ? ' active' : ''}`}>
              <a href="/about" onClick={(e) => navTo(e, '/about')}>About</a>
            </div> */}
            <div className={`nav-item${route === '/contact' ? ' active' : ''}`}>
              <a href="/contact" onClick={(e) => navTo(e, '/contact')}>Contact</a>
            </div>
          </nav>
          <div className="nav-right">
            <a
              href="https://app.strikescf.com"
              className="btn btn-sm"
              style={{ background: '#111318', color: '#ffffff', border: 'none' }}
              target="_self"
              rel="noopener noreferrer"
            >Log In</a>
            <a href="/contact" className="btn btn-sm btn-blue btn-arrow"
               onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
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
            { path: '/about',    label: 'About' },
            { path: '/redbook',  label: 'RedBook' },
            { path: '/contact',  label: 'Contact' },
          ].map(l => (
            <a key={l.path} href={l.path} className="drawer-link"
               onClick={(e) => { setMenuOpen(false); navTo(e, l.path); }}>{l.label}</a>
          ))}
          <div className="nav-drawer-ctas">
            <a
              href="https://app.strikescf.com"
              className="btn"
              style={{ background: '#111318', color: '#ffffff', border: 'none' }}
              target="_self"
              rel="noopener noreferrer"
            >Log In</a>
            <a href="/contact" className="btn btn-blue btn-arrow"
               onClick={(e) => { setMenuOpen(false); navTo(e, '/contact'); }}>Contact Sales</a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Footer() {
  const footerLinks = [
    {
      heading: 'Platform',
      links: [
        { label: 'Reverse Factoring', route: '/programs/reverse-factoring' },
        { label: 'Invoice Factoring', route: '/programs/invoice-factoring' },
        { label: 'PO Financing', route: '/programs/po-financing' },
        { label: 'Dynamic Discounting', route: '/programs/dynamic-discounting' },
      ],
    },
    {
      heading: 'Who We Serve',
      links: [
        { label: 'Banks', route: '/banks' },
        { label: 'Anchor Corporates', route: '/anchors' },
        { label: 'Suppliers', route: '/suppliers' },
      ],
    },
    {
      heading: 'Company',
      links: [
        // { label: 'About', route: '/about' },
        { label: 'The RedBook', route: '/redbook' },
        { label: 'Contact', route: '/contact' },
      ],
    },
    {
      heading: 'Get Started',
      links: [
        { label: 'Request a Pilot', route: '/contact' },
        { label: 'Contact Sales', route: '/contact' },
        { label: 'Log In', href: 'https://app.strikescf.com', external: true },
      ],
    },
  ];

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
          {footerLinks.map(col => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.external
                      ? <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                      : <a href={link.route} onClick={(e) => navTo(e, link.route)}>{link.label}</a>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Strike SCF, Inc.</span>
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
    word1: 'invoice', word2: 'financing',
    card: { signal: 'Invoice Approved', supplier: 'Westcoast Fabricators Ltd', detail: '$248,500 · 90% advance rate · 60-day tenor', action: 'DISBURSEMENT INITIATED', confidence: 97 },
  },
  {
    word1: 'supplier', word2: 'risk',
    card: { signal: 'Risk Signal Detected', supplier: 'Kestra Industrials Ltd', detail: 'Vietnam sourcing: 31% exposure · Tariff flag', action: 'REVIEW RECOMMENDED', confidence: 89 },
  },
  {
    word1: 'early', word2: 'payment',
    card: { signal: 'Early Payment Requested', supplier: 'Meridian Components SA', detail: '$1.2M eligible · 22 days early · 3.8% APR', action: 'PROGRAM MATCH FOUND', confidence: 94 },
  },
  {
    word1: 'liquidity', word2: 'decisions',
    card: { signal: 'Liquidity Gap Identified', supplier: 'Apex Supply Group', detail: '$3.4M in eligible invoices pending', action: 'BANK OFFER AVAILABLE', confidence: 91 },
  },
];

function TypewriterHero({ children }) {
  const [wordIdx, setWordIdx] = useState(0);
  // 'entering' (below, hidden) -> 'active' (in place) -> 'exiting' (up, hidden)
  const [phase, setPhase] = useState('entering');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));

    async function cycle() {
      while (mountedRef.current) {
        setPhase('entering');        // jump below, hidden
        await wait(30);
        if (!mountedRef.current) return;
        setPhase('active');          // slide up into place (280ms ease-out)
        await wait(2900);            // transition + dwell
        if (!mountedRef.current) return;
        setPhase('exiting');         // slide up and out (280ms ease-in)
        await wait(280);
        if (!mountedRef.current) return;
        setWordIdx(i => (i + 1) % TW_WORDS.length);
      }
    }
    cycle();

    return () => {
      mountedRef.current = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  const current = TW_WORDS[wordIdx];

  const wordStyle = {
    entering: { transform: 'translateY(100%)', opacity: 0, transition: 'none' },
    active:   { transform: 'translateY(0)',    opacity: 1, transition: 'transform 280ms ease-out, opacity 280ms ease-out' },
    exiting:  { transform: 'translateY(-100%)', opacity: 0, transition: 'transform 280ms ease-in, opacity 280ms ease-in' },
  }[phase];

  return (
    <div className="typewriter-hero">
      <div className="typewriter-left">
        <h1 className="display-xl hero-headline" style={{ maxWidth: '24ch', fontSize: 'clamp(42px, 5.7vw, 86px)' }}>
          AI that acts when supply chains face{' '}
          <span className="typewriter-word" style={{ display: 'inline-block', ...wordStyle }}>{current.word1}</span>
          <span className="tw-word-line" style={{ overflow: 'hidden' }}>
            <span className="typewriter-word" style={{ display: 'block', ...wordStyle }}>{current.word2}</span>
          </span>
        </h1>
        {children}
      </div>
      <div className="tw-right-col">
        <HeroUIMockup />
      </div>
    </div>
  );
}

function HeroUIMockup() {
  const [status, setStatus] = React.useState('pending'); // 'pending' | 'approved'
  const [cursorX, setCursorX] = React.useState(82);
  const [cursorY, setCursorY] = React.useState(72);
  const [typing, setTyping] = React.useState('');
  const [msgs, setMsgs] = React.useState([
    { role: 'ai', text: 'INV-2024-0892 ready for review. Westcoast has a strong track record on this program.' }
  ]);
  const [showTyping, setShowTyping] = React.useState(false);
  const [cursorDown, setCursorDown] = React.useState(false); // click press on cursor
  const [inputActive, setInputActive] = React.useState(false); // text box focused
  const [approvePress, setApprovePress] = React.useState(false); // approve button pressed
  const mountedRef = React.useRef(true);
  const rootRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const approveRef = React.useRef(null);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  function safe(fn) { if (mountedRef.current) fn(); }

  async function waitMs(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function moveTo(x, y, ms) {
    safe(() => { setCursorX(x); setCursorY(y); });
    await waitMs(ms);
  }

  // Move the cursor to the visual center of a real element (measured from the root).
  async function moveToEl(ref, ms) {
    const el = ref.current;
    if (el) {
      const x = el.offsetLeft + el.offsetWidth / 2;
      const y = el.offsetTop + el.offsetHeight / 2;
      safe(() => { setCursorX(Math.round(x)); setCursorY(Math.round(y)); });
    }
    await waitMs(ms);
  }

  // Visual click: press the cursor down, optionally toggle a target's pressed state.
  async function click(onDown) {
    safe(() => setCursorDown(true));
    if (onDown) safe(onDown);
    await waitMs(150);
    safe(() => setCursorDown(false));
    await waitMs(90);
  }

  async function runSequence() {
    await waitMs(800);
    // Move to the AI text box and click into it
    await moveToEl(inputRef, 420);
    await waitMs(160);
    await click(() => setInputActive(true));

    // Type question
    const question = 'Is it safe to approve?';
    for (let i = 0; i <= question.length; i++) {
      safe(() => setTyping(question.slice(0, i)));
      await waitMs(34);
    }
    await waitMs(260);
    safe(() => {
      setMsgs(m => [...m, { role: 'user', text: question }]);
      setTyping('');
      setInputActive(false);
      setShowTyping(true);
    });
    await waitMs(1100);
    safe(() => {
      setShowTyping(false);
      setMsgs(m => [...m, { role: 'ai', text: 'Yes — risk 82/100, clean history, 0 disputes. Vietnam flag low severity. Safe to approve.' }]);
    });
    await waitMs(900);

    // Move to the Approve button and press it
    await moveToEl(approveRef, 420);
    await waitMs(220);
    await click(() => setApprovePress(true));
    safe(() => { setStatus('approved'); setApprovePress(false); });
    await waitMs(2400);

    // Reset
    safe(() => {
      setStatus('pending');
      setMsgs([{ role: 'ai', text: 'INV-2024-0892 ready for review. Westcoast has a strong track record on this program.' }]);
      setTyping('');
      setShowTyping(false);
      setInputActive(false);
      setApprovePress(false);
      setCursorX(82); setCursorY(72);
    });
    await waitMs(550);
    if (mountedRef.current) runSequence();
  }

  React.useEffect(() => {
    runSequence();
  }, []);

  const AI_ICON = (
    <svg width="12" height="12" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="var(--blue)" />
      <path d="M10 13.5C10 11 12 9 14.5 9h7C24 9 26 11 26 13.5V14c0 1.4-.7 2.6-1.8 3.3C25.3 18 26 19.2 26 20.6V21.5C26 24 24 26 21.5 26h-7C12 26 10 24 10 21.5V21c0-1.4.7-2.6 1.8-3.3C10.7 17 10 15.8 10 14.4V13.5Z" fill="white" />
    </svg>
  );

  return (
    <div ref={rootRef} style={{
      width: 460, height: 460, border: '1px solid var(--border-strong)',
      background: '#fff', overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 48px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)',
      borderRadius: 10, fontFamily: 'var(--font-body)',
      transform: 'scale(1.2)', transformOrigin: 'center',
    }}>

      {/* Sidebar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 44,
        background: '#2C3542', borderRight: '1px solid #3C4655',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '12px 0', gap: 4,
      }}>
        <img src="/assets/S-profile-logo-mark.png" alt="Strike SCF" style={{ width: 22, height: 22, marginBottom: 12, objectFit: 'contain' }} />
        {[
          { active: true, paths: ['M1 1h5v5H1zM8 1h5v5H8zM1 8h5v5H1zM8 8h5v5H8z'] },
          { active: false, paths: ['M1 3h12M1 7h12M1 11h12'] },
          { active: false, paths: ['M1 2h12v9H1zM4 12h6'] },
          { active: false, paths: ['M7 1C4 1 2 3 2 5s2 3 3 4-1 2-1 4', 'M7 1C10 1 12 3 12 5s-2 3-3 4 1 2 1 4'] },
        ].map((item, i) => (
          <div key={i} style={{
            width: 34, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 5, background: item.active ? 'rgba(91,140,255,0.22)' : 'transparent',
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              {item.paths.map((d, j) => <path key={j} d={d} stroke={item.active ? '#7AA2FF' : '#C2C8D2'} strokeWidth="1.2" strokeLinecap="square" />)}
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ marginLeft: 44, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Topbar */}
        <div style={{
          height: 38, background: '#fff', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', padding: '0 11px', gap: 5, flexShrink: 0,
        }}>
          <img src="/assets/S-profile-logo.png" alt="" style={{ width: 13, height: 13, objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#374151', fontWeight: 500, letterSpacing: '0.04em', marginRight: 8 }}>strike scf</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: '#9AA0AB' }}>Transactions</span>
          <span style={{ color: '#D1D5DB', fontSize: 9 }}>&nbsp;/&nbsp;</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: '#111318', fontWeight: 500 }}>INV-2024-0892</span>
          <div style={{ flex: 1 }} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4, padding: '3px 7px',
            border: '1px solid rgba(20,40,204,0.28)', background: 'rgba(20,40,204,0.05)',
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', animation: 'badge-pulse 2.2s ease infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>AI Active</span>
          </div>
        </div>

        {/* Body split */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

          {/* Left: invoice */}
          <div style={{ flex: 1, padding: '9px', display: 'flex', flexDirection: 'column', gap: 7, background: '#F7F8FA', overflow: 'hidden' }}>

            {/* Invoice card */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', flexShrink: 0 }}>
              <div style={{ padding: '7px 10px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: '#6B7280', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Invoice · INV-2024-0892</span>
                <span style={{
                  padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
                  background: status === 'approved' ? 'rgba(5,150,105,0.1)' : 'rgba(217,119,6,0.1)',
                  color: status === 'approved' ? '#059669' : '#B45309',
                  transition: 'all 0.3s ease',
                }}>
                  {status === 'approved' ? 'Approved' : 'Pending Your Approval'}
                </span>
              </div>
              <div style={{ padding: '8px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 10px' }}>
                {[
                  { l: 'Supplier', v: 'Westcoast Fabricators', c: null },
                  { l: 'Program', v: 'Atlas RF · Q2', c: null },
                  { l: 'Invoice Amount', v: '$248,500', c: 'var(--blue)' },
                  { l: 'Early Payment', v: '$223,650', c: null },
                  { l: 'Due Date', v: 'Jun 28, 2026', c: null },
                  { l: 'Days Early', v: '22 days', c: '#059669' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7.5, color: '#9AA0AB', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.l}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: f.c || '#111318', fontWeight: 500 }}>{f.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight card */}
            <div style={{ border: '1px solid rgba(20,40,204,0.18)', background: 'rgba(20,40,204,0.025)', flexShrink: 0 }}>
              <div style={{ padding: '6px 9px', borderBottom: '1px solid rgba(20,40,204,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><rect x="0.5" y="0.5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="0.9"/><path d="M3 5h4M3 3h2M3 7h3" stroke="currentColor" strokeWidth="0.9" strokeLinecap="square"/></svg>
                  Strike SCF AI · Assessment
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7.5, color: '#9AA0AB' }}>Confidence <span style={{ color: '#059669', fontWeight: 500 }}>97%</span></span>
              </div>
              <div style={{ padding: '7px 9px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { dot: '#059669', text: 'Approve. 18-month record clean — 94% on-time, 0 disputes across 34 transactions.' },
                  { dot: '#059669', text: 'Rate of 90% within policy. Net fee $1,340 accrues to Atlas Bank on settlement.' },
                  { dot: '#D97706', text: 'Monitor: Vietnam 23% of sourcing. Tariff signal elevated — flag Q3 orders.' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: r.dot, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, color: '#374151', lineHeight: 1.45 }}>{r.text}</span>
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)', marginTop: 2 }}>
                  {[{ v: '94%', l: 'On-Time', g: true }, { v: '82/100', l: 'Risk', g: false }, { v: '0', l: 'Disputes', g: true }].map((m, i) => (
                    <div key={i} style={{ background: '#fff', padding: '4px 6px' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: m.g ? '#059669' : '#111318' }}>{m.v}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: '#9AA0AB', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 1 }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons — always fully visible */}
            <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
              <button ref={approveRef} style={{
                flex: 1, padding: '8px 0',
                background: status === 'approved' ? '#059669' : 'var(--blue)',
                color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em',
                textTransform: 'uppercase', fontWeight: 500, border: 'none', cursor: 'pointer',
                transform: approvePress ? 'scale(0.95)' : 'scale(1)',
                filter: approvePress ? 'brightness(0.88)' : 'none',
                transition: 'background 0.3s ease, transform 0.12s ease, filter 0.12s ease',
              }}>
                {status === 'approved' ? 'Approved ✓' : 'Approve Early Payment'}
              </button>
              <button style={{
                flex: 1, padding: '8px 0', background: '#fff', color: '#374151',
                fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em',
                textTransform: 'uppercase', fontWeight: 500, border: '1.5px solid #D1D5DB', cursor: 'pointer',
              }}>Reject</button>
            </div>
          </div>

          {/* Right: AI chat panel */}
          <div style={{ width: 158, background: '#fff', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ padding: '8px 10px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
              {AI_ICON}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: '#111318', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Strike SCF AI</span>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '8px 9px', display: 'flex', flexDirection: 'column', gap: 6, overflow: 'hidden' }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 4, alignItems: 'flex-start' }}>
                  {m.role === 'ai' && <div style={{ width: 12, height: 12, flexShrink: 0, marginTop: 1 }}>{AI_ICON}</div>}
                  <div style={{
                    padding: '6px 8px', fontSize: 9.5, lineHeight: 1.45, maxWidth: 115,
                    fontFamily: 'var(--font-body)', color: '#111318',
                    background: m.role === 'ai' ? 'rgba(20,40,204,0.05)' : '#F7F8FA',
                    border: m.role === 'ai' ? '1px solid rgba(20,40,204,0.14)' : '1px solid var(--border)',
                  }}>{m.text}</div>
                </div>
              ))}
              {showTyping && (
                <div style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                  <div style={{ width: 12, height: 12, flexShrink: 0, marginTop: 1 }}>{AI_ICON}</div>
                  <div style={{ padding: '7px 9px', background: 'rgba(20,40,204,0.05)', border: '1px solid rgba(20,40,204,0.12)', display: 'flex', gap: 3, alignItems: 'center' }}>
                    {[0, 180, 360].map(d => (
                      <div key={d} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', animation: `badge-pulse 1.1s ${d}ms ease infinite` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ padding: '7px 8px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
              <div ref={inputRef} style={{
                border: `1px solid ${inputActive ? 'var(--blue)' : 'var(--border)'}`,
                boxShadow: inputActive ? '0 0 0 2px rgba(20,40,204,0.14)' : 'none',
                padding: '5px 7px', background: '#fff', transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, color: typing ? '#111318' : '#9AA0AB', minHeight: 14, lineHeight: 1.4 }}>
                  {typing || (inputActive ? '' : 'Ask about this invoice…')}
                  {inputActive && <span style={{ display: 'inline-block', width: 1, height: 11, background: 'var(--blue)', marginLeft: 1, verticalAlign: 'text-bottom', animation: 'badge-pulse 1s steps(2) infinite' }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* macOS cursor */}
      <svg
        style={{
          position: 'absolute', left: cursorX, top: cursorY, pointerEvents: 'none', zIndex: 100,
          transform: cursorDown ? 'scale(0.78)' : 'scale(1)',
          transformOrigin: 'top left',
          transition: 'left 360ms ease-out, top 360ms ease-out, transform 0.1s ease',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))',
        }}
        width="16" height="22" viewBox="0 0 16 22" fill="none"
      >
        <path d="M1 1L1 19L5 15L8 21.5L10.5 20.5L7.5 14H13.5L1 1Z" fill="#1a1a1a" stroke="white" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

Object.assign(window, {
  Logo, Nav, Footer, SectionHead, Stat, FeatureList, FadeIn, TypewriterHero, HeroUIMockup, navTo
});

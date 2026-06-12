/* Shared components: Header, Footer, common building blocks */

const { useState, useEffect, useRef } = React;

function Logo() {
  return (
    <a href="/" className="brand" onClick={(e) => navTo(e, '/')} aria-label="Strike SCF — home">
      <img src="/assets/S-profile-logo.png" alt="" width="26" height="26" />
      <span className="brand-word">strike scf</span>
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

  const Dropdown = ({ label, active, links }) => (
    <div className={`nav-item has-dropdown${active ? ' active' : ''}`}>
      <button type="button" className="nav-trigger" aria-haspopup="true" aria-expanded="false">
        {label}
        <span className="nav-caret" aria-hidden="true" />
      </button>
      <div className="nav-dropdown" role="menu">
        {links.map(l => (
          <a key={l.path} href={l.path} role="menuitem" onClick={(e) => navTo(e, l.path)}>
            <span className="nav-dd-title">{l.label}</span>
            <span className="nav-dd-desc">{l.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <header className="site-header">
        <div className="container nav">
          <Logo />
          <nav className="nav-links">
            <Dropdown label="Programs" active={isProgramsActive} links={programLinks} />
            <Dropdown label="Who it's for" active={isAudienceActive} links={audienceLinks} />
            <div className={`nav-item${route === '/redbook' ? ' active' : ''}`}>
              <a href="/redbook" onClick={(e) => navTo(e, '/redbook')}>RedBook</a>
            </div>
            <div className={`nav-item${route === '/contact' ? ' active' : ''}`}>
              <a href="/contact" onClick={(e) => navTo(e, '/contact')}>Contact</a>
            </div>
          </nav>
          <div className="nav-right">
            <a href="https://app.strikescf.com" className="nav-login" target="_self" rel="noopener noreferrer">Log in</a>
            <a href="/contact" className="btn btn-sm btn-blue"
               onClick={(e) => navTo(e, '/contact')}>Contact sales</a>
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
            >Log in</a>
            <a href="/contact" className="btn btn-blue btn-arrow"
               onClick={(e) => { setMenuOpen(false); navTo(e, '/contact'); }}>Contact sales</a>
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
      transform: visible ? 'none' : 'translateY(14px)',
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
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

/* ---------- Product frame (hero demo) ----------
   A self-driving replica of the live portal: the cursor asks Strike AI a
   question, gets a grounded answer, and approves an early payment. Modeled
   on the production app's nav and review surface. */

const PF_NAV_ITEMS = [
  { label: 'Dashboard',       d: 'M1.5 1.5h4.6v4.6H1.5zM7.9 1.5h4.6v4.6H7.9zM1.5 7.9h4.6v4.6H1.5zM7.9 7.9h4.6v4.6H7.9z' },
  { label: 'Strike Place',    d: 'M2 5.2 3.2 2h7.6L12 5.2M2.6 5.2v6.8h8.8V5.2M5.6 12V8.4h2.8V12' },
  { label: 'My Deals',        d: 'M3.5 1.5h4.8l2.7 2.7v8.3H3.5zM5.5 7h3.5M5.5 9.4h3.5', active: true },
  { label: 'Financing',       d: 'M7 1.8a5.2 5.2 0 1 0 0 10.4A5.2 5.2 0 0 0 7 1.8ZM7 4v6M8.6 5.2c-.4-.5-1-.8-1.6-.8-.9 0-1.6.5-1.6 1.2 0 1.6 3.2.8 3.2 2.4 0 .7-.7 1.2-1.6 1.2-.6 0-1.2-.3-1.6-.8' },
  { label: 'Networks',        d: 'M3.5 5.3a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM10.5 5.3a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM7 12.6a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM4.4 5l1.8 4M9.6 5 7.8 9M5.4 3.4h3.2' },
  { label: 'Strike Rooms',    d: 'M1.8 2.5h10.4v6.8H6.4l-2.8 2.6V9.3H1.8z' },
  { label: 'Strike Passport', d: 'M7 1.4l4.6 1.9v4.2c0 2.9-2 4.7-4.6 5.6-2.6-.9-4.6-2.7-4.6-5.6V3.3zM4.9 7l1.5 1.5L9.2 5.7' },
  { label: 'Analytics',       d: 'M2.6 12V7.8M7 12V3.6M11.4 12V6' },
];

function ProductFrame() {
  const [status, setStatus] = useState('pending'); // 'pending' | 'approved'
  const [cursorX, setCursorX] = useState(340);
  const [cursorY, setCursorY] = useState(96);
  const [typing, setTyping] = useState('');
  const initialMsgs = [
    { role: 'ai', text: 'INV-2024-0892 is ready for review. Westcoast has a strong track record on this program.' }
  ];
  const [msgs, setMsgs] = useState(initialMsgs);
  const [showTyping, setShowTyping] = useState(false);
  const [cursorDown, setCursorDown] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [approvePress, setApprovePress] = useState(false);
  const [animOff, setAnimOff] = useState(false);
  const mountedRef = useRef(true);
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const approveRef = useRef(null);

  useEffect(() => {
    mountedRef.current = true;
    const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));
    const safe = (fn) => { if (mountedRef.current) fn(); };

    const elCenter = (ref) => {
      const el = ref.current, root = rootRef.current;
      if (!el || !root) return null;
      const r = el.getBoundingClientRect();
      if (r.width === 0) return null;
      const rr = root.getBoundingClientRect();
      return { x: Math.round(r.left - rr.left + r.width / 2), y: Math.round(r.top - rr.top + r.height / 2) };
    };

    const moveTo = async (pt, ms) => {
      safe(() => { setCursorX(pt.x); setCursorY(pt.y); });
      await wait(ms);
    };

    const click = async (onDown) => {
      safe(() => setCursorDown(true));
      if (onDown) safe(onDown);
      await wait(150);
      safe(() => setCursorDown(false));
      await wait(90);
    };

    async function cycle() {
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        safe(() => {
          setAnimOff(true);
          setStatus('approved');
          setMsgs([
            ...initialMsgs,
            { role: 'user', text: 'Is it safe to approve?' },
            { role: 'ai', text: 'Yes — risk 82/100, clean history, 0 disputes. Vietnam flag low severity. Safe to approve.' },
          ]);
        });
        return;
      }

      while (mountedRef.current) {
        await wait(900);
        const inputPt = elCenter(inputRef);

        if (inputPt) {
          // Full sequence: ask Strike AI, read the answer, then approve
          await moveTo(inputPt, 460);
          await wait(180);
          await click(() => setInputActive(true));

          const question = 'Is it safe to approve?';
          for (let i = 0; i <= question.length; i++) {
            safe(() => setTyping(question.slice(0, i)));
            await wait(34);
          }
          await wait(260);
          safe(() => {
            setMsgs(m => [...m, { role: 'user', text: question }]);
            setTyping('');
            setInputActive(false);
            setShowTyping(true);
          });
          await wait(1100);
          safe(() => {
            setShowTyping(false);
            setMsgs(m => [...m, { role: 'ai', text: 'Yes — risk 82/100, clean history, 0 disputes. Vietnam flag low severity. Safe to approve.' }]);
          });
          await wait(1000);
        }

        const approvePt = elCenter(approveRef);
        if (approvePt) {
          await moveTo(approvePt, 460);
          await wait(240);
          await click(() => setApprovePress(true));
          safe(() => { setStatus('approved'); setApprovePress(false); });
        }
        await wait(2600);

        // Reset for the next pass
        safe(() => {
          setStatus('pending');
          setMsgs(initialMsgs);
          setTyping('');
          setShowTyping(false);
          setInputActive(false);
          setApprovePress(false);
          setCursorX(340); setCursorY(96);
        });
        await wait(700);
      }
    }
    cycle();

    return () => {
      mountedRef.current = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  const AI_ICON = (
    <svg width="14" height="14" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill="var(--blue)" />
      <path d="M10 13.5C10 11 12 9 14.5 9h7C24 9 26 11 26 13.5V14c0 1.4-.7 2.6-1.8 3.3C25.3 18 26 19.2 26 20.6V21.5C26 24 24 26 21.5 26h-7C12 26 10 24 10 21.5V21c0-1.4.7-2.6 1.8-3.3C10.7 17 10 15.8 10 14.4V13.5Z" fill="white" />
    </svg>
  );

  const monoLabel = { fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase' };

  return (
    <div className="pframe-wrap">
    <div className="pframe">
      {/* Browser chrome */}
      <div className="pframe-chrome">
        <div className="pframe-dots"><span /><span /><span /></div>
        <div className="pframe-url">
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
            <rect x="0.5" y="4.5" width="8" height="6" stroke="#9AA0AB" />
            <path d="M2.5 4.5V3a2 2 0 1 1 4 0v1.5" stroke="#9AA0AB" />
          </svg>
          app.strikescf.com/deals/INV-2024-0892
        </div>
      </div>

      <div className="pframe-body" ref={rootRef}>
        {/* Sidebar — mirrors the production portal nav */}
        <aside className="pframe-side" aria-hidden="true">
          <div className="pframe-side-brand">
            <img src="/assets/S-profile-logo.png" alt="" />
            <span>strike scf</span>
          </div>
          {PF_NAV_ITEMS.map((item) => (
            <div key={item.label} className={'pframe-nav-item' + (item.active ? ' active' : '')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d={item.d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main surface */}
        <div className="pframe-main">
          <div className="pframe-topbar">
            <span>My Deals</span>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span>Atlas RF · Q2</span>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>INV-2024-0892</span>
            <div style={{ flex: 1 }} />
            <span className="pf-topbar-right" style={{ fontSize: 10 }}>Anchor portal · Aurelia Holdings</span>
          </div>

          <div className="pframe-content">
            {/* Working surface */}
            <div className="pframe-work">
              {/* Invoice card */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, flexShrink: 0 }}>
                <div style={{ padding: '11px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ ...monoLabel, fontSize: 10, color: 'var(--gray)' }}>Invoice · INV-2024-0892</span>
                  <span style={{
                    ...monoLabel, padding: '3px 10px', borderRadius: 999, fontSize: 9, fontWeight: 500,
                    background: status === 'approved' ? 'rgba(5,150,105,0.1)' : 'rgba(217,119,6,0.1)',
                    color: status === 'approved' ? '#059669' : '#B45309',
                    transition: 'all 0.3s ease',
                  }}>
                    {status === 'approved' ? 'Approved' : 'Pending your approval'}
                  </span>
                </div>
                <div className="pf-fields" style={{ padding: '13px 16px' }}>
                  {[
                    { l: 'Supplier', v: 'Westcoast Fabricators', c: null },
                    { l: 'Program', v: 'Atlas RF · Q2', c: null },
                    { l: 'Invoice amount', v: '$248,500', c: 'var(--blue)' },
                    { l: 'Early payment', v: '$223,650', c: null },
                    { l: 'Due date', v: 'Jun 28, 2026', c: null },
                    { l: 'Days early', v: '22 days', c: '#059669' },
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span style={{ ...monoLabel, fontSize: 8.5, color: 'var(--gray-soft)' }}>{f.l}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: f.c || 'var(--ink)', fontWeight: 500 }}>{f.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI assessment */}
              <div style={{ border: '1px solid rgba(20,40,204,0.16)', background: 'rgba(20,40,204,0.025)', borderRadius: 12, flexShrink: 0 }}>
                <div style={{ padding: '9px 16px', borderBottom: '1px solid rgba(20,40,204,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ ...monoLabel, display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: 'var(--blue)', fontWeight: 500 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="0.5" y="0.5" width="9" height="9" rx="2.5" stroke="currentColor" strokeWidth="0.9"/><path d="M3 5h4M3 3h2M3 7h3" stroke="currentColor" strokeWidth="0.9" strokeLinecap="square"/></svg>
                    Strike AI · Assessment
                  </span>
                  <span style={{ ...monoLabel, fontSize: 8.5, color: 'var(--gray-soft)' }}>Confidence <span style={{ color: '#059669', fontWeight: 500 }}>97%</span></span>
                </div>
                <div style={{ padding: '11px 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { dot: '#059669', text: 'Approve. 18-month record clean — 94% on-time, 0 disputes across 34 transactions.' },
                    { dot: '#059669', text: 'Rate of 90% within policy. Net fee $1,340 accrues to Atlas Bank on settlement.' },
                    { dot: '#D97706', text: 'Monitor: Vietnam 23% of sourcing. Tariff signal elevated — flag Q3 orders.' },
                  ].map((r, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: r.dot, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#374151', lineHeight: 1.5 }}>{r.text}</span>
                    </div>
                  ))}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginTop: 4 }}>
                    {[{ v: '94%', l: 'On-time', g: true }, { v: '82/100', l: 'Risk', g: false }, { v: '0', l: 'Disputes', g: true }].map((m, i) => (
                      <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 500, color: m.g ? '#059669' : 'var(--ink)' }}>{m.v}</div>
                        <div style={{ ...monoLabel, fontSize: 7.5, color: 'var(--gray-soft)', marginTop: 2 }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <button ref={approveRef} style={{
                  flex: 1, padding: '10px 0', borderRadius: 999,
                  background: status === 'approved' ? '#059669' : 'var(--blue)',
                  color: '#fff', ...monoLabel, fontSize: 10, fontWeight: 500, border: 'none', cursor: 'pointer',
                  transform: approvePress ? 'scale(0.96)' : 'scale(1)',
                  filter: approvePress ? 'brightness(0.88)' : 'none',
                  transition: 'background 0.3s ease, transform 0.12s ease, filter 0.12s ease',
                }}>
                  {status === 'approved' ? 'Approved ✓' : 'Approve early payment'}
                </button>
                <button style={{
                  flex: 1, padding: '10px 0', borderRadius: 999, background: '#fff', color: '#374151',
                  ...monoLabel, fontSize: 10, fontWeight: 500, border: '1px solid var(--border-strong)', cursor: 'pointer',
                }}>Reject</button>
              </div>

              {/* Program activity */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '9px 16px', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
                  <span style={{ ...monoLabel, fontSize: 9, color: 'var(--gray-soft)' }}>Program activity · last 24h</span>
                </div>
                <div style={{ padding: '4px 16px' }}>
                  {[
                    ['INV-0889', 'Meridian Optics SA', '$128,440', 'Disbursed'],
                    ['INV-0871', 'Kestra Industrials', '$1,204,000', 'Approved'],
                    ['INV-0866', 'Coventry Trade Ltd', '$84,200', 'AI review'],
                  ].map((r, i) => (
                    <div key={i} className="pf-activity-row" style={{ padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', fontFamily: 'var(--font-mono)', fontSize: 10.5 }}>
                      <span className="pf-activity-id" style={{ color: 'var(--gray-soft)' }}>{r[0]}</span>
                      <span style={{ color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r[1]}</span>
                      <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{r[2]}</span>
                      <span style={{ color: r[3] === 'AI review' ? 'var(--blue)' : 'var(--gray)', fontSize: 9.5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{r[3]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strike AI chat rail */}
            <div className="pframe-chat">
              <div style={{ padding: '11px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
                {AI_ICON}
                <span style={{ ...monoLabel, fontSize: 9.5, color: 'var(--ink)', fontWeight: 600 }}>Strike AI</span>
                <span style={{ ...monoLabel, fontSize: 8, color: 'var(--gray-soft)', marginLeft: 'auto' }}>Grounded · Live</span>
              </div>

              <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' }}>
                {msgs.map((m, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 6, alignItems: 'flex-start' }}>
                    {m.role === 'ai' && <div style={{ width: 14, height: 14, flexShrink: 0, marginTop: 2 }}>{AI_ICON}</div>}
                    <div style={{
                      padding: '8px 11px', fontSize: 12, lineHeight: 1.5, maxWidth: 200, borderRadius: 10,
                      fontFamily: 'var(--font-body)', color: 'var(--ink)',
                      background: m.role === 'ai' ? 'rgba(20,40,204,0.05)' : 'var(--offwhite)',
                      border: m.role === 'ai' ? '1px solid rgba(20,40,204,0.12)' : '1px solid var(--border)',
                    }}>{m.text}</div>
                  </div>
                ))}
                {showTyping && (
                  <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <div style={{ width: 14, height: 14, flexShrink: 0, marginTop: 2 }}>{AI_ICON}</div>
                    <div style={{ padding: '9px 11px', borderRadius: 10, background: 'rgba(20,40,204,0.05)', border: '1px solid rgba(20,40,204,0.12)', display: 'flex', gap: 4, alignItems: 'center' }}>
                      {[0, 180, 360].map(d => (
                        <div key={d} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', animation: `badge-pulse 1.1s ${d}ms ease infinite` }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
                <div ref={inputRef} style={{
                  border: `1px solid ${inputActive ? 'var(--blue)' : 'var(--border)'}`,
                  boxShadow: inputActive ? '0 0 0 3px rgba(20,40,204,0.12)' : 'none',
                  borderRadius: 10,
                  padding: '8px 11px', background: '#fff', transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: typing ? 'var(--ink)' : 'var(--gray-soft)', minHeight: 17, lineHeight: 1.4 }}>
                    {typing || (inputActive ? '' : 'Ask about this invoice…')}
                    {inputActive && <span style={{ display: 'inline-block', width: 1.5, height: 13, background: 'var(--blue)', marginLeft: 1, verticalAlign: 'text-bottom', animation: 'badge-pulse 1s steps(2) infinite' }} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* macOS cursor */}
        {!animOff && (
          <svg
            style={{
              position: 'absolute', left: cursorX, top: cursorY, pointerEvents: 'none', zIndex: 100,
              transform: cursorDown ? 'scale(0.78)' : 'scale(1)',
              transformOrigin: 'top left',
              transition: 'left 400ms ease-out, top 400ms ease-out, transform 0.1s ease',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))',
            }}
            width="16" height="22" viewBox="0 0 16 22" fill="none"
          >
            <path d="M1 1L1 19L5 15L8 21.5L10.5 20.5L7.5 14H13.5L1 1Z" fill="#1a1a1a" stroke="white" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        )}
      </div>
    </div>
    </div>
  );
}
Object.assign(window, {
  Logo, Nav, Footer, SectionHead, Stat, FeatureList, FadeIn, ProductFrame, navTo
});

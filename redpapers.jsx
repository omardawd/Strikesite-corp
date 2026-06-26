/* Red Paper articles — Strike SCF editorial series */

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
}

function useCountUp(target, duration, triggered) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = null;
    const num = parseFloat(target);
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * num * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered]);
  return value;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Reading progress bar ─── */
function ReadingProgressBar({ pct }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 64,
        left: 0,
        height: 2,
        width: pct + '%',
        background: 'var(--blue)',
        zIndex: 9999,
        transition: 'width 0.08s linear',
        pointerEvents: 'none',
        transformOrigin: 'left',
      }}
    />
  );
}

/* ─── Network diagram — light, high contrast ─── */
function AgenticNetworkDiagram() {
  return (
    <div style={{ width: '100%', borderRadius: 2, border: '1px solid var(--border)', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 720 290"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', display: 'block', background: '#F7F8FA' }}
        aria-label="Agentic trade finance network diagram"
      >
        <defs>
          <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0 L0,7 L7,3.5 z" fill="#1428CC" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="hBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1428CC" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1428CC" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        <line x1="152" y1="145" x2="353" y2="90" stroke="#1428CC" strokeWidth="1.5" strokeOpacity="0.55" markerEnd="url(#arr)" />
        <line x1="152" y1="145" x2="353" y2="200" stroke="#1428CC" strokeWidth="1.5" strokeOpacity="0.55" markerEnd="url(#arr)" />
        <line x1="367" y1="90" x2="566" y2="145" stroke="#1428CC" strokeWidth="1.5" strokeOpacity="0.55" markerEnd="url(#arr)" />
        <line x1="367" y1="200" x2="566" y2="145" stroke="#1428CC" strokeWidth="1.5" strokeOpacity="0.55" markerEnd="url(#arr)" />
        <line x1="360" y1="100" x2="360" y2="190" stroke="#9AA0AB" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />

        {/* Animated packets */}
        <circle r="4" fill="#1428CC" filter="url(#glow)">
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s"><mpath href="#p1" /></animateMotion>
        </circle>
        <circle r="4" fill="#1428CC" filter="url(#glow)">
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s"><mpath href="#p2" /></animateMotion>
        </circle>
        <circle r="4" fill="#C9A84C" filter="url(#glow)">
          <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.6s"><mpath href="#p3" /></animateMotion>
        </circle>
        <circle r="4" fill="#C9A84C" filter="url(#glow)">
          <animateMotion dur="2.3s" repeatCount="indefinite" begin="1.9s"><mpath href="#p4" /></animateMotion>
        </circle>
        <defs>
          <path id="p1" d="M152,145 L360,90" />
          <path id="p2" d="M152,145 L360,200" />
          <path id="p3" d="M360,90 L568,145" />
          <path id="p4" d="M360,200 L568,145" />
        </defs>

        {/* Halos */}
        <circle cx="152" cy="145" r="40" fill="url(#hBlue)" />
        <circle cx="360" cy="90" r="30" fill="url(#hBlue)" />
        <circle cx="360" cy="200" r="30" fill="url(#hBlue)" />
        <circle cx="568" cy="145" r="40" fill="url(#hGold)" />

        {/* Nodes */}
        <circle cx="152" cy="145" r="22" fill="#fff" stroke="#1428CC" strokeWidth="2" />
        <circle cx="360" cy="90" r="16" fill="#fff" stroke="#1428CC" strokeWidth="1.5" />
        <circle cx="360" cy="200" r="16" fill="#fff" stroke="#1428CC" strokeWidth="1.5" />
        <circle cx="568" cy="145" r="22" fill="#fff" stroke="#C9A84C" strokeWidth="2" />

        {/* Pulse rings */}
        <circle cx="152" cy="145" r="22" fill="none" stroke="#1428CC" strokeWidth="1.5" opacity="0">
          <animate attributeName="r" values="22;40;22" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="568" cy="145" r="22" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0">
          <animate attributeName="r" values="22;40;22" dur="3s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>

        {/* Node text */}
        <text x="152" y="149" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#1428CC" fontWeight="700">AGT</text>
        <text x="360" y="94" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#1428CC" fontWeight="700">AGT</text>
        <text x="360" y="204" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#1428CC" fontWeight="700">AGT</text>
        <text x="568" y="149" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#966B0A" fontWeight="700">AGT</text>

        {/* External labels */}
        <text x="152" y="178" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#111318" letterSpacing="1">SUPPLIER</text>
        <text x="360" y="116" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#6B7280" letterSpacing="1">PLATFORM</text>
        <text x="360" y="226" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#6B7280" letterSpacing="1">RISK</text>
        <text x="568" y="178" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#111318" letterSpacing="1">FUNDER</text>

        {/* Live indicator */}
        <circle cx="28" cy="22" r="4" fill="#1428CC">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="38" y="26" fontSize="9" fontFamily="monospace" fill="#1428CC" letterSpacing="0.5">LIVE</text>
        <text x="694" y="26" fontSize="9" fontFamily="monospace" fill="#6B7280" textAnchor="end" letterSpacing="0.5">OPEN NETWORK</text>
      </svg>

      <div style={{ padding: '10px 20px', background: '#EEEEF8', borderTop: '1px solid #D1D5DB', display: 'flex', gap: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#1428CC', letterSpacing: '0.06em' }}>● AUTONOMOUS NEGOTIATION ACTIVE</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#8B6914', letterSpacing: '0.06em' }}>● HUMAN APPROVAL PENDING</span>
      </div>
    </div>
  );
}

/* ─── Stat callout with count-up ─── */
function StatCallout({ number, suffix, label, description }) {
  const [ref, inView] = useInView(0.3);
  const count = useCountUp(number, 1800, inView);
  return (
    <div ref={ref} style={{
      padding: '28px 32px',
      borderLeft: '2px solid var(--blue)',
      background: 'var(--offwhite)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(10px)',
      transition: 'opacity 0.55s ease, transform 0.55s ease',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.08em', marginTop: 8, marginBottom: 6, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray)', lineHeight: 1.6, fontWeight: 300 }}>{description}</div>
    </div>
  );
}

/* ─── Inline citation ─── */
function Cite({ n }) {
  return (
    <a href={'#ref-' + n}
      style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', verticalAlign: 'super', lineHeight: 1, textDecoration: 'none', marginLeft: 1 }}
      aria-label={'Citation ' + n}>
      [{n}]
    </a>
  );
}

/* ─── Fade-in section wrapper ─── */
function ArticleSection({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.05);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(14px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* ─── Red Paper No. 1 ─── */
function RedPaperCopilotPage() {
  const progress = useScrollProgress();
  const [bibOpen, setBibOpen] = useState(false);

  /* Shared text styles */
  const body = {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(16px, 1.5vw, 18px)',
    lineHeight: 1.82,
    color: '#1A1D24',
    marginBottom: '1.4rem',
  };

  const h2 = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.45rem, 2.5vw, 2rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    color: 'var(--ink)',
    marginTop: '3.5rem',
    marginBottom: '1.1rem',
    lineHeight: 1.15,
  };

  const h3 = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    color: 'var(--ink)',
    marginTop: '2.25rem',
    marginBottom: '0.65rem',
    lineHeight: 1.3,
  };

  const pullQuote = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    fontWeight: 600,
    letterSpacing: '-0.025em',
    lineHeight: 1.35,
    color: 'var(--ink)',
    borderTop: '2px solid var(--blue)',
    borderBottom: '1px solid var(--border)',
    padding: '24px 0 20px',
    margin: '2.5rem 0',
  };

  const refs = [
    { n: 1, text: 'Asian Development Bank. "Demand for Trade Finance to Rise Amid Supply Chain Realignment." Global Trade Finance Gap Survey, January 2026.', url: 'https://www.adb.org/news/demand-trade-finance-rise-amid-supply-chain-realignment-adb-report' },
    { n: 2, text: 'International Chamber of Commerce. ICC Trade Register - Trade Finance Default Rate Data.', url: null },
    { n: 3, text: 'World Trade Organization. "Trade Finance and SMEs: Bridging the Gaps in Provision."', url: 'https://www.wto.org/english/res_e/booksp_e/tradefinsme_e.pdf' },
    { n: 4, text: 'ScryAI. "Trade Finance Process Automation: Complete 2026 Guide."', url: 'https://scryai.com/blog/trade-finance-process-automation/' },
    { n: 5, text: 'ScienceDirect. "AI-driven transformation in trade finance: A roadmap for automating letter of credit document examination." 2025.', url: 'https://www.sciencedirect.com/science/article/pii/S2666954425000250' },
    { n: 6, text: 'KlearStack. "Automation in Trade Finance: Benefits and Tools."', url: 'https://klearstack.com/blogs/automation-in-trade-finance-ultimate-guide' },
    { n: 7, text: 'Vayana. "How AI Transforms Supply Chain Finance in 2026."', url: 'https://www.vayana.com/blogs/the-intelligence-layer-ai-predictive-finance-supply-chain-finance/' },
    { n: 8, text: 'Global Trade Review. "SecureLend Brings AI Automation to SME Funding and Factoring."', url: 'https://www.gtreview.com/news/americas/securelend-brings-ai-automation-to-sme-funding-and-factoring/' },
    { n: 9, text: 'ResearchGate. "A data-driven and network-aware approach for credit risk prediction in supply chain finance." 2020.', url: 'https://www.researchgate.net/publication/342640827' },
    { n: 10, text: 'Druid AI. "Agentic AI Trends 2026: How Multiagent Systems Redefine Enterprise Operations."', url: 'https://www.druidai.com/blog/agentic-ai-trends-in-2026' },
    { n: 11, text: 'CogitX. "AI Agents: Complete Overview 2026."', url: 'https://cogitx.ai/blog/ai-agents-complete-overview-2026' },
    { n: 12, text: 'NextAgile. "Agentic AI Architecture Framework for Enterprises in 2026."', url: 'https://nextagile.ai/blogs/gen-ai/agentic-ai-architecture-framework-enterprises/' },
    { n: 13, text: 'Pactum. "Understanding Agentic AI in Procurement: How Autonomous AI Has Been Transforming Supplier Deals."', url: 'https://pactum.com/understanding-agentic-ai-in-procurement-how-autonomous-ai-has-been-transforming-supplier-deals/' },
    { n: 14, text: 'Bloomberg. "Walmart Uses Pactum AI Tools to Handle Vendor Negotiations." April 26, 2023.', url: 'https://www.bloomberg.com/news/articles/2023-04-26/walmart-uses-pactum-ai-tools-to-handle-vendor-negotiations' },
    { n: 15, text: 'McKinsey & Company. "Redefining Procurement Performance in the Era of Agentic AI."', url: 'https://www.mckinsey.com/capabilities/operations/our-insights/redefining-procurement-performance-in-the-era-of-agentic-ai' },
    { n: 16, text: 'Suplari. "How AI Agents Change How Procurement Work Gets Done in 2026."', url: 'https://suplari.com/blog/how-ai-agents-change-how-procurement-work-gets-done/' },
    { n: 17, text: 'McKinsey & Company. "Transforming Procurement Functions for an AI-Driven World."', url: 'https://www.mckinsey.com/capabilities/operations/our-insights/transforming-procurement-functions-for-an-ai-driven-world' },
    { n: 18, text: 'arXiv. "Aiming for AI Interoperability: Challenges and Opportunities." 2026.', url: 'https://arxiv.org/pdf/2601.14512' },
    { n: 19, text: 'arXiv. "Coral Protocol: Open Infrastructure Connecting the Internet of Agents." 2025.', url: 'https://arxiv.org/pdf/2505.00749' },
    { n: 20, text: 'LSEG. "From Interoperability to Agents: Powering Financial Workflows with AI."', url: 'https://www.lseg.com/en/insights/from-interoperability-to-agents-powering-financial-workflows-with-ai' },
    { n: 21, text: 'InfoWorld. "Why Open Infrastructure Will Define the AI Era."', url: 'https://www.infoworld.com/article/4186382/why-open-infrastructure-will-define-the-ai-era.html' },
    { n: 22, text: 'Springer / Operations Management Research. "The Role of Artificial Intelligence in the Supply Chain Finance Innovation Process." 2024.', url: 'https://link.springer.com/article/10.1007/s12063-024-00492-2' },
    { n: 23, text: 'ScienceDirect. "Artificial Intelligence, Supply Chain Finance, and Corporate Investment Efficiency." 2025.', url: 'https://www.sciencedirect.com/science/article/abs/pii/S1544612325011092' },
    { n: 24, text: 'ResearchGate. "A Data-Driven and Network-Aware Approach for Credit Risk Prediction in Supply Chain Finance." 2020.', url: 'https://www.researchgate.net/publication/342640827_A_data-driven_and_network-aware_approach_for_credit_risk_prediction_in_supply_chain_finance' },
    { n: 25, text: 'Bank for International Settlements. "Governance of AI Adoption in Central Banks." January 2025.', url: 'https://www.bis.org/publ/othp90.pdf' },
    { n: 26, text: 'Bank for International Settlements. "The Use of Artificial Intelligence for Policy Purposes." June 2025.', url: 'https://www.bis.org/publ/othp100.pdf' },
    { n: 27, text: 'BAFT. "2026 Global Annual Meeting - Agenda and Sessions."', url: 'https://baft.org/event/2026-global-annual-meeting/' },
    { n: 28, text: 'EastNets. "The Trade Finance System Is Under Strain - Is AI Helping or Hindering?"', url: 'https://www.eastnets.com/blog/the-trade-finance-system-is-under-strain-is-ai-helping-or-hindering' },
    { n: 29, text: 'AI CERTs. "AI Regulation Meets Basel III Endgame: Operational Risk Shift."', url: 'https://www.aicerts.ai/news/ai-regulation-meets-basel-iii-endgame-operational-risk-shift/' },
    { n: 30, text: 'Prolifics / KPMG. "Agentic AI in Supply Chain: 7 Trends for 2026."', url: 'https://prolifics.com/usa/resource-center/blog/agentic-ai-in-supply-chain' },
    { n: 31, text: 'KPMG. "Key Trends Impacting Supply Chains in 2026."', url: 'https://kpmg.com/xx/en/our-insights/operations/supply-chain-trends-2026.html' },
    { n: 32, text: 'PwC. "How AI Agents Are Transforming Procurement: What CPOs Should Know."', url: 'https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-in-procurement.html' },
    { n: 33, text: 'GTR. "Half of SME Trade Finance Requests Rejected, WTO Finds."', url: 'https://www.gtreview.com/news/global/half-of-sme-trade-finance-requests-rejected-wto-finds/' },
  ];

  /* ── Shared layout constants ── */
  const CONTENT_MAX = 860;
  const CONTENT_PAD = 'clamp(20px, 5vw, 72px)';

  return (
    <div data-screen-label="RedPaper - Co-Pilot to Counterparty">

      {/* Reading progress bar — inlined to avoid scope resolution issues with Babel standalone */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          width: progress + '%',
          background: 'var(--blue)',
          zIndex: 9999,
          transition: 'width 0.08s linear',
          pointerEvents: 'none',
        }}
      />

      {/* ══ COVER ══ */}
      <div style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--blue)', zIndex: 2 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `clamp(52px, 8vh, 100px) ${CONTENT_PAD}` }}>
          {/* Top row: label + date */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Strike SCF · Red Paper No. 1
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.06em' }}>JUNE 2026</div>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 700, letterSpacing: '-0.035em', color: '#fff', lineHeight: 1.06, marginBottom: 18, maxWidth: '18ch' }}>
            From Co-Pilot to Counterparty
          </h1>

          {/* Deck */}
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: 'rgba(255,255,255,0.48)', lineHeight: 1.55, maxWidth: '54ch', fontWeight: 400, marginBottom: 32 }}>
            How autonomous AI agents are rewriting the rules of trade finance - and why open networks are the prerequisite for any of it to work.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 44 }}>
            <a href="#article"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', padding: '12px 24px', textDecoration: 'none', borderRadius: 2, transition: 'background 0.15s ease' }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--blue-hover)'}
              onMouseOut={e => e.currentTarget.style.background = 'var(--blue)'}
            >
              READ THE RED PAPER →
            </a>
            <a href="#"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'rgba(255,255,255,0.52)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', padding: '12px 24px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 2, transition: 'border-color 0.15s ease, color 0.15s ease' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'; e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(255,255,255,0.52)'; }}
            >
              ↓ DOWNLOAD PDF
            </a>
          </div>

          {/* Meta strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20 }}>
            {[
              { label: 'Word Count', value: '~3,600' },
              { label: 'Reading Time', value: '14 min' },
              { label: 'Citations', value: '33 Sources' },
              { label: 'Classification', value: 'Public' },
            ].map((m, i) => (
              <div key={i} style={{ paddingRight: 28, marginRight: 28, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.08em', marginBottom: 4, textTransform: 'uppercase' }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.48)' }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ARTICLE BODY ══
          Single unified column: text, stats, diagram all sit at the same CONTENT_MAX width.
          No inner/outer width split — everything aligns on the same left edge.   */}
      <div id="article" style={{ background: '#fff' }}>
        <div style={{ maxWidth: CONTENT_MAX, margin: '0 auto', padding: `clamp(48px, 6vw, 80px) ${CONTENT_PAD}` }}>

          {/* Abstract */}
          <ArticleSection>
            <div style={{ borderLeft: '2px solid var(--blue)', paddingLeft: 22, marginBottom: '3rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.1em', marginBottom: 10 }}>ABSTRACT</div>
              <p style={{ ...body, color: 'var(--gray)', marginBottom: 0, fontSize: 14.5, lineHeight: 1.75 }}>
                The global trade finance gap has sat at $2.5 trillion for three consecutive years - not because capital is scarce, but because the infrastructure that should move it is built on bilateral relationships, manual document review, and closed institutional networks that cannot scale. Agentic AI represents the first genuine architectural response to this problem. But the industry is making a critical error: deploying agents inside the same closed systems that caused the gap in the first place. An agent trapped inside a silo is just a faster bureaucrat. This paper argues that open, interoperable networks are not a nice-to-have for the agentic era in trade finance. They are the prerequisite.
              </p>
            </div>
          </ArticleSection>

          {/* ── I ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>I. The Gap - A Structural Problem, Not a Cyclical One</h2>
            <p style={body}>
              Consider a specific moment that is happening right now, at industrial scale. A supplier in Nairobi has delivered a full shipment - goods produced, inspected, loaded. The invoice is submitted. The buyer acknowledges it. And then it sits. It sits in a bank's review queue for eleven days while the supplier draws down credit to fund the next production run against revenue it has technically already earned. This is not an edge case. It is the default experience for millions of SMEs operating in global trade.
            </p>
            <p style={body}>
              The Asian Development Bank's most recent global survey places unmet demand for trade finance at <strong>$2.5 trillion</strong> - approximately 10% of all global merchandise trade.<Cite n={1} /> This figure has been essentially flat since 2023. It has grown from $1.5 trillion in 2015. The gap is not cyclical. It does not narrow during economic expansions and widen during contractions. It persists as a structural feature of the system.
            </p>
          </ArticleSection>

          <ArticleSection delay={0.08}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', margin: '2rem 0 2.5rem' }}>
              <StatCallout number={2.5} suffix="T" label="Trade Finance Gap" description="Unmet global demand in 2026 - flat for three consecutive years." />
              <StatCallout number={41} suffix="%" label="SME Rejection Rate" description="Applications rejected vs. 7% for multinationals historically." />
              <StatCallout number={0.5} suffix="%" label="Default Rate" description="Trade finance instruments default below 0.5% - not a credit problem." />
            </div>
          </ArticleSection>

          <ArticleSection delay={0.05}>
            <p style={body}>
              The persistence of the gap is not explained by credit risk. Default rates in trade finance are among the lowest in all banking - the ICC Trade Register has consistently documented short-term trade finance instruments defaulting at rates below 0.5%.<Cite n={2} /> Banks are not turning away applicants because the trades are too risky. They are turning them away because the economics of verification and underwriting inside legacy systems do not work at smaller ticket sizes.
            </p>
            <p style={body}>
              The burden falls overwhelmingly on SMEs. Historically, more than half of SME trade finance applications have been rejected, compared to just 7% for multinational corporations.<Cite n={3} /> As of 2025, the ADB reports that rejection rates have narrowed - 41% for SMEs versus 40% for large corporates - and attributes part of this improvement to AI-assisted screening tools.<Cite n={1} /> But the same survey notes a more troubling figure: a significant portion of would-be applicants have simply stopped applying after repeated rejections. The gap understates the true demand. Women-led businesses face a more severe version of the same barrier: approximately 70% of their applications are partially or fully rejected.<Cite n={1} />
            </p>

            <div style={pullQuote}>
              "The $2.5 trillion gap is not a capital shortage. It is a verification-cost and coordination problem - precisely the class of problem that AI agents are built to solve."
            </div>

            <p style={body}>
              Beyond access, there is a speed problem. Manual trade finance processing - from invoice submission to funding disbursement - takes between 5 and 14 business days across the industry. Letter of credit processing takes 3–10 days manually.<Cite n={4} /><Cite n={5} /> The cost benchmarks are equally stark: manual document processing runs $25–50 per document; automated AI pipelines bring this to $1–5, with invoice-level accuracy reaching 99% in leading deployments.<Cite n={6} />
            </p>
          </ArticleSection>

          {/* ── II ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>II. The Infrastructure Diagnosis - Why Legacy SCF Fails at Scale</h2>

            <h3 style={h3}>The Bilateral Relationship Trap</h3>
            <p style={body}>
              Traditional supply chain finance operates through bilateral relationships: one bank, one corporate buyer, a pre-approved set of suppliers. The bank extends a financing program to a buyer it already knows. The buyer invites suppliers it already works with. The supplier receives early payment - but only if it happens to have a relationship with that buyer, and only if that buyer's bank has capacity and appetite.
            </p>
            <p style={body}>
              This architecture works reasonably well for the largest counterparties. It is structurally incapable of reaching the long tail of global trade. A supplier in Bogota trading with a buyer in Singapore cannot access the financing program of a bank in Tokyo because the relationships - and the data - do not cross those institutional lines. The result is a network that is deep in the middle and thin at the edges. The edges are where most of the world's suppliers live.
            </p>

            <h3 style={h3}>The Verification Cost Problem</h3>
            <p style={body}>
              The reason SME applications are rejected at higher rates than corporate applications is not predominantly credit risk - it is verification cost. A bank processing a $500,000 invoice from a Fortune 500 buyer bears similar KYB and compliance overhead to processing a $50,000 invoice from a mid-market supplier. The economics do not work at the smaller ticket.
            </p>
            <p style={body}>
              AI changes this cost curve dramatically. Automated KYB, document intelligence, and behavioral scoring reduce per-application costs by up to 80% in early deployments.<Cite n={7} /> One lender deploying AI automation across SME funding and factoring achieved 90% faster processing and 67% higher conversion rates.<Cite n={8} /> This does not just make existing applications cheaper - it makes a new category of applications economically viable.
            </p>

            <h3 style={h3}>The Data Isolation Problem</h3>
            <p style={body}>
              Perhaps the most consequential structural failure is invisible: there is no cross-institutional intelligence. A bank deciding whether to finance a supplier's invoice has no visibility into how that supplier has performed in financing programs at other institutions. Payment behavior, dispute history, on-time delivery rates, credit utilization patterns - this data exists in the world, distributed across dozens of closed systems.
            </p>
            <p style={body}>
              The result: every institution underwrites every counterparty from scratch, every time. The industry collectively generates enormous behavioral intelligence and collectively destroys it. Research in supply chain finance risk modeling consistently finds that cross-network data improves credit prediction accuracy - but that data is precisely what bilateral networks cannot produce.<Cite n={9} />
            </p>
          </ArticleSection>

          {/* ── III ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>III. The AI Evolution - Three Phases</h2>

            <h3 style={h3}>Phase 1: AI as Analytical Tool (2018–2022)</h3>
            <p style={body}>
              The first wave of AI in trade finance was essentially pattern recognition applied to existing workflows: fraud detection, document classification, AML screening. Useful, but fundamentally assistive - a faster analyst, not a different kind of participant. By 2025, 84% of banks surveyed by the ADB already used AI for fraud prevention and risk analysis.<Cite n={1} /> A necessary foundation. Not a structural solution.
            </p>

            <h3 style={h3}>Phase 2: AI as Co-Pilot (2022–2025)</h3>
            <p style={body}>
              The second wave embedded AI into user interfaces - contextual insights, assisted decision-making, natural-language query over complex financial data. This is the current dominant deployment pattern. The value is real: analysts move faster, underwriters spot anomalies more consistently, compliance teams process documents at scale.
            </p>
            <p style={body}>
              But the co-pilot model has a ceiling. It augments human decision velocity. It does not change the underlying coordination architecture. A bank's co-pilot cannot negotiate with a supplier's co-pilot. They each sit behind their respective institutional walls, making the humans inside them slightly more efficient.
            </p>

            <h3 style={h3}>Phase 3: Agentic AI - The Architectural Shift (2025–Present)</h3>
            <p style={body}>
              The third phase is categorically different. Agentic AI systems do not assist a human through a workflow - they execute workflows autonomously, within defined parameters, with the ability to reason, plan multi-step actions, and adapt to new information mid-execution.<Cite n={10} />
            </p>
            <p style={body}>
              The defining architectural feature is the ReAct (Reason + Act) framework: agents alternate between explicit reasoning steps - written internal deliberation about what to do and why - and action steps - actual tool calls, API calls, negotiations.<Cite n={11} /> This makes agent behavior transparent, auditable, and debuggable in ways that earlier black-box AI systems were not. For regulated financial workflows, this matters enormously.
            </p>
            <p style={body}>
              Multi-agent architectures go further: specialized agents - a risk agent, a pricing agent, a compliance agent, a counterparty intelligence agent - coordinate via a supervisor layer. No single agent handles the full workflow; each contributes its specialization to a shared outcome.<Cite n={12} /> This mirrors how a deal team actually works, except the team operates in milliseconds, not weeks.
            </p>
          </ArticleSection>

          {/* Network diagram */}
          <ArticleSection delay={0.05}>
            <div style={{ margin: '2rem 0 0.75rem' }}>
              <AgenticNetworkDiagram />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-soft)', marginTop: 10, letterSpacing: '0.04em', textAlign: 'center' }}>
                FIG. 1 - Multi-agent architecture: supplier, platform, risk, and funder agents operate in parallel on an open network. Data flows are real-time; human approval gates high-value decisions.
              </p>
            </div>
          </ArticleSection>

          {/* ── IV ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>IV. The Proof Is Already in Procurement</h2>
            <p style={body}>
              The most important evidence for where trade finance is going comes from an adjacent field: autonomous negotiation in procurement. The technical architecture is identical. The counterparties are different.
            </p>
            <p style={body}>
              Walmart deployed autonomous negotiation agents across its supplier base to handle discussions around payment terms and price discounts at scale. The results are not projections - they are documented outcomes. 68% of suppliers reached agreements with the AI agent. Average payment terms extended by 35 days. Four times return on investment. And - the number that should make the industry stop - 75% of suppliers preferred negotiating with the AI over a human.<Cite n={13} /><Cite n={14} /> The program has since expanded to Maersk, Henkel, Rolls-Royce, and Honeywell.
            </p>
          </ArticleSection>

          <ArticleSection delay={0.05}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', margin: '2rem 0 2.5rem' }}>
              <StatCallout number={68} suffix="%" label="Supplier Agreement Rate" description="Walmart suppliers who reached deals directly with the AI negotiation agent." />
              <StatCallout number={35} suffix=" days" label="Payment Extension" description="Average extension in supplier payment terms negotiated autonomously." />
              <StatCallout number={75} suffix="%" label="Preferred AI" description="Suppliers who preferred negotiating with the AI over a human counterpart." />
            </div>
          </ArticleSection>

          <ArticleSection delay={0.05}>
            <p style={body}>
              McKinsey's analysis of agentic AI across procurement found savings of 12–20% on contact-center spend and 20–29% on BPO and financial-services spend.<Cite n={15} /> A chemicals company deploying AI agents for autonomous sourcing achieved a 20–30% increase in procurement staff efficiency. A global technology company reduced RFP preparation time by 75%.<Cite n={16} /> Across the function, McKinsey estimates that agentic AI can make procurement 25–40% more efficient as autonomous systems absorb routine sourcing and human teams concentrate on strategic supplier relationships.<Cite n={17} />
            </p>
            <p style={body}>
              These are not experiments. Walmart is the world's largest retailer. Maersk is the world's largest shipping company. When these organizations trust autonomous agents to negotiate commercial terms with their suppliers, the question for trade finance is not <em>if</em> but <em>when</em> - and <em>on what kind of network</em>.
            </p>
          </ArticleSection>

          {/* ── V ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>V. The Open Network Prerequisite</h2>
            <p style={body}>
              The current trajectory of AI in trade finance follows a predictable institutional pattern: each organization deploys agents inside its own walls. Bank A's agent works faster for Bank A's clients. The bilateral relationship structure is preserved; only the processing speed changes.
            </p>
            <p style={body}>
              This misses the structural opportunity entirely - and reproduces the structural failure.
            </p>
            <p style={body}>
              For agents to actually close the $2.5 trillion gap, they need to operate across institutional boundaries. A supplier in Nairobi needs its agent to surface financing offers from banks in Tokyo, Frankfurt, and New York - not just the one bank its buyer happens to work with. A buyer's agent needs to discover qualified suppliers it has never worked with before, with behavioral risk data attached. A bank's pricing agent needs to compete on terms across a market of transactions, not just originate within its existing relationship network.
            </p>
            <p style={body}>
              This requires an open network: a shared infrastructure layer where agents from different organizations can interact, share verified data, and negotiate commercial terms - without any single institution controlling the flow of information or extracting rent from every interaction.
            </p>

            <div style={pullQuote}>
              "An agent trapped inside a silo is just a faster bureaucrat."
            </div>

            <h3 style={h3}>The Interoperability Moment</h3>
            <p style={body}>
              The industry is building toward this. Anthropic's Model Context Protocol standardizes how AI agents connect to external tools, APIs, and data sources. Google's Agent-to-Agent protocol - backed by more than 50 technology partners including Salesforce, MongoDB, and ServiceNow - defines how independent agents communicate, discover capabilities, and delegate tasks. AGNTCY, a coalition including Cisco, LangChain, and LlamaIndex, is building what its founders describe as the "Internet of Agents."<Cite n={18} /><Cite n={19} /><Cite n={20} />
            </p>
            <p style={body}>
              The architectural lesson from the internet itself applies: open protocols created more value than any closed network ever could have, even for the organizations that initially preferred closed systems.<Cite n={21} /> The same dynamic has played out in banking - SWIFT's universal messaging infrastructure created more value for its member banks than proprietary regional systems could have. The parallel is not incidental.
            </p>

            <h3 style={h3}>The Fragmentation Risk</h3>
            <p style={body}>
              Without universal standards, the industry risks creating a new generation of silos - incompatible agent ecosystems where agents within one vendor's network cannot communicate with agents in another. Closed networks can achieve speed and depth inside their walls. They cannot achieve universal access. And universal access is precisely what the $2.5 trillion gap requires.
            </p>

            <h3 style={h3}>The Data Flywheel</h3>
            <p style={body}>
              There is a compounding data argument. AI models for credit risk, pricing intelligence, and fraud detection improve with more behavioral data. A closed network generates behavioral data from its own transactions only. An open network generates behavioral data across every transaction, every counterparty, every geography on the platform. Research published in Operations Management Research documents that AI affects supply chain finance most significantly in credit risk assessment - and that the quality of that assessment is a direct function of the breadth and depth of the training data.<Cite n={22} /><Cite n={23} /><Cite n={24} />
            </p>
            <p style={body}>
              The compound effect: more participants → more transaction data → more accurate risk models → better pricing → more favorable outcomes for all participants → more participants. This flywheel only activates on an open network. The platform that captures it first has a structurally compounding advantage.
            </p>
          </ArticleSection>

          {/* ── VI ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>VI. The Regulatory Reality</h2>
            <p style={body}>
              Regulators have not prohibited autonomous agents in financial services. They have set conditions. The Bank for International Settlements, in its January 2025 report on AI governance and its June 2025 report on financial stability implications, does not call for a moratorium - it calls for accountability structures, explainability requirements, and human oversight of high-stakes decisions.<Cite n={25} /><Cite n={26} /> BAFT's 2026 Global Annual Meeting explicitly explored where autonomous AI agents can deliver near-term value across payments, trade, liquidity, and client servicing.<Cite n={27} /> Institutional banking's most influential trade association is treating this as a planning question, not a theoretical one.
            </p>
            <p style={body}>
              The practical implication is what engineers call human-in-the-loop design: autonomous agents can conduct research, surface options, prepare term sheets, and execute pre-approved actions - but high-value decisions require human sign-off before execution. This is not a limitation. It is the correct architecture. A hybrid model - agents handle the 80% of workflow that is deterministic and repetitive, humans concentrate on the 20% that requires judgment - aligns with both regulatory expectations and operational reality.<Cite n={28} /><Cite n={5} />
            </p>
            <p style={body}>
              Full audit trails - every agent action logged, timestamped, and attributable - are not just best practice. Given the trajectory of Basel III operational risk reporting (EU banks submit first full SMA templates in Q3 2026), they are becoming standard regulatory expectation.<Cite n={29} /> The supervisor-worker pattern in multi-agent architectures is particularly important here: routing, retries, approvals, and escalation rules remain in one controlled layer. This is not AI replacing compliance - it is AI executing within compliance guardrails at scale.
            </p>
          </ArticleSection>

          {/* ── VII ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>VII. What This Looks Like in Practice</h2>
            <p style={body}>
              The agentic trade finance workflow of the near future is not speculative. Its components exist today, in adjacent industries. Assembly is the work.
            </p>
            <p style={body}>
              A supplier submits an invoice. Its agent - operating within parameters the supplier has set - immediately cross-references the document against purchase order records, flags any discrepancies, confirms delivery status against logistics data, and prepares a financing request. The request is not routed to a single bank. It surfaces across a network of funders whose pricing agents have live visibility into the transaction.
            </p>
            <p style={body}>
              The buyer's agent confirms approval in real time. The bank's risk agent scores the counterparty using behavioral data accumulated across the network - not just the buyer-supplier pair, but the supplier's full transaction history, payment patterns, and program performance across every institution it has worked with. A pricing agent generates a term sheet. A compliance agent checks the transaction against sanctions lists, trade restrictions, and KYB requirements.
            </p>
            <p style={body}>
              The full underwriting package is presented to a human credit officer for approval. Not in eleven days. In hours.
            </p>
            <p style={body}>The macro signals confirm the trajectory:</p>
          </ArticleSection>

          {/* Section VII - 2x2 stat grid */}
          <ArticleSection delay={0.08}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--border)', margin: '0.5rem 0 2.5rem' }}>
              <StatCallout number={86} suffix="%" label="Scaling AI by 2026" description="Organizations planning to scale AI implementations this year. (Prolifics / KPMG)" />
              <StatCallout number={40} suffix="%" label="Apps Embedding Agents" description="Enterprise applications embedding AI agents directly into operational workflows by 2026." />
              <StatCallout number={75} suffix="%" label="Procurement Transformed" description="Procurement activities PwC estimates will be transformed by agentic AI." />
              <StatCallout number={80} suffix="%" label="Banks Expect Rising Demand" description="Banks polled by ADB expecting trade finance demand to increase as supply chains reconfigure." />
            </div>
          </ArticleSection>

          <ArticleSection delay={0.05}>
            <p style={body}>
              The demand is rising. The technology is ready. The question is which network it runs on.
            </p>
          </ArticleSection>

          {/* ── Conclusion ── */}
          <ArticleSection delay={0.05}>
            <h2 style={h2}>Conclusion</h2>
            <p style={body}>
              The $2.5 trillion trade finance gap has persisted not because the capital does not exist, and not because the underlying trades are too risky. It persists because the infrastructure that should move capital to where it is needed was built for a world of bilateral relationships and manual verification - and has never been rebuilt for anything else.
            </p>
            <p style={body}>
              Agentic AI is the first technology that can actually change the coordination architecture of global trade. But only if the network it operates on is open. Deployed inside closed systems, agents replicate the bilateral relationship trap at higher speed. Deployed on open networks, they can do something that has never been possible before: underwrite every counterparty at every ticket size, in every geography, with behavioral data that compounds across every transaction on the platform.
            </p>
            <p style={body}>
              A small number of platforms are being built from the ground up as open networks - not adapted from bilateral systems - and are therefore structurally positioned to activate the full potential of agentic AI in trade finance. The platforms being built that way now are the ones that will define the next decade of global trade.
            </p>
            <p style={body}>
              The infrastructure for the agentic era is being built now. The architecture decisions being made today will determine who has access to capital in the global supply chains of 2030.
            </p>
          </ArticleSection>

          {/* ── Download CTA ── */}
          <ArticleSection delay={0.05}>
            <div style={{ background: 'var(--ink)', padding: 'clamp(28px, 4vw, 44px)', margin: '3rem 0' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.1em', marginBottom: 14 }}>STRIKE SCF · RED PAPER NO. 1</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)', fontWeight: 700, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.2, maxWidth: '28ch', marginBottom: 12 }}>
                Download the full Red Paper as a PDF.
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#9AA0AB', fontWeight: 300, maxWidth: '44ch', lineHeight: 1.6, marginBottom: 20 }}>
                The formatted PDF edition includes the full bibliography, figures, and data appendix. Suitable for internal distribution and research citation.
              </p>
              <a href="#"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', padding: '13px 28px', textDecoration: 'none', borderRadius: 2, transition: 'background 0.15s ease' }}
                onMouseOver={e => e.currentTarget.style.background = 'var(--blue-hover)'}
                onMouseOut={e => e.currentTarget.style.background = 'var(--blue)'}
              >
                ↓ DOWNLOAD RED PAPER (PDF)
              </a>
            </div>
          </ArticleSection>

          {/* ── Bibliography (collapsible) ── */}
          <ArticleSection delay={0.05}>
            <div style={{ borderTop: '2px solid var(--border)', paddingTop: '1.75rem', marginTop: '3rem' }}>
              <button
                onClick={() => setBibOpen(o => !o)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', padding: '0 0 1rem', cursor: 'pointer', gap: 12 }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink)', letterSpacing: '0.08em' }}>BIBLIOGRAPHY</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-soft)', letterSpacing: '0.06em' }}>33 sources</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--blue)', display: 'inline-block', transform: bibOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', lineHeight: 1 }}>↓</span>
                </div>
              </button>

              <div style={{ overflow: 'hidden', maxHeight: bibOpen ? '9999px' : 0, transition: bibOpen ? 'max-height 0.5s ease' : 'max-height 0.3s ease' }}>
                <ol style={{ listStyle: 'none', padding: '0.25rem 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {refs.map(ref => (
                    <li key={ref.n} id={'ref-' + ref.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', minWidth: 22, paddingTop: 2, flexShrink: 0 }}>[{ref.n}]</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray)', lineHeight: 1.6, fontWeight: 300 }}>
                        {ref.text}
                        {ref.url && <> <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', textDecoration: 'none', fontSize: 11, fontFamily: 'var(--font-mono)' }}>↗</a></>}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ArticleSection>

        </div>
      </div>

      {/* ── Back to RedBook ── */}
      <div style={{ background: 'var(--offwhite)', borderTop: '1px solid var(--border)', padding: `32px ${CONTENT_PAD}` }}>
        <div style={{ maxWidth: CONTENT_MAX, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--gray-soft)', letterSpacing: '0.06em', marginBottom: 5 }}>PART OF THE SERIES</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>Strike SCF Red Paper Series</div>
          </div>
          <a href="/redbook" onClick={(e) => navTo(e, '/redbook')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue)', letterSpacing: '0.06em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            ← ALL RED PAPERS
          </a>
        </div>
      </div>

    </div>
  );
}

Object.assign(window, { RedPaperCopilotPage });

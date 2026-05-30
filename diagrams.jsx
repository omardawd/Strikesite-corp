/* Diagrams: Transaction Flow, Architecture, Strike AI terminal */

function TransactionFlow() {
  const steps = [
    { n: '01', label: 'Invoice Submitted',    desc: 'Supplier uploads invoice via ERP webhook or supplier portal.',          side: 'SUPPLIER', ai: 'AI validates document, extracts structured data, runs first fraud check' },
    { n: '02', label: 'Anchor Approval',      desc: 'Anchor confirms goods receipt and approves the invoice amount.',        side: 'ANCHOR',   ai: 'AI scores invoice against program rules, flags anomalies, recommends approve/reject' },
    { n: '03', label: 'Bank Review',          desc: 'Funding bank checks program limits, exposure, and counterparty rating.', side: 'BANK',     ai: 'AI generates risk analysis, scores counterparty, suggests rate based on portfolio data' },
    { n: '04', label: 'Offer Accepted',       desc: 'Supplier reviews the posted discount rate and accepts the financing offer.', side: 'SUPPLIER', ai: 'AI monitors negotiation state, notifies all parties, updates transaction record in real time' },
    { n: '05', label: 'Disbursement',         desc: 'Net amount remitted to supplier nominated account in source currency.',  side: 'BANK',     ai: 'AI confirms wire details, triggers disbursement notification, logs audit event' },
    { n: '06', label: 'Repayment',            desc: 'Anchor settles on invoice maturity date via ACH or RTGS.',              side: 'ANCHOR',   ai: 'AI tracks repayment schedule, sends reminders, updates supplier PassportScore™' },
  ];

  const sideColor = { SUPPLIER: 'white', ANCHOR: 'white', BANK: 'ink' };

  return (
    <div className="flow">

      {/* Scoped styles for the AI-elevated transaction flow */}
      <style>{`
        @keyframes ai-pulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.8; }
        }
        .tflow-actor { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); letter-spacing: 0.12em; text-transform: uppercase; }
        .flow-box.ink .tflow-actor { color: var(--gray-soft); }
        .tflow-label { font-family: var(--font-display); font-size: 14px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.15; }
        .tflow-box-wrap { position: relative; }
        .tflow-tip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          margin-bottom: 8px;
          background: var(--ink);
          color: #fff;
          font-family: var(--font-body);
          font-size: 12px;
          padding: 10px 14px;
          max-width: 220px;
          width: max-content;
          line-height: 1.5;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.16s ease, transform 0.16s ease;
        }
        .tflow-box-wrap:hover .tflow-tip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>

      {/* Scrollable area */}
      <div style={{ minWidth: 1060 }}>

        {/* Strike SCF AI banner — spans all 6 steps */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          minHeight: 44,
          padding: '10px 18px',
          border: '1px solid rgba(20, 40, 204, 0.25)',
          borderBottom: 'none',
          background: 'linear-gradient(90deg, rgba(20,40,204,0.12) 0%, rgba(20,40,204,0.06) 100%)',
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: 'var(--blue)', flexShrink: 0,
            boxShadow: '0 0 0 3px rgba(20,40,204,0.18)',
            animation: 'badge-pulse 2.4s ease infinite',
          }} />
          <span className="mono" style={{ color: 'var(--blue)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            STRIKE SCF AI · ACTIVE
          </span>
          <span style={{ flex: 1 }} />
          <span className="mono" style={{ color: 'var(--gray-soft)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Risk Scoring · Anomaly Detection · Pricing Guidance · Active Across All Stages
          </span>
        </div>

        {/* Connector drops from AI bar down to each step box */}
        <div style={{
          height: 22,
          borderLeft: '1px solid rgba(20,40,204,0.25)',
          borderRight: '1px solid rgba(20,40,204,0.25)',
        }}>
          <svg width="100%" height="22" preserveAspectRatio="none" viewBox="0 0 600 22" style={{ display: 'block' }}>
            {steps.map((_, i) => {
              const x = (i + 0.5) * (600 / steps.length);
              return (
                <line key={i} x1={x} y1="0" x2={x} y2="22"
                      stroke="rgba(20,40,204,0.4)" strokeWidth="1.5"
                      style={{ animation: 'ai-pulse 2.4s ease infinite', animationDelay: `${i * 400}ms` }} />
              );
            })}
          </svg>
        </div>

        {/* Flow steps */}
        <div className="flow-track" style={{ gridTemplateColumns: 'repeat(6, 1fr)', minWidth: 'auto' }}>
          {steps.map((s, i) => (
            <div className="flow-step" key={i}>
              <div className="step-num">STEP {s.n}</div>
              <div className="tflow-box-wrap">
                <div className="tflow-tip">{s.ai}</div>
                <div className={'flow-box ' + (sideColor[s.side] === 'ink' ? 'ink' : '')}
                     style={{ borderTop: '2px solid rgba(20,40,204,0.4)' }}>
                  <div className="tflow-actor">{s.side}</div>
                  <div className="tflow-label">{s.label}</div>
                </div>
              </div>
              <div className="desc">{s.desc}</div>
              <div className="flow-arrow"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function PlatformArchitecture() {
  return (
    <div className="arch">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36, paddingBottom: 18, borderBottom: '1px solid var(--border)' }}>
        <span className="eyebrow">Platform Architecture — Strike SCF Core</span>
        <span className="mono" style={{ color: 'var(--gray)' }}>SERVICE TOPOLOGY · MULTI-TENANT</span>
      </div>

      {/* AI layer */}
      <div className="arch-ai">
        <div className="l">Intelligence Layer</div>
        <div className="t">Strike AI</div>
      </div>

      {/* Connector down */}
      <div style={{ height: 28, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 1, background: 'var(--blue)' }}></div>
      </div>

      {/* Engine */}
      <div className="arch-engine">
        <div className="l">Core Infrastructure</div>
        <div className="t">Strike SCF Engine</div>
        <div className="s">Limits · Pricing · Disbursement · Reconciliation · Reporting</div>
      </div>

      {/* Three connectors splayed */}
      <div style={{ position: 'relative', height: 60, maxWidth: 880, margin: '0 auto', width: '100%' }}>
        <svg width="100%" height="60" viewBox="0 0 880 60" preserveAspectRatio="none" style={{ display: 'block' }}>
          <line x1="440" y1="0" x2="146" y2="60" stroke="#111318" strokeWidth="1" />
          <line x1="440" y1="0" x2="440" y2="60" stroke="#111318" strokeWidth="1" />
          <line x1="440" y1="0" x2="734" y2="60" stroke="#111318" strokeWidth="1" />
        </svg>
      </div>

      {/* Participants */}
      <div className="arch-participants">
        <div className="arch-part">
          <div className="l">Counterparty A</div>
          <div className="t">Bank</div>
          <div className="d">Funding · Risk · Compliance</div>
        </div>
        <div className="arch-part">
          <div className="l">Counterparty B</div>
          <div className="t">Anchor</div>
          <div className="d">Approvals · Payables Cycle</div>
        </div>
        <div className="arch-part">
          <div className="l">Counterparty C</div>
          <div className="t">Supplier</div>
          <div className="d">Invoicing · Early Payment</div>
        </div>
      </div>

      {/* Bottom rail */}
      <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {[
          { k: 'IDENTITY', v: 'OIDC · mTLS' },
          { k: 'PAYMENTS RAIL', v: 'ACH · FEDWIRE' },
          { k: 'CORE ERP', v: 'SAP · Oracle · NetSuite' },
          { k: 'DATA EXCHANGE', v: 'REST · GraphQL · SFTP' },
        ].map((x, i) => (
          <div key={i}>
            <div className="mono" style={{ color: 'var(--gray)' }}>{x.k}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, marginTop: 8, letterSpacing: '-0.005em' }}>{x.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrikeAITerminal() {
  const rows = [
    { k: 'INV ID',    v: 'INV-20260513-44218',   dim: false, tag: '—',               amt: '$ 482,000.00' },
    { k: 'ANCHOR',   v: 'Aurelia Holdings PLC',   dim: false, tag: 'AAA · INV-GR.',   amt: '—' },
    { k: 'SUPPLIER', v: 'Pacific Oxide Group',    dim: false, tag: 'BBB+ · 18 MO.',   amt: '—' },
    { k: 'TENOR',    v: '92 days',                dim: false, tag: 'NET 90 + 2',       amt: '—' },
    { k: 'INDEX',    v: 'SOFR + 142 bps',         dim: false, tag: 'PRICING MODEL P-4', amt: '$ 16,840.21' },
    { k: 'EXPOSURE', v: '$ 14.8M / 60M limit',   dim: false, tag: '24.7% UTIL.',      amt: '—' },
  ];
  return (
    <div className="ai-panel">
      <div className="ai-topbar">
        <div className="dots"><span></span><span></span><span></span></div>
        <div>STRIKE AI · CO-PILOT · SESSION 4A8C-91FB</div>
        <div>14:22:08 SGT</div>
      </div>
      <div className="ai-body">
        <div className="ai-section-title">FINANCING REQUEST · UNDER REVIEW</div>
        <div className="ai-headline">Pacific Oxide Group — early payment request, 482,000.00 USD</div>

        <div className="ai-meta">
          <div><div className="k">Risk Score</div><div className="v">A− / 0.18</div></div>
          <div><div className="k">Recommended Action</div><div className="v blue">APPROVE — STD. TIER</div></div>
          <div><div className="k">Confidence</div><div className="v">94.2%</div></div>
          <div><div className="k">Model</div><div className="v">scf-risk-v6.4</div></div>
        </div>

        <div className="ai-rows">
          {rows.map((r, i) => (
            <div className="ai-row" key={i}>
              <div className="k">{r.k}</div>
              <div className="v">{r.v}</div>
              <div className="v dim col-hide">{r.tag}</div>
              <div className="v">{r.amt}</div>
            </div>
          ))}
        </div>

        <div className="ai-flag">
          <div className="tag">FLAG · 01</div>
          <div className="msg">Invoice 44218 references PO 88102 — last 6 invoices on this PO settled D-2 to D-5 from due date. No pattern break detected.</div>
          <div className="meta">SEVERITY · LOW</div>
        </div>

        <div className="ai-input">
          <span className="prompt">{'>'}</span>
          <span className="typed">show concentration risk on aurelia holdings across last 12 months</span>
          <span className="caret"></span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Program flow diagrams (sequence-style, animated draw-in) ---------- */

const FLOW_LANES = [80, 260, 440];      // left · center · right node centers
const FLOW_W = 520;                     // viewBox width
const FLOW_NODE_W = 120;
const FLOW_NODE_H = 52;
const FLOW_NODE_Y = 24;
const FLOW_LIFELINE_TOP = FLOW_NODE_Y + FLOW_NODE_H;  // 76
const FLOW_START = 124;                 // y of first arrow
const FLOW_GAP = 46;                    // vertical spacing between arrows

const FLOW_NODE_STYLE = {
  bank:     { fill: '#111318', stroke: '#111318', text: '#FFFFFF', sw: 1 },
  anchor:   { fill: '#F7F8FA', stroke: '#D1D5DB', text: '#111318', sw: 1 },
  supplier: { fill: '#FFFFFF', stroke: '#E5E7EB', text: '#111318', sw: 1 },
  platform: { fill: '#FFFFFF', stroke: '#1428CC', text: '#1428CC', sw: 1.5 },
};

function FlowNode({ cx, kind, label }) {
  const s = FLOW_NODE_STYLE[kind] || FLOW_NODE_STYLE.supplier;
  const x = cx - FLOW_NODE_W / 2;
  return (
    <g>
      <rect x={x} y={FLOW_NODE_Y} width={FLOW_NODE_W} height={FLOW_NODE_H}
            fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} />
      <text x={cx} y={FLOW_NODE_Y + FLOW_NODE_H / 2 + 4} textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace" fontSize="12" fontWeight="600"
            letterSpacing="1.5" fill={s.text}>{label}</text>
    </g>
  );
}

function FlowArrow({ x1, x2, y, type, delay, drawn, prefix }) {
  const isMoney = type === 'money';
  const color = isMoney ? '#1428CC' : '#6B7280';
  const width = isMoney ? 1.5 : 1;
  const len = Math.abs(x2 - x1);
  const [dashed, setDashed] = React.useState(false);

  React.useEffect(() => {
    if (drawn && !isMoney) {
      const t = setTimeout(() => setDashed(true), delay + 620);
      return () => clearTimeout(t);
    }
  }, [drawn]);

  const dashArray = dashed ? '4 3' : `${len} ${len}`;
  const dashOffset = drawn ? 0 : len;

  return (
    <g>
      <path d={`M${x1},${y} L${x2},${y}`} fill="none"
            stroke={color} strokeWidth={width}
            markerEnd={`url(#${prefix}-mk-${isMoney ? 'blue' : 'gray'})`}
            strokeDasharray={dashArray} strokeDashoffset={dashOffset}
            style={{ transition: `stroke-dashoffset 0.6s ease ${delay}ms`, opacity: drawn ? 1 : 0 }} />
    </g>
  );
}

function ProgramFlowDiagram({ title, actors, flows, caption, prefix }) {
  const [drawn, setDrawn] = React.useState(false);
  React.useEffect(() => {
    let raf2;
    const raf1 = requestAnimationFrame(() => { raf2 = requestAnimationFrame(() => setDrawn(true)); });
    return () => { cancelAnimationFrame(raf1); if (raf2) cancelAnimationFrame(raf2); };
  }, []);

  const idx = {};
  actors.forEach((a, i) => { idx[a.key] = i; });

  const lastY = FLOW_START + (flows.length - 1) * FLOW_GAP;
  const H = lastY + 44;
  const lifelineBottom = lastY + 14;

  return (
    <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '40px 32px' }}>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#6B7280',
                    letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 22 }}>
        {title}
      </div>

      <svg viewBox={`0 0 ${FLOW_W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <marker id={`${prefix}-mk-blue`} markerWidth="7" markerHeight="7" refX="6" refY="3"
                  orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1428CC" />
          </marker>
          <marker id={`${prefix}-mk-gray`} markerWidth="6.5" markerHeight="6.5" refX="5.5" refY="2.75"
                  orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L5.5,2.75 L0,5.5 Z" fill="#6B7280" />
          </marker>
        </defs>

        {/* Lifelines */}
        {actors.map((a, i) => (
          <line key={`ll-${i}`} x1={FLOW_LANES[i]} y1={FLOW_LIFELINE_TOP} x2={FLOW_LANES[i]} y2={lifelineBottom}
                stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 4" />
        ))}

        {/* Actor nodes */}
        {actors.map((a, i) => (
          <FlowNode key={`n-${i}`} cx={FLOW_LANES[i]} kind={a.kind} label={a.label} />
        ))}

        {/* Flow arrows + labels */}
        {flows.map((f, i) => {
          const x1 = FLOW_LANES[idx[f.from]];
          const x2 = FLOW_LANES[idx[f.to]];
          const y = FLOW_START + i * FLOW_GAP;
          const delay = i * 400;
          const color = f.type === 'money' ? '#1428CC' : '#6B7280';
          return (
            <g key={`f-${i}`}>
              <text x={(x1 + x2) / 2} y={y - 7} textAnchor="middle"
                    fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1" fill={color}
                    style={{ opacity: drawn ? 1 : 0, transition: `opacity 0.4s ease ${delay + 200}ms` }}>
                {f.label}
              </text>
              <FlowArrow x1={x1} x2={x2} y={y} type={f.type} delay={delay} drawn={drawn} prefix={prefix} />
            </g>
          );
        })}
      </svg>

      <div className="mono" style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.6, marginTop: 22, letterSpacing: '0.02em' }}>
        {caption}
      </div>
    </div>
  );
}

function ReverseFactoringDiagram() {
  return (
    <ProgramFlowDiagram
      prefix="rf"
      title="Reverse Factoring · Process Flow"
      actors={[
        { key: 'supplier', kind: 'supplier', label: 'SUPPLIER' },
        { key: 'anchor',   kind: 'anchor',   label: 'ANCHOR'   },
        { key: 'bank',     kind: 'bank',     label: 'BANK'     },
      ]}
      flows={[
        { from: 'supplier', to: 'anchor', type: 'doc',   label: 'INVOICE SUBMITTED' },
        { from: 'anchor',   to: 'bank',   type: 'doc',   label: 'APPROVED PAYABLE' },
        { from: 'bank',     to: 'supplier', type: 'money', label: 'EARLY PAYMENT' },
        { from: 'anchor',   to: 'bank',   type: 'money', label: 'REPAYMENT AT MATURITY' },
      ]}
      caption="Anchor credit funds the supplier base. Bank takes the risk."
    />
  );
}

function InvoiceFactoringDiagram() {
  return (
    <ProgramFlowDiagram
      prefix="if"
      title="Invoice Factoring · Process Flow"
      actors={[
        { key: 'supplier', kind: 'supplier', label: 'SUPPLIER' },
        { key: 'bank',     kind: 'bank',     label: 'BANK'     },
        { key: 'anchor',   kind: 'anchor',   label: 'ANCHOR'   },
      ]}
      flows={[
        { from: 'supplier', to: 'bank',     type: 'doc',   label: 'INVOICE SOLD' },
        { from: 'bank',     to: 'supplier', type: 'money', label: 'IMMEDIATE PAYMENT' },
        { from: 'anchor',   to: 'bank',     type: 'money', label: 'PAYS AT MATURITY' },
      ]}
      caption="Supplier gets paid immediately. No anchor approval required."
    />
  );
}

function POFinancingDiagram() {
  return (
    <ProgramFlowDiagram
      prefix="po"
      title="PO Financing · Process Flow"
      actors={[
        { key: 'supplier', kind: 'supplier', label: 'SUPPLIER' },
        { key: 'bank',     kind: 'bank',     label: 'BANK'     },
        { key: 'anchor',   kind: 'anchor',   label: 'ANCHOR'   },
      ]}
      flows={[
        { from: 'anchor',   to: 'supplier', type: 'doc',   label: 'PURCHASE ORDER' },
        { from: 'supplier', to: 'bank',     type: 'doc',   label: 'PO FINANCING REQUEST' },
        { from: 'bank',     to: 'supplier', type: 'money', label: 'PRE-SHIPMENT FUNDS' },
        { from: 'supplier', to: 'anchor',   type: 'doc',   label: 'GOODS DELIVERED' },
        { from: 'anchor',   to: 'bank',     type: 'money', label: 'INVOICE REPAYMENT' },
      ]}
      caption="Finance production before the invoice exists."
    />
  );
}

function DiscountingFlowDiagram() {
  return (
    <ProgramFlowDiagram
      prefix="dd"
      title="Dynamic Discounting · Process Flow"
      actors={[
        { key: 'supplier', kind: 'supplier', label: 'SUPPLIER'   },
        { key: 'platform', kind: 'platform', label: 'STRIKE SCF' },
        { key: 'anchor',   kind: 'anchor',   label: 'ANCHOR'     },
      ]}
      flows={[
        { from: 'supplier', to: 'platform', type: 'doc',   label: 'EARLY PAYMENT REQUEST' },
        { from: 'anchor',   to: 'platform', type: 'doc',   label: 'DISCOUNT RATE SET' },
        { from: 'anchor',   to: 'supplier', type: 'money', label: 'EARLY PAYMENT (OWN CASH)' },
        { from: 'platform', to: 'anchor',   type: 'doc',   label: 'DISCOUNT EARNED' },
      ]}
      caption="No bank required. Anchor deploys cash, earns the discount."
    />
  );
}

Object.assign(window, {
  TransactionFlow, PlatformArchitecture, StrikeAITerminal,
  ReverseFactoringDiagram, InvoiceFactoringDiagram, POFinancingDiagram, DiscountingFlowDiagram,
});

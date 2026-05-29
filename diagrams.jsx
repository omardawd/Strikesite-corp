/* Diagrams: Transaction Flow, Architecture, Strike AI terminal */

function TransactionFlow() {
  const steps = [
    { n: '01', label: 'Invoice Submitted',    desc: 'Supplier uploads invoice via ERP webhook or supplier portal.',          side: 'SUPPLIER' },
    { n: '02', label: 'Anchor Approval',      desc: 'Anchor confirms goods receipt and approves the invoice amount.',        side: 'ANCHOR'   },
    { n: '03', label: 'Bank Review',          desc: 'Funding bank checks program limits, exposure, and counterparty rating.', side: 'BANK'    },
    { n: '04', label: 'Offer Accepted',       desc: 'Supplier reviews the posted discount rate and accepts the financing offer.', side: 'SUPPLIER' },
    { n: '05', label: 'Disbursement',         desc: 'Net amount remitted to supplier nominated account in source currency.',  side: 'BANK'     },
    { n: '06', label: 'Repayment',            desc: 'Anchor settles on invoice maturity date via ACH or RTGS.',              side: 'ANCHOR'   },
  ];

  const sideColor = { SUPPLIER: 'white', ANCHOR: 'white', BANK: 'ink' };

  return (
    <div className="flow">

      {/* Scrollable area */}
      <div style={{ minWidth: 1060 }}>

        {/* Strike AI banner — spans all 6 steps */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '10px 18px',
          border: '1px solid rgba(0, 82, 255, 0.28)',
          borderBottom: 'none',
          background: 'rgba(0, 82, 255, 0.03)',
        }}>
          <span style={{
            display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
            background: 'var(--blue)', flexShrink: 0,
            boxShadow: '0 0 0 3px rgba(0,82,255,0.18)',
            animation: 'badge-pulse 2.4s ease infinite',
          }} />
          <span className="eyebrow" style={{ color: 'var(--blue)', letterSpacing: '0.16em' }}>
            STRIKE AI · INTELLIGENCE LAYER
          </span>
          <span style={{ flex: 1 }} />
          <span className="mono" style={{ color: 'var(--gray-soft)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Risk Scoring · Anomaly Detection · Pricing Guidance · Active Across All Stages
          </span>
        </div>

        {/* Connector drops from AI bar down to each step box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          height: 18,
          borderLeft: '1px solid rgba(0,82,255,0.28)',
          borderRight: '1px solid rgba(0,82,255,0.28)',
        }}>
          {steps.map((_, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 1, height: '100%', background: 'rgba(0,82,255,0.22)' }} />
            </div>
          ))}
        </div>

        {/* Flow steps */}
        <div className="flow-track" style={{ gridTemplateColumns: 'repeat(6, 1fr)', minWidth: 'auto' }}>
          {steps.map((s, i) => (
            <div className="flow-step" key={i}>
              <div className="step-num">STEP {s.n}</div>
              <div className={'flow-box ' + (sideColor[s.side] === 'ink' ? 'ink' : '')}
                   style={{ borderTop: '2px solid rgba(0,82,255,0.35)' }}>
                <div className="meta">{s.side}</div>
                <div className="label">{s.label}</div>
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

Object.assign(window, { TransactionFlow, PlatformArchitecture, StrikeAITerminal });

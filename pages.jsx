/* Pages: Home, Solutions, Banks, Anchors, Platform, Contact */

function HomePage() {
  return (
    <div className="page" data-screen-label="Home">
      {/* HERO */}
      <section className="hero" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <TypewriterHero>
            <p className="hero-sub">
              Strike connects supplier risk, operational signals, and financing options so companies protect margin, continuity, and growth before disruption becomes failure. Built for CFOs, supply chain leaders, procurement teams, and the funders who support them.
            </p>
            <div className="hero-cta-row">
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
              <a href="/solutions" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/solutions')}>See the Platform</a>
            </div>
          </TypewriterHero>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '18px 0', background: 'var(--white)' }}>
        {(() => {
          const items = [
            'Same-Day Disbursement',
            'Real-Time Risk Scoring',
            'Invoice to Funded in Hours',
            'AI Co-Pilot on Every Decision',
            'Reverse Factoring',
            'Invoice Factoring',
            'PO Financing',
            'Dynamic Discounting',
            'Bank · Anchor · Supplier',
            'KYB in Minutes',
            'Full Audit Trail',
            'Multi-Program Architecture',
            'Three Portals. One Platform.',
            'Supplier Passport',
            'Live Risk Signals',
          ];
          const renderItems = (pfx) => items.map((item, i) => (
            <React.Fragment key={pfx + i}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', padding: '0 32px' }}>{item}</span>
              <span style={{ color: 'var(--blue)' }}>·</span>
            </React.Fragment>
          ));
          return <div className="marquee-track">{renderItems('a')}{renderItems('b')}</div>;
        })()}
      </section>

      {/* GAP + MAP DECIDE FUND — COMBINED */}
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start', gap: 80 }}>

            {/* LEFT — narrative + horizontal stats */}
            <div>
              <h2 className="display-lg" style={{ maxWidth: '16ch' }}>The $2.5 trillion gap that traditional finance cannot close.</h2>
              <p style={{ marginTop: 24, maxWidth: '52ch', fontSize: 16, lineHeight: 1.7, color: 'var(--gray)', fontWeight: 300 }}>Every year, $2.5 trillion in trade finance goes unfunded. Suppliers wait months to be paid. Buyers lose good suppliers. Banks see the demand but cannot act fast enough. Strike SCF is the layer that connects all three.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', marginTop: 44 }}>
                {[
                  { v: '$2.5T', c: 'var(--ink)', sub: 'Annual trade finance gap per IFC and ICC.' },
                  { v: '90 Days', c: 'var(--blue)', sub: 'Structured pilot from onboarding to first disbursement.' },
                  { v: '72 Hours', c: 'var(--ink)', sub: 'Median time from invoice to supplier payment credited.' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'var(--white)', padding: '28px 20px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-0.03em', color: s.c, lineHeight: 1.05 }}>{s.v}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 10, lineHeight: 1.6 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Map / Decide / Fund with scroll-in + arrow connectors */}
            <div>
              {[
                { n: '01', t: 'Map', d: 'Build a live graph of your supplier network including risk exposure, financing eligibility, country concentration, and performance history.' },
                { n: '02', t: 'Decide', d: 'Surface which suppliers are fragile, which invoices need early payment, and which financing route protects your margin and continuity.' },
                { n: '03', t: 'Fund', d: 'Route the right invoice or purchase order to the right capital source. Bank credit, private credit, buyer cash, or development finance.' },
              ].map((c, i) => (
                <React.Fragment key={i}>
                  <FadeIn delay={i * 130}>
                    <div style={{ paddingTop: 28, paddingBottom: 28, borderTop: '1px solid var(--border)', display: 'flex', gap: 24, alignItems: 'start' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, color: 'rgba(0,0,0,0.06)', lineHeight: 1, minWidth: 60, flexShrink: 0 }}>{c.n}</div>
                      <div>
                        <h3 className="display-sm">{c.t}</h3>
                        <p className="body body-gray" style={{ marginTop: 8, maxWidth: '38ch' }}>{c.d}</p>
                      </div>
                    </div>
                  </FadeIn>
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FINANCING PROGRAMS */}
      <section className="section off">
        <div className="container">
          <SectionHead title="Four financing structures. One intelligent platform." />
          <div className="row-4" style={{ background: 'var(--border)' }}>
            {[
              {
                name: 'Reverse Factoring',
                tag: 'ANCHOR-INITIATED',
                desc: 'Use your credit rating to unlock early payment for your entire supplier base. Suppliers get paid in hours. You repay the bank at invoice maturity.',
                stat: 'Most widely deployed SCF structure globally',
                path: '/programs/reverse-factoring',
                initiator: 'Bank + Anchor',
              },
              {
                name: 'Invoice Factoring',
                tag: 'SUPPLIER-INITIATED',
                desc: 'Suppliers sell approved receivables directly to the bank for immediate working capital. No anchor approval required at submission.',
                stat: 'Capital available before invoice due date',
                path: '/programs/invoice-factoring',
                initiator: 'Supplier',
              },
              {
                name: 'PO Financing',
                tag: 'PRE-SHIPMENT',
                desc: 'Finance production before goods are delivered. The bank funds the purchase order at commitment — protecting supplier cash flow at the source.',
                stat: 'Finance the order before the invoice exists',
                path: '/programs/po-financing',
                initiator: 'Supplier + Bank',
              },
              {
                name: 'Dynamic Discounting',
                tag: 'ANCHOR-FUNDED',
                desc: 'Deploy your own cash to pay suppliers early and capture the early payment discount as income. No bank required.',
                stat: 'Earn yield on your own working capital',
                path: '/programs/dynamic-discounting',
                initiator: 'Anchor',
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--white)',
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={e => navTo(e, p.path)}
              >
                <div className="mono" style={{ color: 'var(--blue)', marginBottom: 10, fontSize: 10 }}>{p.tag}</div>
                <div className="display-sm" style={{ marginBottom: 12 }}>{p.name}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', lineHeight: 1.65, fontWeight: 300, flex: 1, marginBottom: 20 }}>{p.desc}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, marginTop: 'auto' }}>
                  <div className="mono" style={{ color: 'var(--gray)', fontSize: 10, marginBottom: 4 }}>INITIATOR</div>
                  <div className="mono" style={{ color: 'var(--ink)', fontSize: 11 }}>{p.initiator}</div>
                </div>
                <a
                  href={p.path}
                  onClick={e => navTo(e, p.path)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDBOOK */}
      <section className="section dark">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center', gap: 80 }}>
            <div>
              <h2 className="display-md" style={{ color: '#fff', maxWidth: '22ch', marginBottom: 20 }}>
                Defining the next generation of supply chain finance.
              </h2>
              <p className="lead" style={{ color: '#9AA0AB', maxWidth: '48ch', marginBottom: 32, fontWeight: 300 }}>
                The Strike SCF RedBook is a strategic intelligence publication for CFOs, treasurers, and heads of trade finance. It defines what the decisioning and liquidity orchestration layer for global supply chains must become.
              </p>
              <a href="/redbook" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/redbook')}>
                Learn About the RedBook
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.14)' }}>
              {[
                { label: 'AUDIENCE', value: 'CFOs · Treasurers · Trade Finance Heads · Banks' },
                { label: 'FOCUS', value: 'Decisioning · Liquidity Routing · Supply Chain Risk' },
                { label: 'FORMAT', value: 'Quarterly intelligence · Market signals · Advisory input' },
                { label: 'STATUS', value: 'Founding issue in production — join the advisory circle' },
              ].map((row, i) => (
                <div key={i} style={{ padding: '22px 28px', background: '#14181F', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div className="mono" style={{ color: 'var(--blue)', fontSize: 12, letterSpacing: '0.14em' }}>{row.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#EDEFF2', fontSize: 16, fontWeight: 400, lineHeight: 1.4 }}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSACTION FLOW */}
      <section className="section off">
        <div className="container">
          <SectionHead title="AI that moves every invoice from approval to disbursement." />
          <TransactionFlow />
        </div>
      </section>

      {/* WHO IT SERVES */}
      <section className="section off">
        <div className="container">
          <SectionHead title="Built for the three counterparties of every trade finance transaction." />
          <div className="row-3" style={{ background: 'var(--border)' }}>
            {[
              {
                t: 'Banks',
                stat: 'First disbursement in 72 hours',
                d: 'Originate and underwrite SCF programs against existing anchor relationships. Manage limits, pricing, and exposure inside a single risk surface.',
                cta: 'For Banks', path: '/banks'
              },
              {
                t: 'Anchor Corporates',
                stat: 'Extend DSO without balance sheet impact',
                d: 'Extend working capital to your supplier base without expanding the balance sheet. Approve invoices, review program rules, monitor utilisation.',
                cta: 'For Anchors', path: '/anchors'
              },
              {
                t: 'Suppliers',
                stat: 'Early payment from invoice approval',
                d: 'Receive funds against approved invoices within hours. No paperwork, no separate credit application, transparent pricing per invoice.',
                cta: 'For Suppliers', path: '/suppliers'
              },
            ].map((c, i) => (
              <div key={i} className="counterparty-card">
                <h3 className="display-md" style={{ fontSize: 40 }}>{c.t}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.stat}</div>
                <p className="body body-gray" style={{ fontSize: 15, maxWidth: '36ch' }}>{c.d}</p>
                <a href={c.path} className="btn btn-ghost btn-sm btn-arrow" style={{ marginTop: 'auto', alignSelf: 'flex-start' }} onClick={(e) => navTo(e, c.path)}>
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRIKE AI — DARK */}
      {/* <section className="section dark">
        <div className="container">
          <div className="section-head" style={{ borderColor: '#222730' }}>
            <div className="side"></div>
            <h2 className="display-md" style={{ color: 'var(--white)', maxWidth: '22ch' }}>
              A co-pilot for the trade finance desk. Not a chatbot.
            </h2>
          </div>

          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '46ch' }}>
                Strike AI sits between origination and approval. It scores risk on every incoming financing request, surfaces anomalies against historical patterns, and recommends pricing — leaving the decision with your credit officers.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#222730' }}>
                {[
                  { k: 'RISK SCORING', v: 'Per invoice and counterparty — returned in under one second.' },
                  { k: 'CONCENTRATION', v: 'Live heat-map by anchor, supplier, geography, and sector.' },
                  { k: 'ANOMALY DETECTION', v: 'Duplicate invoice, round-tripping, and shell-supplier patterns.' },
                  { k: 'MODEL GOVERNANCE', v: 'SR 11-7 compliant documentation and drift monitoring.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'var(--ink-soft)', padding: '20px 20px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-soft)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>{item.k}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#C8CDD6', fontWeight: 300, lineHeight: 1.5 }}>{item.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <a href="/solutions" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/solutions')}>See Strike AI</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-50px',
                background: 'radial-gradient(circle at 60% 40%, rgba(0,82,255,0.13) 0%, transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0,
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <StrikeAITerminal />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'end', gap: 80 }}>
            <h2 className="display-lg" style={{ color: 'var(--white)', maxWidth: '14ch' }}>
              Run a 90-day pilot on your live supplier network.
            </h2>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '46ch' }}>
                We deploy alongside your existing core banking and ERP stack. No data migration, no re-platforming. First disbursement within the first 30 days of your 90-day pilot.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
                <a href="/contact" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
                <a href="/solutions" className="btn btn-ghost btn-arrow" style={{ borderColor: '#3A3F49', color: 'var(--white)' }} onClick={(e) => navTo(e, '/solutions')}>See the Platform</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- SOLUTIONS ---------- */
function SolutionsPage() {
  const engine = [
    { title: 'Program Configuration', desc: 'Per-bank program rules: tenors, currencies, anchor & supplier eligibility, pricing curves, settlement rails.' },
    { title: 'Limit & Exposure Engine', desc: 'Hierarchical limits across bank, anchor, supplier, and program. Real-time utilisation tracked at line-item granularity.' },
    { title: 'Pricing & Yield', desc: 'Index-linked or fixed pricing. Tiered spreads by supplier segment, tenor band, and rating bucket.' },
    { title: 'Disbursement Orchestration', desc: 'ACH, FEDWIRE, faster-payment rails.' },
    { title: 'Reconciliation & Settlement', desc: 'Anchor remittance matched to invoice cohorts. Exception queue for unmatched receipts.' },
    { title: 'Reporting & Audit', desc: 'Immutable per-transaction ledger. Regulator-ready exports in SARB, MAS, RBI, EBA formats.' },
  ];
  const ai = [
    { title: 'Risk Scoring', desc: 'Counterparty rating, invoice-level fraud signals, behavioural deviation models. Decision in under one second.' },
    { title: 'Concentration Monitoring', desc: 'Live exposure heat-map by anchor, supplier, geography, sector, and tenor band.' },
    { title: 'Pricing Recommendation', desc: 'Spread guidance against your in-house yield curve. Override and rationale logged for audit.' },
    { title: 'Anomaly Detection', desc: 'Duplicate-invoice, round-tripping, and shell-supplier pattern detection at submission time.' },
    { title: 'Natural Language Query', desc: 'Ask the desk-level questions you would ask an analyst. Answers grounded in your live transaction ledger.' },
    { title: 'Model Governance', desc: 'SR 11-7 compliant model documentation, drift monitors, and challenger-model framework.' },
  ];

  return (
    <div className="page" data-screen-label="Solutions">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Two modules. One platform. Deployed together or independently.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>
            SCF Engine handles origination, limits, disbursement, and reconciliation. Strike AI is the intelligence layer that scores risk, prices invoices, and surfaces anomalies before approval.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ gap: 0, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ padding: '60px 60px 60px 0', borderRight: '1px solid var(--border)' }}>
              <h2 className="display-md" style={{ marginBottom: 22, maxWidth: '14ch' }}>SCF Engine</h2>
              <p className="body body-gray" style={{ maxWidth: '46ch' }}>
                The operational core. Configures programs, holds limits, prices invoices, moves money, books the ledger.
              </p>
              <FeatureList items={engine} />
            </div>
            <div style={{ padding: '60px 0 60px 60px' }}>
              <h2 className="display-md" style={{ marginBottom: 22, maxWidth: '14ch', color: 'var(--blue)' }}>Strike AI</h2>
              <p className="body body-gray" style={{ maxWidth: '46ch' }}>
                The intelligence layer. Reads every transaction, scores every counterparty, recommends every price.
              </p>
              <FeatureList items={ai} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE MATRIX */}
      <section className="section off">
        <div className="container">
          <SectionHead title="What is included." />
          <div className="dtable" style={{ background: 'var(--white)' }}>
            <div className="row head">
              <div>ID</div>
              <div>CAPABILITY</div>
              <div>SCF ENGINE</div>
              <div>STRIKE AI</div>
              <div style={{ textAlign: 'right' }}>SLA</div>
            </div>
            {[
              ['001', 'Program & anchor configuration', '●', '●', 'T+0'],
              ['002', 'Real-time limit engine', '●', '●', '< 200ms'],
              ['003', 'Invoice ingestion (ERP / API)', '●', '●', 'T+0'],
              ['004', 'Risk scoring per invoice', '—', '●', '< 1s'],
              ['005', 'Pricing recommendation', '—', '●', '< 1s'],
              ['006', 'Multi-rail disbursement', '●', '—', 'T+4h'],
              ['007', 'Concentration heat-map', '—', '●', 'Live'],
              ['008', 'Reconciliation & settlement', '●', '—', 'T+1'],
              ['009', 'Regulator export (MAS/RBI/EBA)', '●', '●', 'On demand'],
              ['010', 'Model governance (SR 11-7)', '—', '●', 'Continuous'],
            ].map((r, i) => (
              <div className="row" key={i}>
                <div className="id">{r[0]}</div>
                <div style={{ color: 'var(--ink)' }}>{r[1]}</div>
                <div><span className="status"><span className={'dot ' + (r[2] === '●' ? 'ink' : 'gray')}></span>{r[2] === '●' ? 'Included' : 'Not included'}</span></div>
                <div><span className="status"><span className={'dot ' + (r[3] === '●' ? '' : 'gray')}></span>{r[3] === '●' ? 'Included' : 'Not included'}</span></div>
                <div style={{ textAlign: 'right', color: 'var(--gray)' }}>{r[4]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- FOR BANKS ---------- */
function BanksPage() {
  return (
    <div className="page" data-screen-label="ForBanks">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Originate, underwrite, and book SCF on infrastructure your risk team already approves.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '20ch' }}>
                A single risk surface across every anchor program you fund.
              </h2>
              <p className="body" style={{ maxWidth: '52ch' }}>
                Strike SCF replaces fragmented spreadsheets and one-off anchor portals with a single operational system for your trade finance desk. Configure a new program in days, not quarters.
              </p>
              <FeatureList items={[
                { title: 'Hierarchical Limits', desc: 'Bank-level, program-level, anchor-level, supplier-level. Tracked live, breached limits block disbursement.' },
                { title: 'Capital Treatment', desc: 'Risk-weighted asset reporting aligned to Basel III standardised approach. CRR/CRD-IV exports included.' },
                { title: 'Regulator Outputs', desc: 'BCBS 239 lineage. Pre-built exports for MAS 610, RBI XBRL, EBA FinRep.' },
                { title: 'Funding Optionality', desc: 'Single-funder, club deal, or syndicate. Tranche-level participation tracking built in.' },
              ]} />
              <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
                <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Request Briefing</a>
                <a href="/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>Technical Spec</a>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 0 }}>
                <div style={{ padding: 24, borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--gray)' }}>PROGRAM</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, marginTop: 6, letterSpacing: '-0.01em' }}>Aurelia Holdings · USD Payables</div>
                  </div>
                  <div className="mono" style={{ color: 'var(--blue)' }}>LIVE</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
                  {[
                    { k: 'TOTAL LIMIT', v: '$ 250.0 M', sub: 'BANK BOARD APPROVED' },
                    { k: 'UTILISATION', v: '62.4%', sub: '$ 156.0 M IN FLIGHT', blue: true },
                    { k: 'SUPPLIERS LIVE', v: '1,402', sub: 'OF 1,640 ELIGIBLE' },
                    { k: 'AVG. TENOR', v: '78 DAYS', sub: 'TARGET 75–95' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'var(--white)', padding: 24 }}>
                      <div className="mono" style={{ color: 'var(--gray)' }}>{s.k}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 10, letterSpacing: '-0.025em', color: s.blue ? 'var(--blue)' : 'var(--ink)' }}>{s.v}</div>
                      <div className="mono" style={{ color: 'var(--gray)', marginTop: 8 }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: 24, borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="mono" style={{ color: 'var(--gray)' }}>UTILISATION · 30 DAYS</span>
                    <span className="mono" style={{ color: 'var(--blue)' }}>+ 4.2 PP</span>
                  </div>
                  <svg viewBox="0 0 600 120" width="100%" height="120" style={{ marginTop: 14, display: 'block' }}>
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#E5E7EB" />
                    <line x1="0" y1="60" x2="600" y2="60" stroke="#E5E7EB" strokeDasharray="2 4" />
                    <line x1="0" y1="20" x2="600" y2="20" stroke="#E5E7EB" strokeDasharray="2 4" />
                    {(() => {
                      const pts = [82, 74, 76, 70, 64, 58, 60, 52, 50, 46, 48, 42, 38, 40, 36, 34, 32, 36, 30, 28, 32, 26, 24, 26, 22, 20, 22, 18, 16, 14];
                      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (pts.length - 1)) * 600} ${p}`).join(' ');
                      return <path d={d} fill="none" stroke="#0052FF" strokeWidth="1.5" />;
                    })()}
                  </svg>
                </div>

                <div style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="dtable" style={{ border: 0 }}>
                    <div className="row head">
                      <div>ID</div>
                      <div>SUPPLIER</div>
                      <div>AMOUNT</div>
                      <div>STATUS</div>
                      <div style={{ textAlign: 'right' }}>SCORE</div>
                    </div>
                    {[
                      ['44218', 'Pacific Oxide Group', '$ 482,000', 'AI REVIEW', 'A−'],
                      ['44217', 'Meridian Optics SA', '$ 128,440', 'APPROVED', 'AA'],
                      ['44216', 'Kestra Industrials', '$ 1,204,000', 'DISBURSED', 'A'],
                      ['44215', 'Coventry Trade Ltd', '$ 84,200', 'REPAID', 'BBB+'],
                    ].map((r, i) => (
                      <div className="row" key={i}>
                        <div className="id">{r[0]}</div>
                        <div style={{ color: 'var(--ink)' }}>{r[1]}</div>
                        <div className="amt">{r[2]}</div>
                        <div><span className="status"><span className={'dot ' + (r[3] === 'AI REVIEW' ? '' : r[3] === 'REPAID' ? 'gray' : 'ink')}></span>{r[3]}</span></div>
                        <div style={{ textAlign: 'right', color: 'var(--ink)' }}>{r[4]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="section off">
        <div className="container">
          <SectionHead title="From signed term sheet to first disbursement in under four weeks." />
          <div className="row-4">
            {[
              { n: 'WEEK 1', t: 'Discovery', d: 'Program design workshop with credit, ops, and treasury.' },
              { n: 'WEEK 2', t: 'Integration', d: 'Core banking and payment rail connectors. Sandboxed.' },
              { n: 'WEEK 3', t: 'Anchor Onboarding', d: 'Anchor sign-off, supplier list, KYC seeding.' },
              { n: 'WEEK 4', t: 'First Disbursement', d: 'Production go-live with operational runbook.' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: 36, minHeight: 220 }}>
                <div className="mono" style={{ color: 'var(--blue)' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, marginTop: 16, letterSpacing: '-0.015em' }}>{s.t}</div>
                <div className="body body-gray" style={{ marginTop: 12, fontSize: 14, maxWidth: '28ch' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- FOR ANCHORS ---------- */
function AnchorsPage() {
  return (
    <div className="page" data-screen-label="ForAnchors">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Extend working capital to your supplier base without touching your balance sheet.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '20ch' }}>
                A supplier finance program your treasury team controls end to end.
              </h2>
              <p className="body" style={{ maxWidth: '52ch' }}>
                Review program rules, approve invoices on your normal cadence. Suppliers self-elect into early payment at posted rates. Funding banks carry the credit risk.
              </p>
              <FeatureList items={[
                { title: 'Program Control', desc: 'You set supplier eligibility, tenor caps, pricing tiers, and currency. Changes effective on the next batch.' },
                { title: 'ERP-Native', desc: 'Direct connectors to SAP, Oracle, NetSuite, Microsoft Dynamics. Invoices flow on existing data contracts.' },
                { title: 'No Balance Sheet Impact', desc: 'Off-balance-sheet treatment confirmed under IFRS and US GAAP guidance, with auditor-reviewed program structure.' },
                { title: 'Supplier Adoption', desc: 'Supplier portal in 9 languages. Onboarding cohorts of 500+ in a single batch.' },
              ]} />
              <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
                <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Schedule Treasury Brief</a>
                <a href="/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>How It Works</a>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 0 }}>
                <div style={{ padding: 24, borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--gray)' }}>PROGRAM</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, marginTop: 6, letterSpacing: '-0.01em' }}>Global Suppliers · NET 90</div>
                  </div>
                  <div className="mono" style={{ color: 'var(--blue)' }}>ACTIVE · 4 BANKS</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
                  {[
                    { k: 'SUPPLIERS ENROLLED', v: '2,184', sub: 'OF 2,940 INVITED' },
                    { k: 'EARLY-PAY ELECT RATE', v: '74%', sub: 'TRAILING 30D', blue: true },
                    { k: 'DSO IMPACT', v: '+22 DAYS', sub: 'WORKING CAPITAL RELEASED' },
                    { k: 'PROGRAM SAVINGS', v: '$ 4.8 M', sub: 'YTD · COGS REBATE' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'var(--white)', padding: 24 }}>
                      <div className="mono" style={{ color: 'var(--gray)' }}>{s.k}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 10, letterSpacing: '-0.025em', color: s.blue ? 'var(--blue)' : 'var(--ink)' }}>{s.v}</div>
                      <div className="mono" style={{ color: 'var(--gray)', marginTop: 8 }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: 24, borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="mono" style={{ color: 'var(--gray)' }}>SUPPLIER ADOPTION · 12 MONTHS</span>
                    <span className="mono" style={{ color: 'var(--gray)' }}>TARGET · 80%</span>
                  </div>
                  <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 4, alignItems: 'end', height: 90 }}>
                    {[18, 24, 31, 36, 42, 48, 52, 58, 63, 68, 71, 74].map((h, i) => (
                      <div key={i} style={{ background: i > 9 ? 'var(--blue)' : 'var(--ink)', height: h + '%' }}></div>
                    ))}
                  </div>
                  <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                    <span className="mono" style={{ color: 'var(--gray)' }}>JUN '25</span>
                    <span className="mono" style={{ color: 'var(--gray)' }}>MAY '26</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24, padding: 24, border: '1px solid var(--border)' }}>
                <div className="mono" style={{ color: 'var(--gray)' }}>SAMPLE INVOICE COHORT · LAST 24H</div>
                <div className="dtable" style={{ border: 0, marginTop: 16 }}>
                  {[
                    ['Pacific Oxide Group', '$ 482K', 'NET 90', 'APPROVED'],
                    ['Meridian Optics SA', '$ 128K', 'NET 60', 'APPROVED'],
                    ['Kestra Industrials', '$ 1.20M', 'NET 90', 'APPROVED'],
                  ].map((r, i) => (
                    <div className="row" key={i} style={{ gridTemplateColumns: '1.5fr 1fr 80px 100px', padding: '12px 0' }}>
                      <div style={{ color: 'var(--ink)' }}>{r[0]}</div>
                      <div className="amt">{r[1]}</div>
                      <div style={{ color: 'var(--gray)' }}>{r[2]}</div>
                      <div><span className="status"><span className="dot ink"></span>{r[3]}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="display-md">Ready to extend your supplier finance program?</h2>
            </div>
            <div>
              <p className="body body-gray">Strike SCF deploys alongside your existing ERP and banking relationships. Your treasury team retains full control. First supplier disbursement within the first 30 days of your pilot.</p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
                <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Schedule Treasury Brief</a>
                <a href="/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>How It Works</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- PLATFORM ---------- */
function PlatformPage() {
  return (
    <div className="page" data-screen-label="Platform">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '20ch' }}>
            Built as financial infrastructure. Not a SaaS dashboard.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>
            Strike SCF runs as a single multi-tenant platform with hard isolation per institution. Designed for deployment across all markets worldwide.
          </p>
        </div>
      </section>

      {/* WHAT RUNS UNDER THE HOOD */}
      <section className="section off">
        <div className="container">
          <SectionHead title="What runs under the hood." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', marginBottom: 1 }}>
            {[
              { layer: 'Frontend', impl: 'Next.js 16 (App Router), React 18, TypeScript' },
              { layer: 'Backend', impl: 'Next.js serverless API routes — no separate process' },
              { layer: 'Database', impl: 'Supabase PostgreSQL 15 with Row Level Security' },
              { layer: 'Authentication', impl: 'Supabase Auth — JWT sessions + invite token flow' },
              { layer: 'AI', impl: 'Anthropic Claude — server-proxied, never browser-exposed' },
              { layer: 'Deployment', impl: 'Vercel global edge CDN, auto CI/CD from GitHub' },
              { layer: 'Email', impl: 'Resend — transactional email with HTML templates' },
            ].map((row, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '20px 28px', display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray)', letterSpacing: '0.14em', textTransform: 'uppercase', minWidth: 130, flexShrink: 0 }}>{row.layer}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', fontWeight: 300 }}>{row.impl}</div>
              </div>
            ))}
          </div>

          <div id="security" style={{ marginTop: 60, paddingTop: 44, borderTop: '1px solid var(--border)' }}>
            <h3 className="display-sm" style={{ marginBottom: 28 }}>Security posture.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
              {[
                { k: 'X-Frame-Options', v: 'DENY — prevents clickjacking across all pages' },
                { k: 'Strict-Transport-Security', v: 'max-age=63072000; includeSubDomains; preload' },
                { k: 'Content-Security-Policy', v: 'Restricts scripts, styles, and frame sources; blocks inline injection' },
                { k: 'Row Level Security', v: 'All 22 database tables isolated per institution' },
                { k: 'Service Role Keys', v: 'Server-only; never in browser bundles or client-side code' },
                { k: 'Authentication', v: 'JWT sessions with invite token flow; no shared credentials' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--white)', padding: '18px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{s.k}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', fontWeight: 300 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Service topology." />
          <PlatformArchitecture />
        </div>
      </section>

      <section className="section off">
        <div className="container">
          <SectionHead title="Reference transaction flow." />
          <TransactionFlow />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Operational characteristics." />
          <div className="row-3">
            {[
              { k: 'TRANSPARENCY', v: '100%', sub: 'FULL AUDIT TRAIL · EVERY TRANSACTION' },
              { k: 'DISBURSEMENT', v: '<7 Days', sub: 'MEDIAN · TIME TO CREDITED FUNDS' },
              { k: 'PEAK THROUGHPUT', v: '4,200 TPS', sub: 'INVOICE INGEST · SUSTAINED' },
              { k: 'SECTORS SERVED', v: '7+ Industries', sub: 'BANKING · MFG · COMMODITIES · RETAIL + MORE' },
              { k: 'RETENTION', v: '10 Years', sub: 'IMMUTABLE LEDGER · WORM STORAGE' },
              { k: 'INTEGRATIONS', v: '23 ERPs', sub: 'CERTIFIED CONNECTORS · LIVE' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: 36 }}>
                <div className="mono" style={{ color: 'var(--gray)' }}>{s.k}</div>
                <div className="display-md" style={{ marginTop: 18, fontSize: 48, color: i === 2 ? 'var(--blue)' : 'var(--ink)' }}>{s.v}</div>
                <div className="mono" style={{ color: 'var(--gray)', marginTop: 14 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section className="section dark">
        <div className="container">
          <div className="section-head" style={{ borderColor: '#222730' }}>
            <h2 className="display-md" style={{ color: 'var(--white)', gridColumn: 'span 2' }}>Your existing systems keep working. Strike SCF connects to them.</h2>
          </div>
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '44ch' }}>
                Strike SCF plugs into the ERP, banking, and payments infrastructure your team already runs. No data migration, no re-platforming, no parallel systems. Your first financing decision can happen within the first 30 days of going live.
              </p>
              <FeatureList items={[
                { title: 'Connects to Your ERP', desc: 'Direct integrations with SAP, Oracle, NetSuite, and Microsoft Dynamics. Invoices flow from your existing payables cycle without any manual re-entry.' },
                { title: 'Works With Your Bank', desc: 'Strike SCF operates alongside your existing banking relationships. Your funding bank keeps its credit processes. Strike SCF provides the operational layer they plug into.' },
                { title: 'No Rip and Replace', desc: 'Strike SCF is additive infrastructure. Every system your team uses today continues running. The platform layers intelligence and financing on top of what you already have.' },
              ]} />
            </div>
            <div className="ai-panel">
              <div className="ai-topbar">
                <div className="dots"><span></span><span></span><span></span></div>
                <div>POST /v4/invoices · STRIKE-API · LIVE</div>
                <div>200 OK · 184 ms</div>
              </div>
              <div style={{ padding: 28, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75, color: '#C8CDD6' }}>
                <div style={{ color: 'var(--gray-soft)' }}>// request</div>
                <div><span style={{ color: 'var(--blue)' }}>POST</span> /v4/invoices</div>
                <div style={{ color: 'var(--gray-soft)' }}>Authorization: Bearer ************</div>
                <div style={{ color: 'var(--gray-soft)' }}>Content-Type: application/json</div>
                <br />
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"program_id"</span>: <span style={{ color: 'var(--white)' }}>"prg_aurelia_usd"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"anchor_id"</span>: <span style={{ color: 'var(--white)' }}>"acr_aurelia"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"supplier_id"</span>: <span style={{ color: 'var(--white)' }}>"sup_pacox"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"amount"</span>: <span style={{ color: 'var(--white)' }}>482000.00</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"currency"</span>: <span style={{ color: 'var(--white)' }}>"USD"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"due_date"</span>: <span style={{ color: 'var(--white)' }}>"2026-08-13"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"po_ref"</span>: <span style={{ color: 'var(--white)' }}>"PO-88102"</span></div>
                <div>{'}'}</div>
                <br />
                <div style={{ color: 'var(--gray-soft)' }}>// response</div>
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"invoice_id"</span>: <span style={{ color: 'var(--white)' }}>"inv_44218"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"state"</span>: <span style={{ color: 'var(--white)' }}>"ai_review"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"risk_score"</span>: <span style={{ color: 'var(--white)' }}>0.18</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"recommended_action"</span>: <span style={{ color: 'var(--white)' }}>"approve"</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: 'var(--blue)' }}>"estimated_disbursement"</span>: <span style={{ color: 'var(--white)' }}>"2026-05-22T18:24:00Z"</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- CONTACT ---------- */
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [form, setForm] = useState({
    name: '', company: '', role: 'CFO', type: 'Anchor Buyer', message: ''
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.company || !form.message) {
      setFormError('Please fill in your name, company, and message.');
      return;
    }
    setLoading(true);
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Submission failed. Email us directly at support@strikescf.com');
      }
    } catch {
      setFormError('Network error. Email us directly at support@strikescf.com');
    } finally {
      setLoading(false);
    }
  };

  const redbookProfiles = [
    { label: 'ANCHOR BUYERS', desc: 'CFOs and supply chain leaders protecting continuity and working capital.', path: '/redbook' },
    { label: 'STRATEGIC SUPPLIERS', desc: 'Finance teams seeking faster capital access on better terms.', path: '/redbook' },
    { label: 'FUNDERS', desc: 'Banks and private credit partners seeking risk-scored SCF pipeline.', path: '/redbook' },
  ];

  return (
    <div className="page" data-screen-label="Contact">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Talk to the team. We'll route you to the right desk.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '18ch' }}>
                Three specialised desks. One inbox per region.
              </h2>
              <div className="kv-block" style={{ borderTop: 0, paddingTop: 0 }}>
                <div><div className="k">GENERAL ENQUIRIES</div><div className="v">support@strikescf.com</div></div>
                <div><div className="k">NEW YORK CITY · HQ</div><div className="v">New York, NY</div></div>
              </div>

              <div style={{ marginTop: 48 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>REDBOOK ADVISORY CIRCLE</div>
                {redbookProfiles.map((p, i) => (
                  <a key={i} href={p.path} onClick={(e) => navTo(e, p.path)} style={{ display: 'block', padding: '16px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', transition: 'color 0.15s ease' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>{p.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', fontWeight: 300 }}>{p.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              {!submitted ? (
                <div style={{ marginTop: 24 }}>
                  <div className="form">
                    <div className="field">
                      <label>Full name</label>
                      <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Jane Doe" />
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input value={form.company} onChange={e => set('company', e.target.value)} placeholder="Institution name" />
                    </div>
                    <div className="field">
                      <label>Role</label>
                      <select value={form.role} onChange={e => set('role', e.target.value)}>
                        <option>CFO</option>
                        <option>Treasury</option>
                        <option>Supply Chain</option>
                        <option>Bank</option>
                        <option>Private Credit</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>What best describes you?</label>
                      <select value={form.type} onChange={e => set('type', e.target.value)}>
                        <option>Anchor Buyer</option>
                        <option>Supplier</option>
                        <option>Bank</option>
                        <option>Investor</option>
                        <option>Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label>Message</label>
                      <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="Program scope, geographies in focus, existing infrastructure, or how we can help." />
                    </div>
                  </div>
                  {formError && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#c0392b', letterSpacing: '0.08em', marginTop: 16 }}>
                      {formError}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 16, marginTop: 24, alignItems: 'center' }}>
                    <button className="btn btn-blue btn-arrow" disabled={loading} onClick={submit}>
                      {loading ? 'Sending…' : 'Request a Pilot'}
                    </button>
                    <span className="mono" style={{ color: 'var(--gray)' }}>RESPONSE · 1 BUSINESS DAY</span>
                  </div>
                  <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.08em' }}>
                    Or email us directly: <a href="mailto:support@strikescf.com" style={{ color: 'var(--blue)' }}>support@strikescf.com</a>
                  </div>
                </div>
              ) : (
                <div className="card" style={{ marginTop: 24 }}>
                  <div className="mono" style={{ color: 'var(--blue)' }}>REQUEST · RECEIVED</div>
                  <div className="display-md" style={{ fontSize: 36, marginTop: 16 }}>Thank you, {form.name || 'we have your details'}.</div>
                  <p className="body body-gray" style={{ marginTop: 16, maxWidth: '52ch' }}>
                    The Strike team will reach out within one business day. Reference: <strong style={{ color: 'var(--blue)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>SCF-26-{Math.floor(Math.random() * 90000 + 10000)}</strong>.
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <button className="btn btn-ghost btn-arrow" onClick={() => setSubmitted(false)}>Submit another</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- FOR SUPPLIERS ---------- */
function SuppliersPage() {
  return (
    <div className="page" data-screen-label="ForSuppliers">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Turn approved invoices into same-day liquidity. No separate credit application required.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '20ch' }}>
                Early payment at a transparent rate. No paperwork.
              </h2>
              <p className="body" style={{ maxWidth: '52ch' }}>
                Once your anchor approves an invoice, you receive an early payment offer through the portal. Accept it, and funds arrive the same business day. No separate credit application, no account manager required.
              </p>
              <FeatureList items={[
                { title: 'Transparent Pricing', desc: 'You see the exact annualised discount rate before accepting. No hidden fees, no renegotiation after the fact.' },
                { title: 'No Separate Credit', desc: 'Your anchor\'s program approval is your access. The funding bank underwrites the anchor relationship, not you individually.' },
                { title: 'Same-Day Funding', desc: 'Accept an offer before the posted cut-off and funds are credited to your nominated account the same business day in most markets.' },
              ]} />
              <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
                <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Your Anchor</a>
                <a href="/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>How It Works</a>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 0 }}>
                <div style={{ padding: 24, borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--gray)' }}>SUPPLIER</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, marginTop: 6, letterSpacing: '-0.01em' }}>Pacific Oxide Group</div>
                  </div>
                  <div className="mono" style={{ color: 'var(--blue)' }}>ENROLLED</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
                  {[
                    { k: 'INVOICES ELIGIBLE', v: '12', sub: 'ANCHOR-APPROVED · OPEN FOR ELECTION' },
                    { k: 'AVAILABLE FUNDING', v: '$ 4.2 M', sub: 'ACROSS ELIGIBLE INVOICES', blue: true },
                    { k: 'POSTED RATE', v: '4.8%', sub: 'ANNUALISED · NET 90 PROGRAM' },
                    { k: 'LAST DISBURSEMENT', v: '$ 128K', sub: 'CREDITED 2H AGO' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'var(--white)', padding: 24 }}>
                      <div className="mono" style={{ color: 'var(--gray)' }}>{s.k}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 10, letterSpacing: '-0.025em', color: s.blue ? 'var(--blue)' : 'var(--ink)' }}>{s.v}</div>
                      <div className="mono" style={{ color: 'var(--gray)', marginTop: 8 }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="dtable" style={{ border: 0 }}>
                    <div className="row head" style={{ gridTemplateColumns: '1fr 1fr 80px 110px 80px' }}>
                      <div>INVOICE</div>
                      <div>AMOUNT</div>
                      <div>RATE</div>
                      <div>STATUS</div>
                      <div style={{ textAlign: 'right' }}>FUNDS</div>
                    </div>
                    {[
                      ['INV-88102', '$ 482,000', '4.8%', 'OFFER OPEN', 'TODAY'],
                      ['INV-88089', '$ 128,440', '4.8%', 'ACCEPTED', 'CREDITED'],
                      ['INV-88071', '$ 310,200', '4.6%', 'ACCEPTED', 'CREDITED'],
                      ['INV-88044', '$ 92,000', '4.8%', 'DECLINED', 'MATURITY'],
                    ].map((r, i) => (
                      <div className="row" key={i} style={{ gridTemplateColumns: '1fr 1fr 80px 110px 80px' }}>
                        <div className="id">{r[0]}</div>
                        <div className="amt">{r[1]}</div>
                        <div style={{ color: 'var(--ink)' }}>{r[2]}</div>
                        <div><span className="status">
                          <span className={'dot ' + (r[3] === 'OFFER OPEN' ? '' : r[3] === 'DECLINED' ? 'gray' : 'ink')}></span>
                          {r[3]}
                        </span></div>
                        <div style={{ textAlign: 'right', color: r[4] === 'TODAY' ? 'var(--blue)' : 'var(--gray)' }}>{r[4]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section off">
        <div className="container">
          <SectionHead title="Four steps from approved invoice to funded account." />
          <div className="row-4">
            {[
              { n: '01', t: 'Invoice Approved', d: 'Your anchor reviews and approves the invoice in their normal payables cycle. No action required from you.' },
              { n: '02', t: 'Offer Received', d: 'An early payment offer appears in your supplier portal with the exact discount rate and net amount you will receive.' },
              { n: '03', t: 'Accept, Decline, Or Counter', d: 'One click to accept. Counter-offer to get a better deal. Decline and you receive the full invoice amount at maturity.' },
              { n: '04', t: 'Funds Credited', d: 'The net amount lands in your nominated account the same business day in most markets. No further steps.' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: 36, minHeight: 220 }}>
                <div className="mono" style={{ color: 'var(--blue)' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, marginTop: 16, letterSpacing: '-0.015em' }}>{s.t}</div>
                <div className="body body-gray" style={{ marginTop: 12, fontSize: 14, maxWidth: '28ch' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Program flow diagrams live in diagrams.jsx:
   ReverseFactoringDiagram, InvoiceFactoringDiagram, POFinancingDiagram, DiscountingFlowDiagram */

/* ---------- PO FINANCING ---------- */
function POFinancingPage() {
  return (
    <div className="page" data-screen-label="POFinancing">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>Fund purchase orders before production begins.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>Strike SCF enables buyers to finance supplier purchase orders at the point of commitment, not after delivery. Suppliers get the cash to produce. Buyers protect their supply chain before disruption hits.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How PO Financing works on Strike SCF.</h2>
              <FeatureList items={[
                { title: 'Buyer Issues PO', desc: 'The anchor buyer issues a purchase order to a strategic supplier. The PO is submitted to Strike for financing consideration.' },
                { title: 'Strike Scores the Opportunity', desc: 'Strike AI evaluates the supplier, the buyer relationship, the PO value, and the risk profile. A financing recommendation is returned in under one second.' },
                { title: 'Funder Approves and Disburses', desc: "The approved funder releases capital directly to the supplier against the PO. The supplier can begin production without waiting for invoice approval." },
                { title: 'Repayment on Invoice Maturity', desc: "When the buyer receives goods and approves the invoice, repayment flows through Strike back to the funder. The anchor's balance sheet is not extended." },
              ]} />
            </div>
            <POFinancingDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '22ch' }}>Ready to protect your production before it starts?</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- INVOICE FACTORING ---------- */
function InvoiceFactoringPage() {
  return (
    <div className="page" data-screen-label="InvoiceFactoring">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>Unlock cash from invoices your anchor has already approved.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>Invoice factoring on Strike turns approved receivables into immediate working capital. No waiting for payment terms. No separate credit facility. The anchor's approval is the signal.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Invoice Factoring works on Strike SCF.</h2>
              <FeatureList items={[
                { title: 'Invoice Submitted', desc: 'The supplier submits an approved invoice through the Strike portal or via ERP integration. Anchor approval is already confirmed.' },
                { title: 'Instant Offer', desc: 'Strike AI scores the invoice and returns a factoring offer with the exact net amount and annualised rate. No negotiation, no callbacks.' },
                { title: 'Supplier Accepts', desc: 'One click to accept. Funds are released to the supplier\'s nominated account the same business day in most markets.' },
                { title: 'Anchor Settles at Maturity', desc: "On the original payment due date, the anchor settles the full invoice amount directly to the funder. No change to the anchor's payment process." },
              ]} />
            </div>
            <InvoiceFactoringDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '22ch' }}>Turn your receivables into working capital today.</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- REVERSE FACTORING ---------- */
function ReverseFactoringPage() {
  return (
    <div className="page" data-screen-label="ReverseFactoring">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>Let your anchor's credit strength fund your entire supplier base.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>Reverse factoring on Strike is buyer-led supply chain finance. The anchor's creditworthiness unlocks better financing rates for every supplier in their network, funded by Strike's bank and credit partners.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Reverse Factoring works on Strike SCF.</h2>
              <FeatureList items={[
                { title: 'Anchor Configures the Program', desc: 'The anchor sets supplier eligibility, payment terms, pricing tiers, and currencies. The program is live in days, not quarters.' },
                { title: 'Suppliers Self-Elect', desc: 'Enrolled suppliers see early payment offers in the portal as their invoices are approved. They choose which invoices to accelerate and which to hold to maturity.' },
                { title: 'Funder Pays Suppliers Early', desc: "Strike SCF routes the early payment to the supplier from the approved funding bank or private credit partner. The funder carries the credit risk, not the anchor." },
                { title: 'Anchor Pays on Original Terms', desc: 'The anchor pays the funder on the original invoice maturity date. DSO is extended. Working capital is optimized. Balance sheet treatment remains off-balance-sheet.' },
              ]} />
            </div>
            <ReverseFactoringDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '24ch' }}>Deploy a supplier finance program your entire supply chain will use.</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Schedule Treasury Brief</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- DYNAMIC DISCOUNTING ---------- */
function DynamicDiscountingPage() {
  return (
    <div className="page" data-screen-label="DynamicDiscounting">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>Use your own cash to fund suppliers and capture the discount.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>Dynamic discounting on Strike lets anchor buyers offer early payment to suppliers using their own balance sheet, then capture the early payment discount as direct income. No bank required.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Dynamic Discounting works on Strike SCF.</h2>
              <FeatureList items={[
                { title: 'Buyer Sets the Discount Rate', desc: 'The anchor defines a sliding scale of discount rates by days paid early. The earlier the payment, the higher the annualised yield captured by the buyer.' },
                { title: 'Suppliers Choose Their Terms', desc: 'Suppliers see the available offer in the portal and choose when to accept. Full transparency on the rate and the net amount at every point.' },
                { title: 'Instant Settlement from Buyer Cash', desc: 'Strike SCF handles the settlement. The buyer\'s cash is deployed, the supplier receives funds, and the transaction is booked and reconciled automatically.' },
                { title: 'Yield Captured by the Buyer', desc: 'The early payment discount is recorded as income for the anchor. Strike SCF produces the audit trail and reconciliation reports for your treasury team.' },
              ]} />
            </div>
            <DiscountingFlowDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '24ch' }}>Put your excess liquidity to work inside your own supply chain.</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- REDBOOK ---------- */
function RedbookPage() {
  return (
    <div className="page" data-screen-label="RedBook">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '22ch' }}>
            The Strike SCF RedBook.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '58ch' }}>
            A strategic intelligence publication defining the future of supply chain finance and liquidity orchestration. Built for CFOs, treasurers, heads of trade finance, and the banks that fund global trade.
          </p>
        </div>
      </section>

      <section className="section off">
        <div className="container">
          <SectionHead title="What the RedBook covers." />
          <div className="row-4" style={{ background: 'var(--border)' }}>
            {[
              { num: '01', title: 'The Financing Gap', desc: '$2.5 trillion in trade finance goes unfunded every year. The RedBook quantifies why and what it costs.' },
              { num: '02', title: 'Map · Decide · Fund', desc: 'The operating model for the next generation of supply chain finance — connecting risk signals to liquidity decisions.' },
              { num: '03', title: 'Program Architecture', desc: 'How reverse factoring, invoice factoring, PO financing, and dynamic discounting work together on a single intelligent platform.' },
              { num: '04', title: 'AI in Trade Finance', desc: 'How AI co-pilots, real-time risk scoring, and autonomous agents are changing how banks and corporates underwrite and deploy capital.' },
            ].map((c, i) => (
              <div key={i} style={{ padding: 32, background: 'var(--white)' }}>
                <div className="mono" style={{ color: 'var(--blue)', marginBottom: 14, fontSize: 11 }}>{c.num}</div>
                <h3 className="display-sm" style={{ marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', lineHeight: 1.65, fontWeight: 300 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center', gap: 80 }}>
            <div>
              <div className="mono" style={{ color: 'var(--blue)', marginBottom: 16, fontSize: 10 }}>REDBOOK ADVISORY CIRCLE</div>
              <h2 className="display-md" style={{ color: '#fff', maxWidth: '22ch', marginBottom: 20 }}>
                Help define the standard.
              </h2>
              <p className="lead" style={{ color: '#9AA0AB', maxWidth: '48ch', marginBottom: 32, fontWeight: 300 }}>
                The Strike SCF RedBook Advisory Circle brings together buyers, suppliers, funders, and logistics partners to define the requirements for the next operating layer of global trade finance. Founding participants shape the publication — not just read it.
              </p>
              <a href="/contact" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/contact')}>
                Join the Advisory Circle
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,0.05)' }}>
              {[
                { role: 'ANCHOR BUYERS', desc: 'CFOs, Treasurers, Chief Supply Chain Officers' },
                { role: 'STRATEGIC SUPPLIERS', desc: 'CEOs, CFOs, Export and Operations leads' },
                { role: 'FUNDERS', desc: 'Banks, trade finance funds, private credit' },
                { role: 'LOGISTICS PARTNERS', desc: 'Freight forwarders, customs brokers, trade compliance' },
              ].map((r, i) => (
                <div key={i} style={{ padding: '14px 24px', background: 'rgba(255,255,255,0.04)', display: 'flex', gap: 32, alignItems: 'baseline' }}>
                  <div className="mono" style={{ color: '#6B7280', fontSize: 10, minWidth: 140, flexShrink: 0 }}>{r.role}</div>
                  <div className="mono" style={{ color: '#C8CDD6', fontSize: 11 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center', gap: 80 }}>
            <h2 className="display-md" style={{ maxWidth: '24ch' }}>The founding issue is in production. Be part of it.</h2>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray)', lineHeight: 1.7, fontWeight: 300, maxWidth: '44ch', marginBottom: 28 }}>
                The first issue of the Strike SCF RedBook defines the category — the decisioning and liquidity orchestration layer for resilient global supply chains. Advisory Circle members receive it first.
              </p>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales to Join</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      {/* SECTION 1 — Hero */}
      <section className="section off">
        <div className="container">
          <div className="mono" style={{ color: 'var(--blue)', marginBottom: 20, fontSize: 11 }}>ABOUT STRIKE SCF</div>
          <h1 className="display-lg" style={{ maxWidth: '20ch', marginBottom: 24 }}>
            We are not building a better SCF tool.
          </h1>
          <p className="display-md" style={{ color: 'var(--gold)', fontStyle: 'italic', maxWidth: '36ch', marginBottom: 28, fontWeight: 400 }}>
            We are building the infrastructure that moves global trade.
          </p>
          <p className="lead" style={{ maxWidth: '58ch', color: 'var(--gray)', fontWeight: 300 }}>
            Strike SCF is an AI-native supply chain finance platform — connecting banks, anchor corporates, and suppliers on a single intelligent network. Every financing decision. Every risk signal. Every transaction. One platform.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Three brutal facts */}
      <section className="section dark">
        <div className="container">
          <div className="row-3" style={{ background: 'var(--border)', gap: 1 }}>
            {[
              {
                stat: '$2.5T',
                label: 'Trade finance unfunded every year',
                body: 'Not because the risk is too high. Because the infrastructure is broken. Strike SCF is the fix.',
              },
              {
                stat: '5–14',
                label: 'Days per invoice approval today',
                body: 'Manual processes. Email threads. PDF attachments. Strike SCF targets hours, not weeks.',
              },
              {
                stat: '$0',
                label: 'Cross-network intelligence available',
                body: 'No platform today gives banks visibility into a counterparty\'s behavior across other institutions. Until now.',
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '48px 40px', background: 'var(--ink)' }}>
                <div className="display-lg" style={{ color: 'var(--gold)', marginBottom: 12, lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#fff', fontWeight: 500, marginBottom: 12 }}>{item.label}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#9AA0AB', lineHeight: 1.65, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — What We Built */}
      <section className="section off">
        <div className="container">
          <SectionHead title="The platform. Built and operational." />
          <div className="row-4" style={{ background: 'var(--border)', gap: 1 }}>
            {[
              {
                tag: '01 · SCF ENGINE',
                title: 'The complete transaction lifecycle.',
                body: 'Three portals — Bank, Anchor, Supplier. KYB onboarding through to repayment. Every financing structure supported. Enterprise-grade. Live today.',
              },
              {
                tag: '02 · STRIKE SCF AI',
                title: 'Not AI features. An AI-native operating system.',
                body: 'Every page. Every decision point. Every transaction. Context-aware intelligence embedded at the infrastructure layer — not bolted on as a feature.',
              },
              {
                tag: '03 · STRIKE PASSPORT',
                title: 'A living risk identity for every organization.',
                body: 'PassportScore™ updates in real time with every transaction. The trust layer global trade has never had — visible to every bank and counterparty on the network.',
              },
              {
                tag: '04 · OPEN NETWORK',
                title: 'Any bank. Any buyer. Any supplier.',
                body: 'No pre-existing relationship required. Every incumbent in this market is a closed system. Strike SCF was built open. The openness is the moat.',
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--white)',
                  padding: '32px 28px',
                  borderTop: '2px solid var(--blue)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mono" style={{ color: 'var(--blue)', fontSize: 10 }}>{p.tag}</div>
                <h3 className="display-sm">{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', lineHeight: 1.65, fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Why Now */}
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ gap: 80, alignItems: 'flex-start' }}>
            <div>
              <div className="mono" style={{ color: 'var(--blue)', marginBottom: 16, fontSize: 11 }}>WHY NOW</div>
              <h2 className="display-md" style={{ maxWidth: '20ch' }}>
                The conditions that make Strike SCF possible didn't exist two years ago.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 48 }}>
              {[
                'Agentic AI frameworks are now mature enough for autonomous deal execution. The infrastructure to run agent-to-agent negotiation between a bank, a buyer, and a supplier — with full audit trails and human approval — exists today.',
                'Post-COVID, supply chain finance moved from back-office function to boardroom priority. CFOs who never thought about supplier liquidity are now accountable for it. The conversation is happening at the right level.',
                'Strike SCF is not raising to build. It is raising to scale infrastructure that already works. The platform is operational. The transaction lifecycle is live. The AI co-pilot is deployed.',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div className="mono" style={{ color: 'var(--blue)', fontSize: 10, paddingTop: 3, flexShrink: 0 }}>0{i + 1}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gray)', lineHeight: 1.7, fontWeight: 300 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — The Team */}
      <section className="section dark">
        <div className="container">
          <SectionHead
            title="Old world credibility. New world execution speed."
            dark
          />
          <div className="row-3" style={{ gap: 24 }}>
            {[
              {
                role: 'CO-FOUNDER · BUSINESS & STRATEGY',
                headline: '30-Year Industry Veteran.',
                credentials: [
                  'PricewaterhouseCoopers — Senior Partner',
                  'Deloitte — Financial Advisory Practice Lead',
                ],
                body: 'Decades spent sitting across from the CFOs, Treasurers, and Chief Risk Officers at the institutions Strike SCF sells to. Speaks their language. Has their trust. The reason a bank\'s Head of Trade Finance takes the meeting.',
              },
              {
                role: 'CO-FOUNDER · TECHNOLOGY & PRODUCT',
                headline: 'Builder. Architect. Operator.',
                credentials: [
                  'Built the entire Strike SCF platform in under 10 days',
                  'Multi-portal auth, KYB, transactions, AI, analytics — all of it',
                ],
                body: 'A technologist with the velocity and architectural judgment of someone a decade into a senior career. The platform that exists today is proof. Not a developer. A builder — with the product instinct to match.',
              },
              {
                role: 'CO-FOUNDER · GLOBAL MARKETS & STRATEGY',
                headline: 'Serial Entrepreneur. Global Operator.',
                credentials: [
                  'Founded and scaled institutional research and advisory firms across Europe, the Middle East, and North America',
                  'Decades of enterprise technology leadership at the highest level of global business',
                ],
                body: 'A recognized authority in enterprise technology markets with a track record of building, scaling, and exiting institutional-grade advisory businesses across multiple continents. Brings the global network and institutional relationships that compress decades of market development into months.',
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid var(--blue)',
                  background: 'rgba(255,255,255,0.04)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div className="mono" style={{ color: 'var(--blue)', fontSize: 10 }}>{f.role}</div>
                <h3 className="display-sm" style={{ color: '#fff' }}>{f.headline}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {f.credentials.map((c, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)', fontSize: 12, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#C8CDD6', fontWeight: 500 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#9AA0AB', lineHeight: 1.65, fontWeight: 300, marginTop: 4 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — The Vision */}
      <section className="section off">
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--blue)', marginBottom: 20, fontSize: 11 }}>THE VISION</div>
          <h2 className="display-md" style={{ marginBottom: 40 }}>
            Category creation, not category entry.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, textAlign: 'left', marginBottom: 56 }}>
            {[
              'Every incumbent in this market is a closed system by design. Opening their network would destroy their moat. Strike SCF was built open from day one — the openness is the moat. We do not compete with banks. We give them infrastructure they cannot build themselves.',
              'The data flywheel compounds. More organizations mean more transactions. More transactions mean more behavioral data. Smarter models produce better outcomes. Better outcomes attract more organizations. This is not a SaaS business. It is a network effects business built on top of SaaS.',
              'The long-term play is the intelligence layer. When Strike SCF has processed hundreds of billions in trade transactions, the risk models, the PassportScore™ ratings, and the behavioral data become the most valuable trade finance dataset in the world — licensed to the same banks that run on the platform today.',
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray)', lineHeight: 1.75, fontWeight: 300 }}>{p}</p>
            ))}
          </div>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 48 }} />
          <div className="display-md" style={{ color: 'var(--gold)', fontStyle: 'italic', textAlign: 'center' }}>
            The Epicenter of Global Trade Finance.
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA Strip */}
      <section className="section">
        <div className="container">
          <div className="cta-strip">
            <div className="cta-strip-col">
              <div className="mono" style={{ color: 'var(--blue)', marginBottom: 10, fontSize: 10 }}>FOR BANKS & ENTERPRISE</div>
              <h3 className="display-sm" style={{ marginBottom: 8 }}>Ready to see it live?</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', fontWeight: 300, marginBottom: 20 }}>
                Request a pilot. We'll walk you through the full platform — Bank, Anchor, and Supplier portals — in a live session.
              </p>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Request a Pilot</a>
            </div>
            <div className="cta-strip-col">
              <div className="mono" style={{ color: 'var(--gray)', marginBottom: 10, fontSize: 10 }}>FOR INVESTORS</div>
              <h3 className="display-sm" style={{ marginBottom: 8 }}>Investing in trade finance infrastructure?</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray)', fontWeight: 300, marginBottom: 20 }}>
                Strike SCF is raising a $20M Seed Round. The platform is operational. The investment thesis is straightforward.
              </p>
              <a href="/contact" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/contact')}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, SolutionsPage, BanksPage, AnchorsPage, SuppliersPage, PlatformPage, ContactPage, POFinancingPage, InvoiceFactoringPage, ReverseFactoringPage, DynamicDiscountingPage, RedbookPage, AboutPage });

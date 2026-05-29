/* Pages: Home, Solutions, Banks, Anchors, Platform, Contact */

function HomePage() {
  return (
    <div className="page" data-screen-label="Home">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <TypewriterHero>
            <p className="hero-sub">
              Strike connects supplier risk, operational signals, and financing options so companies protect margin, continuity, and growth before disruption becomes failure. Built for CFOs, supply chain leaders, procurement teams, and the funders who support them.
            </p>
            <div className="hero-cta-row">
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
              <a href="/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>See the Platform</a>
            </div>
            <div style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.8 }}>
              BACKED BY INSTITUTIONAL PARTNERS · UN CEFACT ALIGNED · SOC 2 TYPE II · PILOT READY IN 90 DAYS
            </div>
          </TypewriterHero>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '18px 0', background: 'var(--white)' }}>
        {(() => {
          const items = ['UN CEFACT Aligned', 'World Bank Advisory Input', 'SOC 2 Type II', 'ISO 27001', '99.94% Uptime', '7 Industries Served', 'Pilot Ready in 90 Days', 'MAS / EBA / BCBS Reporting', 'Multi-Funder Architecture', 'Apparel', 'Manufacturing', 'Consumer Goods', 'Critical Materials', 'Logistics', 'Clean Tech'];
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
              <p style={{ marginTop: 24, maxWidth: '52ch', fontSize: 16, lineHeight: 1.7, color: 'var(--gray)', fontWeight: 300 }}>Every year, $2.5 trillion in trade finance goes unfunded. Suppliers wait months to be paid. Buyers lose good suppliers. Banks see the demand but cannot act fast enough. Strike is the layer that connects all three.</p>
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

      {/* REDBOOK LAUNCH */}
      <section className="section dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -160, top: '50%', transform: 'translateY(-50%)', width: 680, height: 680, background: 'radial-gradient(circle, rgba(0,82,255,0.15) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,82,255,0.1)', border: '1px solid rgba(0,82,255,0.3)', padding: '10px 20px', marginBottom: 40 }}>
            <span style={{ width: 7, height: 7, background: 'var(--blue)', flexShrink: 0, boxShadow: '0 0 0 3px rgba(0,82,255,0.22)', animation: 'badge-pulse 2.4s ease infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--blue)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>Now Launching</span>
          </div>
          <div className="row-2" style={{ alignItems: 'end', gap: 80 }}>
            <h2 className="display-lg" style={{ color: 'var(--white)', maxWidth: '18ch' }}>
              The Strike RedBook. The operating layer for resilient supply chains.
            </h2>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '48ch', marginBottom: 40 }}>
                Defining what a decisioning and liquidity orchestration platform must do. Built with a Customer Advisory Circle of buyers, suppliers, funders, and logistics partners. The first document of its kind.
              </p>
              <a href="/redbook" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/redbook')}>Read the RedBook</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSACTION FLOW */}
      <section className="section off">
        <div className="container">
          <SectionHead title="How a single invoice moves through the platform." />
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
      <section className="section dark">
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
      </section>

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
                <a href="/contact" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
                <a href="/platform" className="btn btn-ghost btn-arrow" style={{ borderColor: '#3A3F49', color: 'var(--white)' }} onClick={(e) => navTo(e, '/platform')}>See the Platform</a>
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
              <p className="body body-gray">Strike deploys alongside your existing ERP and banking relationships. Your treasury team retains full control. First supplier disbursement within the first 30 days of your pilot.</p>
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
            <h2 className="display-md" style={{ color: 'var(--white)', gridColumn: 'span 2' }}>Your existing systems keep working. Strike connects to them.</h2>
          </div>
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '44ch' }}>
                Strike plugs into the ERP, banking, and payments infrastructure your team already runs. No data migration, no re-platforming, no parallel systems. Your first financing decision can happen within the first 30 days of going live.
              </p>
              <FeatureList items={[
                { title: 'Connects to Your ERP', desc: 'Direct integrations with SAP, Oracle, NetSuite, and Microsoft Dynamics. Invoices flow from your existing payables cycle without any manual re-entry.' },
                { title: 'Works With Your Bank', desc: 'Strike operates alongside your existing banking relationships. Your funding bank keeps its credit processes. Strike provides the operational layer they plug into.' },
                { title: 'No Rip and Replace', desc: 'Strike is additive infrastructure. Every system your team uses today continues running. The platform layers intelligence and financing on top of what you already have.' },
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
        setFormError('Submission failed. Email us directly at hello@strikescf.com');
      }
    } catch {
      setFormError('Network error. Email us directly at hello@strikescf.com');
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
                <div><div className="k">GENERAL ENQUIRIES</div><div className="v">hello@strikescf.com</div></div>
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
                    Or email us directly: <a href="mailto:hello@strikescf.com" style={{ color: 'var(--blue)' }}>hello@strikescf.com</a>
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

/* ---------- SVG flow diagrams ---------- */

function FlowDiagramWrap({ children }) {
  return (
    <div className="flow-diagram-wrap">
      <div className="flow-diagram-topbar">
        <span>Process Simulation</span>
        <span className="page-badge-dot" />
      </div>
      {children}
    </div>
  );
}

function POFlowDiagram() {
  return (
    <FlowDiagramWrap>
      <svg viewBox="0 0 480 420" width="100%" style={{ display: 'block' }}>
        {/* Glow ring around Strike AI node */}
        <circle cx="240" cy="182" r="38" fill="none" stroke="rgba(0,82,255,0.12)" strokeWidth="1">
          <animate attributeName="r" values="34;44;34" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite" />
        </circle>

        {/* Connector lines */}
        <line x1="240" y1="86" x2="240" y2="158" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="240" y1="206" x2="240" y2="278" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="240" y1="326" x2="240" y2="358" stroke="#E5E7EB" strokeWidth="1" />

        {/* Node 1 — Buyer */}
        <rect x="140" y="34" width="200" height="52" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="240" y="55" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#6B7280" letterSpacing="2">BUYER</text>
        <text x="240" y="73" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Issues Purchase Order</text>

        {/* Node 2 — Strike AI */}
        <rect x="140" y="158" width="200" height="48" fill="none" stroke="#0052FF" strokeWidth="1.5" />
        <text x="240" y="178" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#0052FF" letterSpacing="2">STRIKE AI</text>
        <text x="240" y="197" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Scores the Opportunity</text>

        {/* Node 3 — Funder */}
        <rect x="140" y="278" width="200" height="48" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="240" y="298" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#6B7280" letterSpacing="2">FUNDER</text>
        <text x="240" y="317" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#FFFFFF">Disburses Capital</text>

        {/* Node 4 — pill outcome */}
        <rect x="160" y="358" width="160" height="36" fill="none" stroke="#0052FF" strokeWidth="1" />
        <text x="240" y="381" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="#0052FF" letterSpacing="1.5" fontWeight="600">SUPPLIER FUNDED</text>

        {/* Animated packets */}
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="0s" repeatCount="indefinite" />
          <animateMotion path="M240,86 L240,158" dur="2.4s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          <animateMotion path="M240,206 L240,278" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="3.5" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
          <animateMotion path="M240,326 L240,358" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
        </circle>

        {/* Bottom label */}
        <text x="240" y="414" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="2">LIVE PROCESS SIMULATION</text>
      </svg>
    </FlowDiagramWrap>
  );
}

function FactoringFlowDiagram() {
  return (
    <FlowDiagramWrap>
      <svg viewBox="0 0 480 380" width="100%" style={{ display: 'block' }}>
        {/* Glow ring around Strike node */}
        <circle cx="240" cy="190" r="36" fill="none" stroke="rgba(0,82,255,0.12)" strokeWidth="1">
          <animate attributeName="r" values="32;42;32" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Column labels */}
        <text x="80" y="42" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="1.5">SUPPLIER</text>
        <text x="240" y="42" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#0052FF" letterSpacing="1.5">STRIKE AI</text>
        <text x="400" y="42" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="1.5">FUNDER</text>

        {/* Supplier top box */}
        <rect x="20" y="52" width="120" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="80" y="70" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">SUBMITS</text>
        <text x="80" y="86" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Invoice</text>

        {/* Strike center box */}
        <rect x="180" y="166" width="120" height="48" fill="none" stroke="#0052FF" strokeWidth="1.5" />
        <text x="240" y="186" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#0052FF" letterSpacing="1">SCORES</text>
        <text x="240" y="204" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Instant Offer</text>

        {/* Funder top box */}
        <rect x="340" y="52" width="120" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="400" y="70" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">REVIEWS</text>
        <text x="400" y="86" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Offer Accepted</text>

        {/* Supplier bottom box */}
        <rect x="20" y="284" width="120" height="44" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="80" y="302" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">RECEIVES</text>
        <text x="80" y="318" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#FFFFFF">Funds Credited</text>

        {/* Funder bottom box */}
        <rect x="340" y="284" width="120" height="44" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="400" y="302" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">DISBURSES</text>
        <text x="400" y="318" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#FFFFFF">Capital</text>

        {/* Connector lines */}
        <line x1="140" y1="74" x2="180" y2="190" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="300" y1="190" x2="340" y2="74" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="340" y1="306" x2="140" y2="306" stroke="#E5E7EB" strokeWidth="1" />

        {/* Animated packets */}
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.2s" begin="0s" repeatCount="indefinite" />
          <animateMotion path="M140,74 L180,190" dur="2.2s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.2s" begin="0.75s" repeatCount="indefinite" />
          <animateMotion path="M300,190 L340,74" dur="2.2s" begin="0.75s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.2s" begin="1.5s" repeatCount="indefinite" />
          <animateMotion path="M340,306 L140,306" dur="2.2s" begin="1.5s" repeatCount="indefinite" />
        </circle>

        <text x="240" y="373" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="2">LIVE PROCESS SIMULATION</text>
      </svg>
    </FlowDiagramWrap>
  );
}

function ReverseFlowDiagram() {
  return (
    <FlowDiagramWrap>
      <svg viewBox="0 0 480 420" width="100%" style={{ display: 'block' }}>
        {/* Glow ring around Strike AI */}
        <circle cx="240" cy="198" r="36" fill="none" stroke="rgba(0,82,255,0.12)" strokeWidth="1">
          <animate attributeName="r" values="32;42;32" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite" />
        </circle>

        {/* Anchor — top dark box */}
        <rect x="140" y="34" width="200" height="52" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="240" y="54" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1.5">ANCHOR BUYER</text>
        <text x="240" y="72" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#FFFFFF">Approves Invoices</text>

        {/* Strike AI — center */}
        <rect x="140" y="172" width="200" height="52" fill="none" stroke="#0052FF" strokeWidth="1.5" />
        <text x="240" y="192" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#0052FF" letterSpacing="1.5">STRIKE AI</text>
        <text x="240" y="210" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Routes Financing</text>
        {/* Election rate badge */}
        <text x="240" y="232" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#0052FF" letterSpacing="1">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.3;0.45;0.85;1" dur="4s" repeatCount="indefinite" />
          74% ELECT RATE
        </text>

        {/* Supplier Left */}
        <rect x="20" y="318" width="120" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="80" y="337" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">SUPPLIER A</text>
        <text x="80" y="353" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Early Payment</text>

        {/* Supplier Center */}
        <rect x="180" y="318" width="120" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="240" y="337" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">SUPPLIER B</text>
        <text x="240" y="353" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Early Payment</text>

        {/* Supplier Right */}
        <rect x="340" y="318" width="120" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="400" y="337" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">SUPPLIER C</text>
        <text x="400" y="353" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="13" fontWeight="600" fill="#111318">Early Payment</text>

        {/* Connector lines */}
        <line x1="240" y1="86" x2="240" y2="172" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="240" y1="224" x2="80" y2="318" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="240" y1="224" x2="240" y2="318" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="240" y1="224" x2="400" y2="318" stroke="#E5E7EB" strokeWidth="1" />

        {/* Animated packets */}
        <circle cx="0" cy="0" r="4" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="0s" repeatCount="indefinite" />
          <animateMotion path="M240,86 L240,172" dur="2.4s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="3.5" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
          <animateMotion path="M240,224 L80,318" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="3.5" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="1.1s" repeatCount="indefinite" />
          <animateMotion path="M240,224 L240,318" dur="2.4s" begin="1.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="3.5" fill="#0052FF">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
          <animateMotion path="M240,224 L400,318" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
        </circle>

        <text x="240" y="414" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="2">LIVE PROCESS SIMULATION</text>
      </svg>
    </FlowDiagramWrap>
  );
}

function DiscountingFlowDiagram() {
  return (
    <FlowDiagramWrap>
      <svg viewBox="0 0 480 400" width="100%" style={{ display: 'block' }}>
        {/* Background orbit circle */}
        <circle cx="240" cy="200" r="120" fill="none" stroke="#E5E7EB" strokeWidth="1" />

        {/* Center label */}
        <text x="240" y="192" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="2">BUYER FUNDED</text>
        <text x="240" y="213" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="18" fontWeight="700" fill="#0052FF" letterSpacing="-0.02em">Yield</text>

        {/* TOP node — Buyer deploys cash */}
        <rect x="175" y="58" width="130" height="44" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="240" y="75" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1.5">BUYER</text>
        <text x="240" y="92" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="12" fontWeight="600" fill="#FFFFFF">Deploys Cash</text>

        {/* RIGHT node — Supplier funded */}
        <rect x="308" y="178" width="110" height="44" fill="none" stroke="#E5E7EB" strokeWidth="1" />
        <text x="363" y="196" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1.2">SUPPLIER</text>
        <text x="363" y="213" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="12" fontWeight="600" fill="#111318">Funded Early</text>

        {/* BOTTOM node — Anchor settles */}
        <rect x="175" y="298" width="130" height="44" fill="#111318" stroke="#111318" strokeWidth="1" />
        <text x="240" y="315" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1.5">ANCHOR</text>
        <text x="240" y="332" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="12" fontWeight="600" fill="#FFFFFF">Settles at Maturity</text>

        {/* LEFT node — Yield captured */}
        <rect x="62" y="178" width="110" height="44" fill="none" stroke="#0052FF" strokeWidth="1.5" />
        <text x="117" y="196" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#0052FF" letterSpacing="1.2">YIELD</text>
        <text x="117" y="213" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="12" fontWeight="600" fill="#0052FF">Captured</text>

        {/* Animated packets orbiting */}
        <circle cx="0" cy="0" r="5" fill="#0052FF" opacity="0.9">
          <animateMotion path="M240,80 A120,120 0 0,1 360,200 A120,120 0 0,1 240,320 A120,120 0 0,1 120,200 A120,120 0 0,1 240,80" dur="4s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="4" fill="#0052FF" opacity="0.5">
          <animateMotion path="M240,80 A120,120 0 0,1 360,200 A120,120 0 0,1 240,320 A120,120 0 0,1 120,200 A120,120 0 0,1 240,80" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>

        <text x="240" y="394" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#9AA0AB" letterSpacing="2">LIVE PROCESS SIMULATION</text>
      </svg>
    </FlowDiagramWrap>
  );
}

/* ---------- PO FINANCING ---------- */
function POFinancingPage() {
  return (
    <div className="page" data-screen-label="POFinancing">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>Fund purchase orders before production begins.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>Strike enables buyers to finance supplier purchase orders at the point of commitment, not after delivery. Suppliers get the cash to produce. Buyers protect their supply chain before disruption hits.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How PO Financing works on Strike.</h2>
              <FeatureList items={[
                { title: 'Buyer Issues PO', desc: 'The anchor buyer issues a purchase order to a strategic supplier. The PO is submitted to Strike for financing consideration.' },
                { title: 'Strike Scores the Opportunity', desc: 'Strike AI evaluates the supplier, the buyer relationship, the PO value, and the risk profile. A financing recommendation is returned in under one second.' },
                { title: 'Funder Approves and Disburses', desc: "The approved funder releases capital directly to the supplier against the PO. The supplier can begin production without waiting for invoice approval." },
                { title: 'Repayment on Invoice Maturity', desc: "When the buyer receives goods and approves the invoice, repayment flows through Strike back to the funder. The anchor's balance sheet is not extended." },
              ]} />
            </div>
            <POFlowDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '22ch' }}>Ready to protect your production before it starts?</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
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
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Invoice Factoring works on Strike.</h2>
              <FeatureList items={[
                { title: 'Invoice Submitted', desc: 'The supplier submits an approved invoice through the Strike portal or via ERP integration. Anchor approval is already confirmed.' },
                { title: 'Instant Offer', desc: 'Strike AI scores the invoice and returns a factoring offer with the exact net amount and annualised rate. No negotiation, no callbacks.' },
                { title: 'Supplier Accepts', desc: 'One click to accept. Funds are released to the supplier\'s nominated account the same business day in most markets.' },
                { title: 'Anchor Settles at Maturity', desc: "On the original payment due date, the anchor settles the full invoice amount directly to the funder. No change to the anchor's payment process." },
              ]} />
            </div>
            <FactoringFlowDiagram />
          </div>
        </div>
      </section>
      <section className="section off">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'center' }}>
            <h2 className="display-md" style={{ maxWidth: '22ch' }}>Turn your receivables into working capital today.</h2>
            <div>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
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
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Reverse Factoring works on Strike.</h2>
              <FeatureList items={[
                { title: 'Anchor Configures the Program', desc: 'The anchor sets supplier eligibility, payment terms, pricing tiers, and currencies. The program is live in days, not quarters.' },
                { title: 'Suppliers Self-Elect', desc: 'Enrolled suppliers see early payment offers in the portal as their invoices are approved. They choose which invoices to accelerate and which to hold to maturity.' },
                { title: 'Funder Pays Suppliers Early', desc: "Strike routes the early payment to the supplier from the approved funding bank or private credit partner. The funder carries the credit risk, not the anchor." },
                { title: 'Anchor Pays on Original Terms', desc: 'The anchor pays the funder on the original invoice maturity date. DSO is extended. Working capital is optimized. Balance sheet treatment remains off-balance-sheet.' },
              ]} />
            </div>
            <ReverseFlowDiagram />
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
              <h2 className="display-md" style={{ marginBottom: 28, maxWidth: '22ch' }}>How Dynamic Discounting works on Strike.</h2>
              <FeatureList items={[
                { title: 'Buyer Sets the Discount Rate', desc: 'The anchor defines a sliding scale of discount rates by days paid early. The earlier the payment, the higher the annualised yield captured by the buyer.' },
                { title: 'Suppliers Choose Their Terms', desc: 'Suppliers see the available offer in the portal and choose when to accept. Full transparency on the rate and the net amount at every point.' },
                { title: 'Instant Settlement from Buyer Cash', desc: 'Strike handles the settlement. The buyer\'s cash is deployed, the supplier receives funds, and the transaction is booked and reconciled automatically.' },
                { title: 'Yield Captured by the Buyer', desc: 'The early payment discount is recorded as income for the anchor. Strike produces the audit trail and reconciliation reports for your treasury team.' },
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
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
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
          <h1 className="display-lg" style={{ maxWidth: '20ch' }}>The Strike RedBook.<br></br> Defining the operating layer for resilient supply chains.</h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>The RedBook is Strike's market-shaping document. Built with a Customer Advisory Circle of buyers, suppliers, funders, and logistics partners, it defines what a decisioning and liquidity orchestration platform must do to make global supply chains more resilient, better financed, and faster to act under disruption.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2 className="display-md" style={{ color: 'var(--white)', maxWidth: '22ch', marginBottom: 32 }}>Why the RedBook exists.</h2>
          <p className="lead" style={{ color: '#C8CDD6', maxWidth: '62ch' }}>Global supply chains are exposed to geopolitical disruption, tariff volatility, supplier fragility, financing gaps, and logistics uncertainty. Companies need more than dashboards. They need a common operating layer that can decide what to fund, reroute, prioritize, or escalate before disruption becomes failure. The RedBook defines that layer.</p>
        </div>
      </section>

      <section className="section off">
        <div className="container">
          <SectionHead title="Four chapters the Advisory Circle is validating." />
          <div className="row-4">
            {[
              { t: 'The New Supply Chain Reality', d: 'Geopolitical disruption, tariff shifts, and supplier fragility are no longer edge cases. They are the operating environment.' },
              { t: 'The Problem With Current Systems', d: 'Dashboards show risk. They do not resolve it. Traditional SCF pays invoices. It does not protect production.' },
              { t: 'The Required Future State', d: 'A decisioning and liquidity orchestration layer that connects risk signals, operational data, and capital in one place.' },
              { t: 'The Platform Architecture', d: 'Common core. Industry configuration. Country configuration. Company adoption. User experience. Built to deploy fast.' },
            ].map((c, i) => (
              <div key={i} style={{ padding: 36, background: 'var(--white)', borderTop: '2px solid var(--ink)' }}>
                <h3 className="display-sm" style={{ marginTop: 16 }}>{c.t}</h3>
                <p className="body body-gray" style={{ marginTop: 12, fontSize: 15 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="mono" style={{ color: 'var(--blue)', marginBottom: 20 }}>STRIKE REDBOOK ADVISORY CIRCLE</div>
              <h2 className="display-md" style={{ maxWidth: '22ch', marginBottom: 24 }}>
                You are not being sold software. You are being invited into something strategic.
              </h2>
              <p className="body body-gray" style={{ maxWidth: '48ch', marginBottom: 20 }}>
                Strike is inviting selected companies in logistics, clean tech, critical materials, manufacturing, and supply chain finance to help define the next generation decisioning and liquidity orchestration layer for resilient global supply chains.
              </p>
              <p className="body body-gray" style={{ maxWidth: '48ch', marginBottom: 32 }}>
                Advisory Circle members shape the Strike RedBook, validate platform priorities, and gain early access before general availability. No purchasing obligation. No competitive disclosure. Just a seat at the table where the operating layer for resilient trade is being built.
              </p>
              <a href="/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Request an Invitation</a>
            </div>
            <div>
              {[
                { label: 'ANCHOR BUYERS', value: 'CFOs, treasurers, and supply chain leaders who want to protect continuity and optimize working capital before the next disruption.' },
                { label: 'STRATEGIC SUPPLIERS', value: 'Finance and operations leaders who want faster access to capital and a stronger position in their buyer relationships.' },
                { label: 'FUNDERS', value: 'Banks and private credit partners who want a curated, risk-scored pipeline of supply chain finance opportunities.' },
                { label: 'LOGISTICS PARTNERS', value: 'Freight, customs, and trade compliance firms who want disruption signals connected to financial decisioning.' },
              ].map((p, i) => (
                <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{p.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--ink)', marginTop: 8, lineHeight: 1.6, maxWidth: '42ch' }}>{p.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, SolutionsPage, BanksPage, AnchorsPage, SuppliersPage, PlatformPage, ContactPage, POFinancingPage, InvoiceFactoringPage, ReverseFactoringPage, DynamicDiscountingPage, RedbookPage });

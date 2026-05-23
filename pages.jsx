/* Pages: Home, Solutions, Banks, Anchors, Platform, Contact */

function HomePage() {
  return (
    <div className="page" data-screen-label="Home">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <TypewriterHero>
            <p className="hero-sub">
              Strike SCF is the platform that funding banks, anchor corporates, and their suppliers use to originate, price, and settle supply chain finance — at scale, on a single ledger.
            </p>
            <div className="hero-cta-row">
              <a href="#/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Request a Pilot</a>
              <a href="#/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>Read Architecture</a>
            </div>
          </TypewriterHero>
          <div className="hero-meta">
            <div><div className="k">SERVICING</div><div className="v">7+ Industries</div></div>
            <div><div className="k">SETTLEMENT ASA</div><div className="v">Less than 1 Hour</div></div>
            <div><div className="k">UPTIME</div><div className="v">99.94%</div></div>
            <div><div className="k">COMPLIANCE</div><div className="v">SOC 2 · ISO 27001</div></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section bare" style={{ paddingTop: 120 }}>
        <div className="container">
          <SectionHead
            title="Infrastructure for the $2.5 trillion trade finance gap."
            // kicker="LIVE · 2026 YTD"
          />
          <div className="row-3">
            <Stat
              value="$2.5T"
              label="WW ANNUAL FINANCING GAP"
              desc="The annual global trade finance shortfall per IFC and ICC estimates. SME suppliers in emerging markets bear the majority of unmet financing demand."
            />
            <Stat
              value="<7 Days"
              label="TO FUND INVOICES"
              desc="From invoice submission to funds credited in the supplier's nominated account, inclusive of anchor approval and bank disbursement."
              blue
            />
            <Stat
              value="1ms"
              label="UPDATE TIME"
              desc="Real-time ledger propagation across all program participants. Every approval, disbursement, and repayment reflected instantly across all parties."
            />
          </div>
        </div>
      </section>

      {/* TRANSACTION FLOW */}
      <section className="section">
        <div className="container">
          {/* <SectionHead
            eyebrow="TRANSACTION FLOW"
            title="One invoice. Six steps. Auditable end to end."
            kicker="REFERENCE TRANSACTION · SINGLE INVOICE"
          /> */}
          <TransactionFlow />
        </div>
      </section>

      {/* WHO IT SERVES */}
      <section className="section off">
        <div className="container">
          <SectionHead
            title="Built for the three counterparties of every trade finance transaction."
          />
          <div className="row-3" style={{ background: 'var(--border)' }}>
            {[
              {
                k: 'COUNTERPARTY A',
                t: 'Banks',
                d: 'Originate and underwrite SCF programs against existing anchor relationships. Manage limits, pricing, and exposure inside a single risk surface.',
                cta: 'For Banks', path: '/banks'
              },
              {
                k: 'COUNTERPARTY B',
                t: 'Anchor Corporates',
                d: 'Extend working capital to your supplier base without expanding the balance sheet. Approve invoices, review program rules, monitor utilisation.',
                cta: 'For Anchors', path: '/anchors'
              },
              {
                k: 'COUNTERPARTY C',
                t: 'Suppliers',
                d: 'Receive funds against approved invoices within hours. No paperwork, no separate credit application, transparent pricing per invoice.',
                cta: 'For Suppliers', path: '/suppliers'
              },
            ].map((c, i) => (
              <div key={i} className="counterparty-card">
                <h3 className="display-md" style={{ fontSize: 40 }}>{c.t}</h3>
                <p className="body body-gray" style={{ fontSize: 15, maxWidth: '36ch' }}>{c.d}</p>
                <a href={'#' + c.path} className="mono" style={{ color: 'var(--blue)', marginTop: 'auto', letterSpacing: '0.14em', textTransform: 'uppercase' }} onClick={(e) => navTo(e, c.path)}>
                  {c.cta} →
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
            <div className="side">
              {/* <div className="mono" style={{ color: 'var(--gray-soft)' }}>INTELLIGENCE LAYER</div> */}
            </div>
            <h2 className="display-md" style={{ color: 'var(--white)', maxWidth: '22ch' }}>
              A co-pilot for the trade finance desk. Not a chatbot.
            </h2>
          </div>

          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '46ch' }}>
                Strike AI sits between origination and approval. It scores risk on every incoming financing request, surfaces anomalies against historical patterns, and recommends pricing — leaving the decision with your credit officers.
              </p>
              <div className="kv-block" style={{ borderColor: '#222730', marginTop: 40 }}>
                <div><div className="k" style={{ color: 'var(--gray-soft)' }}>MODELS IN PRODUCTION</div><div className="v" style={{ color: 'var(--white)' }}>14</div></div>
                <div><div className="k" style={{ color: 'var(--gray-soft)' }}>SIGNALS PER DECISION</div><div className="v" style={{ color: 'var(--white)' }}>312</div></div>
              </div>
              <div className="kv-block" style={{ borderColor: '#222730' }}>
                <div><div className="k" style={{ color: 'var(--gray-soft)' }}>FALSE-POSITIVE RATE</div><div className="v" style={{ color: 'var(--blue)' }}>0.41%</div></div>
                <div><div className="k" style={{ color: 'var(--gray-soft)' }}>DECISION LATENCY</div><div className="v" style={{ color: 'var(--white)' }}>820 ms</div></div>
              </div>
              <div style={{ marginTop: 32 }}>
                <a href="#/solutions" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/solutions')}>See Strike AI</a>
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
              Run a 60-day pilot on your existing program.
            </h2>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '46ch' }}>
                We deploy alongside your existing core banking and ERP stack. No data migration, no re-platforming. First disbursement inside 30 days.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
                <a href="#/contact" className="btn btn-light btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Sales</a>
                <a href="#/platform" className="btn btn-ghost btn-arrow" style={{ borderColor: '#3A3F49', color: 'var(--white)' }} onClick={(e) => navTo(e, '/platform')}>Read Architecture</a>
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
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Platform Solutions
          </div> */}
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
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Funding Banks
          </div> */}
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
                <a href="#/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Request Briefing</a>
                <a href="#/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>Technical Spec</a>
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
          <SectionHead title="From signed term sheet to first disbursement in under 30 days." />
          <div className="row-4">
            {[
              { n: 'W 01', t: 'Discovery', d: 'Program design workshop with credit, ops, and treasury.' },
              { n: 'W 02', t: 'Integration', d: 'Core banking and payment rail connectors. Sandboxed.' },
              { n: 'W 03', t: 'Anchor Onboarding', d: 'Anchor sign-off, supplier list, KYC seeding.' },
              { n: 'W 04', t: 'First Disbursement', d: 'Production go-live with operational runbook.' },
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
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Anchor Corporates
          </div> */}
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
                <a href="#/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Schedule Treasury Brief</a>
                <a href="#/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>How It Works</a>
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
    </div>
  );
}

/* ---------- PLATFORM ---------- */
function PlatformPage() {
  return (
    <div className="page" data-screen-label="Platform">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Technical Architecture · v4.12
          </div> */}
          <h1 className="display-lg" style={{ maxWidth: '20ch' }}>
            Built as financial infrastructure. Not a SaaS dashboard.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '60ch' }}>
            Strike SCF runs as a single multi-tenant platform with hard isolation per institution. Designed for deployment across all markets worldwide.
          </p>
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
          <SectionHead eyebrow="TRANSACTION FLOW" title="Reference transaction flow." />
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

      {/* API SAMPLE */}
      <section className="section dark">
        <div className="container">
          <div className="section-head" style={{ borderColor: '#222730' }}>
            <h2 className="display-md" style={{ color: 'var(--white)', gridColumn: 'span 2' }}>Documented REST + GraphQL surfaces. SDKs for Java, Python, and Go.</h2>
          </div>
          <div className="row-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="lead" style={{ color: '#C8CDD6', maxWidth: '44ch' }}>
                Submit an invoice. Get back a decision and a disbursement reference. Every call signed, every payload schema-validated, every event published to your event bus.
              </p>
              <FeatureList items={[
                { title: 'Auth', desc: 'OAuth 2.0 client credentials + mTLS for production scopes.' },
                { title: 'Schemas', desc: 'OpenAPI 3.1 and GraphQL SDL published per release with semantic versioning.' },
                { title: 'Webhooks', desc: 'Signed events for state transitions: invoice.approved, invoice.disbursed, invoice.repaid.' },
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
    name: '', title: '', org: '', email: '', phone: '', role: 'Bank', volume: '$100M – $500M', notes: ''
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError('');
    try {
      const res = await fetch('https://formspree.io/f/mojbwblo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Submission failed. Please email us at support@strikescf.com');
      }
    } catch {
      setFormError('Network error. Please email us at support@strikescf.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" data-screen-label="Contact">
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Response Within One Business Day
          </div> */}
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
                <div><div className="k">BANK ORIGINATION</div><div className="v">banks@strikescf.com</div></div>
                <div><div className="k">ANCHOR PROGRAMS</div><div className="v">treasury@strikescf.com</div></div>
              </div>
              <div className="kv-block">
                <div><div className="k">SUPPLIER INVOICING</div><div className="v">suppliers@strikescf.com</div></div>
                <div><div className="k">Misc.</div><div className="v">support@strikescf.com</div></div>
              </div>
              <div className="kv-block">
                <div><div className="k">NEW YORK CITY · HQ</div><div className="v">123 Main St, NY</div></div>
                <div><div className="k">VANCOUVER</div><div className="v">123 Main St, BC</div></div>
              </div>
            </div>

            <div>
              {!submitted ? (
                <form className="form" onSubmit={submit} style={{ marginTop: 24 }}>
                  <div className="field">
                    <label>Full name</label>
                    <input required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div className="field">
                    <label>Title</label>
                    <input required value={form.title} onChange={e => set('title', e.target.value)} placeholder="Head of Trade Finance" />
                  </div>
                  <div className="field">
                    <label>Organisation</label>
                    <input required value={form.org} onChange={e => set('org', e.target.value)} placeholder="Institution name" />
                  </div>
                  <div className="field">
                    <label>Counterparty type</label>
                    <select value={form.role} onChange={e => set('role', e.target.value)}>
                      <option>Bank</option>
                      <option>Anchor Corporate</option>
                      <option>Asset Manager</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Work email</label>
                    <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="name@institution.com" />
                  </div>
                  <div className="field">
                    <label>Direct line</label>
                    <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+65 6•••• ••••" />
                  </div>
                  <div className="field full">
                    <label>Estimated program volume</label>
                    <select value={form.volume} onChange={e => set('volume', e.target.value)}>
                      <option>Below $100M / yr</option>
                      <option>$100M – $500M</option>
                      <option>$500M – $2B</option>
                      <option>$2B – $10B</option>
                      <option>Above $10B</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>Notes</label>
                    <textarea value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Program scope, geographies in focus, existing infrastructure." />
                  </div>
                  <div className="full checkbox-row">
                    <input type="checkbox" required id="cb" /> <label htmlFor="cb" style={{ fontFamily: 'var(--font-body)', textTransform: 'none', letterSpacing: 0, color: 'var(--gray)', fontSize: 13 }}>I consent to Strike SCF processing this information under the terms of the Data Processing Notice.</label>
                  </div>
                  {formError && (
                    <div className="full" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#c0392b', letterSpacing: '0.08em', marginTop: 4 }}>
                      {formError}
                    </div>
                  )}
                  <div className="full" style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                    <button type="submit" className="btn btn-blue btn-arrow" disabled={loading}>
                      {loading ? 'Sending…' : 'Submit Request'}
                    </button>
                    <span className="mono" style={{ color: 'var(--gray)', alignSelf: 'center' }}>RESPONSE · WITHIN ONE BUSINESS DAY</span>
                  </div>
                </form>
              ) : (
                <div className="card" style={{ marginTop: 24 }}>
                  <div className="mono" style={{ color: 'var(--blue)' }}>REQUEST · RECEIVED</div>
                  <div className="display-md" style={{ fontSize: 36, marginTop: 16 }}>Thank you, {form.name || 'we have your details'}.</div>
                  <p className="body body-gray" style={{ marginTop: 16, maxWidth: '52ch' }}>
                    A member of the {form.role === 'Bank' ? 'Bank Origination' : form.role === 'Anchor Corporate' ? 'Anchor Programs' : 'Partnerships'} desk will reach out to <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{form.email || 'your email'}</strong> within one business day. Reference number <strong style={{ color: 'var(--blue)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>SCF-26-{Math.floor(Math.random() * 90000 + 10000)}</strong>.
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
          {/* <div className="page-badge">
            <span className="page-badge-dot"></span>
            Early Payment · Suppliers
          </div> */}
          <h1 className="display-lg" style={{ maxWidth: '18ch' }}>
            Get paid on your invoices within hours, not months.
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
                <a href="#/contact" className="btn btn-blue btn-arrow" onClick={(e) => navTo(e, '/contact')}>Talk to Your Anchor</a>
                <a href="#/platform" className="btn btn-ghost btn-arrow" onClick={(e) => navTo(e, '/platform')}>How It Works</a>
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

Object.assign(window, { HomePage, SolutionsPage, BanksPage, AnchorsPage, SuppliersPage, PlatformPage, ContactPage });

/* App shell with history API router */

function App() {
  const getRoute = () => window.location.pathname || '/';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const titles = {
      '/': 'Strike SCF | AI-Native Supply Chain Finance Platform',
      '/about': 'About Strike SCF | AI-Native Supply Chain Finance Platform',
      '/banks': 'For Banks | Strike SCF — Originate and Underwrite SCF Programs',
      '/anchors': 'For Anchor Corporates | Strike SCF — Supply Chain Finance',
      '/suppliers': 'For Suppliers | Strike SCF — Early Payment and Invoice Finance',
      '/contact': 'Contact Strike SCF | Request a Pilot',
      '/programs/po-financing': 'PO Financing | Strike SCF — Finance Purchase Orders Pre-Shipment',
      '/programs/invoice-factoring': 'Invoice Factoring | Strike SCF — Sell Receivables for Immediate Capital',
      '/programs/reverse-factoring': 'Reverse Factoring | Strike SCF — Buyer-Led Supplier Finance',
      '/programs/dynamic-discounting': 'Dynamic Discounting | Strike SCF — Deploy Your Own Cash, Capture the Discount',
      '/redbook': 'The Strike SCF RedBook | Defining the Future of Supply Chain Finance',
      '/redbook/co-pilot-to-counterparty': 'From Co-Pilot to Counterparty | Strike SCF Red Paper No. 1',
    };
    const descriptions = {
      '/': 'Strike SCF is an AI-native supply chain finance platform. Banks originate programs, anchor corporates extend working capital, and suppliers receive early payment — all on one intelligent platform.',
      '/about': 'Learn about Strike SCF — the AI-native supply chain finance platform built by a team of institutional finance veterans and world-class technologists. The infrastructure layer for global trade.',
      '/banks': 'Strike SCF gives banks a structured SCF origination platform. Create programs, onboard anchor-supplier networks, manage KYB, approve financing, and monitor portfolio risk in one system.',
      '/anchors': 'Strike SCF helps anchor corporates extend early payment to their supplier base without balance sheet impact. Approve invoices, manage programs, and protect supply continuity.',
      '/suppliers': 'Access early payment against approved invoices through your anchor\'s Strike SCF program. No separate credit application. Transparent pricing. Funds within hours of approval.',
      '/contact': 'Talk to the Strike SCF team. Request a pilot, ask about bank onboarding, or learn how to extend your SCF program to your supplier base.',
      '/programs/po-financing': 'Finance supplier purchase orders at the point of commitment. Strike SCF PO Financing lets banks fund production before goods are delivered — protecting supplier cash flow at the source.',
      '/programs/invoice-factoring': 'Suppliers sell approved receivables to the bank directly for immediate working capital. No anchor approval required at submission. Strike SCF Invoice Factoring.',
      '/programs/reverse-factoring': 'Buyer-led supply chain finance using anchor credit to fund the entire supplier base. Strike SCF Reverse Factoring — the most widely deployed SCF structure globally.',
      '/programs/dynamic-discounting': 'Anchor corporates deploy their own cash to pay suppliers early and capture the early payment discount as income. Strike SCF Dynamic Discounting — no bank required.',
      '/redbook': 'The Strike SCF RedBook defines the next generation of supply chain finance and liquidity orchestration. A strategic market intelligence publication for CFOs, treasurers, and heads of trade finance.',
      '/redbook/co-pilot-to-counterparty': 'How autonomous AI agents are closing the $2.5 trillion trade finance gap — and why open networks are the prerequisite. Strike SCF Red Paper No. 1 on agentic AI in supply chain finance.',
    };

    const canonicalPath = titles[route] ? route : '/';
    const canonicalUrl = 'https://www.strikescf.com' + (canonicalPath === '/' ? '/' : canonicalPath);
    const title = titles[route] || titles['/'];
    const desc = descriptions[route] || descriptions['/'];

    document.title = title;

    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', 'content', desc);
    set('link[rel="canonical"]', 'href', canonicalUrl);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', desc);
    set('meta[property="og:url"]', 'content', canonicalUrl);
    set('meta[property="og:type"]', 'content', route.startsWith('/redbook/') ? 'article' : 'website');
    set('meta[name="twitter:title"]', 'content', title);
    set('meta[name="twitter:description"]', 'content', desc);

    /* Article-level JSON-LD — injected only on article pages, removed on navigation away */
    const existingLd = document.getElementById('article-ld');
    if (route === '/redbook/co-pilot-to-counterparty') {
      const ld = {
        '@context': 'https://schema.org',
        '@type': 'ScholarlyArticle',
        'headline': 'From Co-Pilot to Counterparty: How Autonomous AI Agents Are Rewriting the Rules of Trade Finance',
        'description': descriptions['/redbook/co-pilot-to-counterparty'],
        'url': 'https://www.strikescf.com/redbook/co-pilot-to-counterparty',
        'datePublished': '2026-06-26',
        'dateModified': '2026-06-26',
        'author': { '@type': 'Organization', 'name': 'Strike SCF', '@id': 'https://www.strikescf.com/#organization' },
        'publisher': { '@id': 'https://www.strikescf.com/#organization' },
        'isPartOf': { '@type': 'Periodical', 'name': 'Strike SCF Red Paper Series', 'url': 'https://www.strikescf.com/redbook' },
        'about': [
          { '@type': 'Thing', 'name': 'Agentic AI' },
          { '@type': 'Thing', 'name': 'Trade Finance' },
          { '@type': 'Thing', 'name': 'Supply Chain Finance' },
          { '@type': 'Thing', 'name': 'Autonomous AI Agents' },
          { '@type': 'Thing', 'name': 'Open Network Finance' },
        ],
        'keywords': 'agentic AI trade finance, AI agents supply chain finance, trade finance gap, autonomous AI procurement, open network trade finance, supply chain finance 2026',
        'wordCount': 3600,
        'inLanguage': 'en-US',
        'license': 'https://www.strikescf.com/redbook',
      };
      if (!existingLd) {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = 'article-ld';
        s.text = JSON.stringify(ld);
        document.head.appendChild(s);
      } else {
        existingLd.text = JSON.stringify(ld);
      }
    } else if (existingLd) {
      existingLd.remove();
    }
  }, [route]);

  let Page = HomePage;
  // else if (route === '/solutions') Page = SolutionsPage;
  if (route === '/about') Page = AboutPage;
  else if (route === '/banks') Page = BanksPage;
  else if (route === '/anchors') Page = AnchorsPage;
  else if (route === '/suppliers') Page = SuppliersPage;
  // else if (route === '/platform') Page = PlatformPage;
  else if (route === '/contact') Page = ContactPage;
  else if (route === '/programs/po-financing') Page = POFinancingPage;
  else if (route === '/programs/invoice-factoring') Page = InvoiceFactoringPage;
  else if (route === '/programs/reverse-factoring') Page = ReverseFactoringPage;
  else if (route === '/programs/dynamic-discounting') Page = DynamicDiscountingPage;
  else if (route === '/redbook') Page = RedbookPage;
  else if (route === '/redbook/co-pilot-to-counterparty') Page = RedPaperCopilotPage;

  return (
    <React.Fragment>
      <Nav route={route} />
      <main key={route}>
        <Page />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

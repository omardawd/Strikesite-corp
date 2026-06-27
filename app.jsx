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
    /* ── Titles & descriptions ── */
    const titles = {
      '/': 'Strike SCF | AI-Native Supply Chain Finance Platform',
      '/about': 'About Strike SCF | AI-Native Supply Chain Finance Platform',
      '/banks': 'For Banks | Strike SCF — Originate and Underwrite SCF Programs',
      '/anchors': 'For Anchor Corporates | Strike SCF — Supply Chain Finance',
      '/suppliers': 'For Suppliers | Strike SCF — Early Payment and Invoice Finance',
      '/contact': 'Contact Strike SCF | Request a Pilot',
      '/programs/po-financing': 'Purchase Order Financing | Strike SCF — Fund Production Before Shipment',
      '/programs/invoice-factoring': 'Invoice Factoring | Strike SCF — Sell Receivables for Immediate Capital',
      '/programs/reverse-factoring': 'Reverse Factoring | Strike SCF — Buyer-Led Supplier Finance',
      '/programs/dynamic-discounting': 'Dynamic Discounting | Strike SCF — Deploy Your Own Cash, Capture the Discount',
      '/redbook': 'The Strike SCF RedBook | Defining the Future of Supply Chain Finance',
      '/redbook/co-pilot-to-counterparty': 'From Co-Pilot to Counterparty | Strike SCF RedBook',
    };
    const descriptions = {
      '/': 'Strike SCF is an AI-native supply chain finance platform connecting banks, anchor corporates, and suppliers. Reverse factoring, invoice factoring, PO financing, and dynamic discounting — on one platform.',
      '/about': 'Learn about Strike SCF — the AI-native supply chain finance platform built by a team of institutional finance veterans and world-class technologists. The infrastructure layer for global trade.',
      '/banks': 'Strike SCF gives banks a structured SCF origination platform. Create programs, onboard anchor-supplier networks, manage KYB, approve financing, and monitor portfolio risk in one system.',
      '/anchors': 'Strike SCF helps anchor corporates extend early payment to their supplier base without balance sheet impact. Approve invoices, manage programs, and protect supply continuity.',
      '/suppliers': "Access early payment against approved invoices through your anchor's Strike SCF program. No separate credit application. Transparent pricing. Funds within hours of approval.",
      '/contact': 'Talk to the Strike SCF team. Request a pilot, ask about bank onboarding, or learn how to extend your SCF program to your supplier base.',
      '/programs/po-financing': "Finance supplier purchase orders at the point of commitment. Strike SCF lets banks fund production before goods ship — protecting supplier cash flow before the invoice exists.",
      '/programs/invoice-factoring': 'Suppliers sell approved receivables to the bank directly for immediate working capital. No anchor approval required at submission. Strike SCF Invoice Factoring.',
      '/programs/reverse-factoring': 'Buyer-led supply chain finance using anchor credit to fund the entire supplier base. Strike SCF Reverse Factoring — the most widely deployed SCF structure globally.',
      '/programs/dynamic-discounting': 'Anchor corporates deploy their own cash to pay suppliers early and capture the early payment discount as income. Strike SCF Dynamic Discounting — no bank required.',
      '/redbook': 'The Strike SCF RedBook defines the next generation of supply chain finance and liquidity orchestration. A strategic market intelligence publication for CFOs, treasurers, and heads of trade finance.',
      '/redbook/co-pilot-to-counterparty': "The $2.5 trillion trade finance gap isn't a capital problem — it's a coordination problem. This Red Paper makes the case for agentic AI on open networks.",
    };

    /* ── OG images per route ── */
    const ogImages = {
      '/redbook/co-pilot-to-counterparty': 'https://www.strikescf.com/assets/og-redpaper-1.png',
    };
    const DEFAULT_OG_IMAGE = 'https://www.strikescf.com/assets/og-image.png';

    const canonicalPath = titles[route] ? route : '/';
    const canonicalUrl = 'https://www.strikescf.com' + (canonicalPath === '/' ? '/' : canonicalPath);
    const title = titles[route] || titles['/'];
    const desc = descriptions[route] || descriptions['/'];
    const ogImage = ogImages[route] || DEFAULT_OG_IMAGE;
    const isArticle = route.startsWith('/redbook/');

    document.title = title;

    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', 'content', desc);
    set('link[rel="canonical"]', 'href', canonicalUrl);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', desc);
    set('meta[property="og:url"]', 'content', canonicalUrl);
    set('meta[property="og:type"]', 'content', isArticle ? 'article' : 'website');
    set('meta[property="og:image"]', 'content', ogImage);
    set('meta[property="og:image:alt"]', 'content', isArticle ? title : 'Strike SCF — Decisioning and liquidity orchestration for resilient supply chains');
    set('meta[property="article:published_time"]', 'content', route === '/redbook/co-pilot-to-counterparty' ? '2026-06-26' : '');
    set('meta[property="article:section"]', 'content', route === '/redbook/co-pilot-to-counterparty' ? 'Trade Finance' : '');
    set('meta[name="twitter:title"]', 'content', title);
    set('meta[name="twitter:description"]', 'content', desc);
    set('meta[name="twitter:image"]', 'content', ogImage);

    /* ── Dynamic JSON-LD blocks ── */
    document.querySelectorAll('script[data-dld]').forEach(s => s.remove());

    const ldMap = {
      '/redbook/co-pilot-to-counterparty': [
        {
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          'headline': 'From Co-Pilot to Counterparty: How Autonomous AI Agents Are Rewriting the Rules of Trade Finance',
          'description': "The $2.5 trillion trade finance gap isn't a capital problem — it's a coordination problem. This paper argues agentic AI is the first genuine architectural response, but only on open networks.",
          'datePublished': '2026-06-26',
          'author': { '@type': 'Organization', 'name': 'Strike SCF Research' },
          'publisher': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'url': 'https://www.strikescf.com/redbook/co-pilot-to-counterparty',
          'inLanguage': 'en',
          'keywords': ['trade finance', 'agentic AI', 'supply chain finance', 'autonomous agents', 'open networks', 'SCF platform'],
        },
      ],
      '/redbook': [
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': 'The Strike SCF RedBook',
          'description': 'Strategic market intelligence for CFOs, treasurers, and heads of trade finance. Long-form analysis on supply chain finance, AI, and liquidity orchestration.',
          'url': 'https://www.strikescf.com/redbook',
          'publisher': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'blogPost': [
            {
              '@type': 'BlogPosting',
              'headline': 'From Co-Pilot to Counterparty: How Autonomous AI Agents Are Rewriting the Rules of Trade Finance',
              'url': 'https://www.strikescf.com/redbook/co-pilot-to-counterparty',
              'datePublished': '2026-06-26',
              'author': { '@type': 'Organization', 'name': 'Strike SCF Research' },
            },
          ],
        },
      ],
      '/programs/reverse-factoring': [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Reverse Factoring',
          'alternateName': 'Supplier Finance / Approved Payables Finance',
          'description': 'Buyer-led supply chain finance that uses anchor corporate credit to fund early payment across an entire supplier base. No balance sheet impact for the buyer.',
          'provider': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'serviceType': 'Supply Chain Finance',
          'areaServed': 'Worldwide',
          'url': 'https://www.strikescf.com/programs/reverse-factoring',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is reverse factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Reverse factoring (also called supplier finance or approved payables finance) is a buyer-led financing arrangement where a bank pays a supplier early based on the buyer's credit rating. The buyer repays the bank on the original due date." } },
            { '@type': 'Question', 'name': 'How is reverse factoring different from invoice factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': "In reverse factoring, the buyer initiates the program and the bank's credit decision is based on the buyer. In invoice factoring, the supplier initiates and the bank assesses the supplier's creditworthiness." } },
            { '@type': 'Question', 'name': "Does reverse factoring affect the buyer's balance sheet?", 'acceptedAnswer': { '@type': 'Answer', 'text': 'When structured correctly as off-balance-sheet approved payables finance, reverse factoring does not increase the buyer\'s reported debt. Strike SCF programs are structured to meet standard off-balance-sheet treatment.' } },
            { '@type': 'Question', 'name': 'How quickly can suppliers receive early payment on Strike SCF?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Once an invoice is approved by the anchor buyer on Strike SCF, suppliers can request early payment and receive funds within hours of bank approval.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.strikescf.com' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Programs', 'item': 'https://www.strikescf.com/programs' },
            { '@type': 'ListItem', 'position': 3, 'name': 'Reverse Factoring', 'item': 'https://www.strikescf.com/programs/reverse-factoring' },
          ],
        },
      ],
      '/programs/invoice-factoring': [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Invoice Factoring',
          'alternateName': 'Receivables Finance / Invoice Financing',
          'description': 'Suppliers sell approved receivables to a bank for immediate working capital. No separate credit application. Transparent discount rate. Funds within hours of approval.',
          'provider': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'serviceType': 'Supply Chain Finance',
          'areaServed': 'Worldwide',
          'url': 'https://www.strikescf.com/programs/invoice-factoring',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is invoice factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Invoice factoring is when a supplier sells its approved receivables to a bank or financier at a small discount in exchange for immediate cash. The bank then collects the full invoice amount from the buyer on the due date.' } },
            { '@type': 'Question', 'name': 'Do suppliers need a separate credit application to use Strike SCF invoice factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': "No. On Strike SCF, suppliers access invoice factoring through their anchor buyer's program. The credit decision is anchored to the buyer, so no separate supplier credit application is required." } },
            { '@type': 'Question', 'name': 'What is the difference between invoice factoring and reverse factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Invoice factoring is supplier-initiated — the supplier sells its receivables. Reverse factoring is buyer-initiated — the buyer sets up the program and suppliers opt in. Strike SCF supports both structures on one platform.' } },
            { '@type': 'Question', 'name': 'How fast is the funding on invoice factoring through Strike SCF?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Suppliers receive funds within hours of bank approval on Strike SCF. The AI co-pilot pre-screens invoices before submission, reducing back-and-forth and accelerating approval.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.strikescf.com' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Programs', 'item': 'https://www.strikescf.com/programs' },
            { '@type': 'ListItem', 'position': 3, 'name': 'Invoice Factoring', 'item': 'https://www.strikescf.com/programs/invoice-factoring' },
          ],
        },
      ],
      '/programs/po-financing': [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Purchase Order Financing',
          'alternateName': 'PO Finance / Pre-shipment Finance',
          'description': 'Finance supplier purchase orders at the point of commitment. Banks fund production before goods are delivered — protecting supplier cash flow at the source.',
          'provider': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'serviceType': 'Supply Chain Finance',
          'areaServed': 'Worldwide',
          'url': 'https://www.strikescf.com/programs/po-financing',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is purchase order financing?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Purchase order financing (PO financing) lets suppliers access working capital against a confirmed purchase order before goods are produced or shipped. The bank funds the production costs, and repayment happens when the buyer pays the invoice.' } },
            { '@type': 'Question', 'name': 'Who is purchase order financing for?', 'acceptedAnswer': { '@type': 'Answer', 'text': "PO financing is designed for suppliers who need cash to fulfill a large order but don't yet have an invoice to factor. It bridges the gap between order confirmation and delivery." } },
            { '@type': 'Question', 'name': "How does Strike SCF's PO financing differ from traditional PO finance?", 'acceptedAnswer': { '@type': 'Answer', 'text': 'Strike SCF connects the PO financing decision to live counterparty data — delivery records, payment history, and AI-assessed risk — so banks can make faster, more confident funding decisions without manual document assembly.' } },
            { '@type': 'Question', 'name': 'Is PO financing available without a pre-existing bank relationship on Strike SCF?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Strike SCF is an open marketplace. Suppliers can access PO financing from banks they have never worked with before, based on their PassportScore and verified trade data.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.strikescf.com' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Programs', 'item': 'https://www.strikescf.com/programs' },
            { '@type': 'ListItem', 'position': 3, 'name': 'Purchase Order Financing', 'item': 'https://www.strikescf.com/programs/po-financing' },
          ],
        },
      ],
      '/programs/dynamic-discounting': [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Dynamic Discounting',
          'alternateName': 'Early Payment Discounting / Self-funded SCF',
          'description': 'Anchor corporates deploy their own cash to pay suppliers early and capture the early payment discount as income. No bank required. Fully controlled by treasury.',
          'provider': { '@type': 'Organization', 'name': 'Strike SCF', 'url': 'https://www.strikescf.com' },
          'serviceType': 'Supply Chain Finance',
          'areaServed': 'Worldwide',
          'url': 'https://www.strikescf.com/programs/dynamic-discounting',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is dynamic discounting?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Dynamic discounting is when a buyer uses its own cash to pay suppliers early in exchange for a discount on the invoice. The earlier the payment, the larger the discount. It generates a return on the buyer's excess liquidity." } },
            { '@type': 'Question', 'name': 'How is dynamic discounting different from reverse factoring?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Dynamic discounting uses the buyer's own cash — no bank is involved. Reverse factoring uses a bank's capital. Dynamic discounting is ideal when the buyer has excess liquidity and wants to earn a return; reverse factoring is better when bank funding is preferred." } },
            { '@type': 'Question', 'name': 'What return can a buyer expect from dynamic discounting?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Returns vary by invoice size and payment timing, but dynamic discounting typically generates annualised returns well above money market rates. Strike SCF shows the projected return before the buyer approves each early payment.' } },
            { '@type': 'Question', 'name': 'Does the supplier have to participate in dynamic discounting?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Supplier participation is optional. On Strike SCF, suppliers see early payment offers and choose whether to accept. They are never obligated to take early payment.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.strikescf.com' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Programs', 'item': 'https://www.strikescf.com/programs' },
            { '@type': 'ListItem', 'position': 3, 'name': 'Dynamic Discounting', 'item': 'https://www.strikescf.com/programs/dynamic-discounting' },
          ],
        },
      ],
    };

    (ldMap[route] || []).forEach(ld => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-dld', 'true');
      s.text = JSON.stringify(ld);
      document.head.appendChild(s);
    });
  }, [route]);

  let Page = HomePage;
  if (route === '/about') Page = AboutPage;
  else if (route === '/banks') Page = BanksPage;
  else if (route === '/anchors') Page = AnchorsPage;
  else if (route === '/suppliers') Page = SuppliersPage;
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

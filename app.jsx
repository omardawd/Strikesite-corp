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
      '/': 'Strike SCF | Decisioning and Liquidity Orchestration for Resilient Supply Chains',
      '/solutions': 'Solutions | Strike SCF Supply Chain Finance Platform',
      '/banks': 'For Banks | Strike SCF Liquidity Orchestration',
      '/anchors': 'For Anchors | Strike SCF Supply Chain Finance',
      '/suppliers': 'For Suppliers | Strike SCF Early Payment and Invoice Finance',
      '/platform': 'Platform Architecture | Strike SCF',
      '/contact': 'Contact Strike SCF | Request a Pilot or Advisory Circle Invitation',
      '/programs/po-financing': 'PO Financing | Strike SCF',
      '/programs/invoice-factoring': 'Invoice Factoring | Strike SCF',
      '/programs/reverse-factoring': 'Reverse Factoring | Strike SCF',
      '/programs/dynamic-discounting': 'Dynamic Discounting | Strike SCF',
      '/redbook': 'The Strike RedBook | Defining the Operating Layer for Resilient Supply Chains',
    };
    const descriptions = {
      '/': 'Strike helps companies identify supplier risk, verify counterparties, and route liquidity to protect supply continuity under disruption.',
      '/solutions': 'Explore Strike SCF solutions for payables finance, receivables finance, and AI-powered supply chain decisioning.',
      '/banks': 'Strike gives banks a curated, risk-scored pipeline of supply chain finance opportunities with full audit trails.',
      '/anchors': 'Strike helps anchor corporates protect supplier continuity, optimize working capital, and route financing to critical suppliers.',
      '/suppliers': 'Turn verified supplier performance into faster access to capital. Strike connects suppliers to early payment and invoice finance programs.',
      '/platform': 'Explore the Strike SCF platform architecture. Multi-tenant, API-first, with AI-powered risk scoring and real-time disbursement.',
      '/contact': 'Talk to the Strike SCF team about your supplier network, your risk exposure, or joining the Strike RedBook Advisory Circle.',
      '/programs/po-financing': 'Finance supplier purchase orders at the point of commitment with Strike PO Financing.',
      '/programs/invoice-factoring': 'Turn approved receivables into immediate working capital with Strike Invoice Factoring.',
      '/programs/reverse-factoring': 'Buyer-led supply chain finance that uses anchor credit to fund your entire supplier base.',
      '/programs/dynamic-discounting': 'Deploy your own cash to fund suppliers and capture the early payment discount as income.',
      '/redbook': 'The Strike RedBook defines the decisioning and liquidity orchestration layer for resilient global supply chains.',
    };
    document.title = titles[route] || titles['/'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptions[route] || descriptions['/']);
  }, [route]);

  let Page = HomePage;
  if (route === '/solutions') Page = SolutionsPage;
  else if (route === '/banks') Page = BanksPage;
  else if (route === '/anchors') Page = AnchorsPage;
  else if (route === '/suppliers') Page = SuppliersPage;
  else if (route === '/platform') Page = PlatformPage;
  else if (route === '/contact') Page = ContactPage;
  else if (route === '/programs/po-financing') Page = POFinancingPage;
  else if (route === '/programs/invoice-factoring') Page = InvoiceFactoringPage;
  else if (route === '/programs/reverse-factoring') Page = ReverseFactoringPage;
  else if (route === '/programs/dynamic-discounting') Page = DynamicDiscountingPage;
  else if (route === '/redbook') Page = RedbookPage;

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

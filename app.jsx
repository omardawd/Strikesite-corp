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
    };
    const descriptions = {
      '/': 'Strike helps companies identify supplier risk, verify counterparties, and route liquidity to protect supply continuity under disruption.',
      '/solutions': 'Explore Strike SCF solutions for payables finance, receivables finance, and AI-powered supply chain decisioning.',
      '/banks': 'Strike gives banks a curated, risk-scored pipeline of supply chain finance opportunities with full audit trails.',
      '/anchors': 'Strike helps anchor corporates protect supplier continuity, optimize working capital, and route financing to critical suppliers.',
      '/suppliers': 'Turn verified supplier performance into faster access to capital. Strike connects suppliers to early payment and invoice finance programs.',
      '/platform': 'Explore the Strike SCF platform architecture. Multi-tenant, API-first, with AI-powered risk scoring and real-time disbursement.',
      '/contact': 'Talk to the Strike SCF team about your supplier network, your risk exposure, or joining the Strike RedBook Advisory Circle.',
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

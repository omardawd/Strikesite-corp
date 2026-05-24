/* App shell with history API router */

function App() {
  const getRoute = () => window.location.pathname || '/';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

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

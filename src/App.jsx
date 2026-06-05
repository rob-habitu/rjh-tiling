import Nav, { scrollToId } from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import FeatureRow from './sections/FeatureRow.jsx';
import ServicesSplit from './sections/ServicesSplit.jsx';
import StylesGrid from './sections/StylesGrid.jsx';
import DifferenceBand from './sections/DifferenceBand.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

import './styles/tokens.css';
import './styles/global.css';

export default function App() {
  return (
    <div className="rjh-type" style={{ background: 'var(--bone)' }}>
      <Nav />
      <Hero onQuote={() => scrollToId('contact')} />
      <FeatureRow />
      <ServicesSplit />
      <StylesGrid />
      <DifferenceBand onQuote={() => scrollToId('contact')} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

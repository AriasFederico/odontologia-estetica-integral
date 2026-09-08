import './App.scss';
import { Analytics } from '@vercel/analytics/next';

import {
  AboutSection,
  CoverageSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout/';
import { dataOdont } from './data/data';

function App() {
  const {
    header,
    hero,
    about,
    services,
    team,
    reviews,
    location,
    coverage,
    footer,
  } = dataOdont;
  return (
    <>
      <Header data={header} />
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServicesSection data={services} />
      {/* <CoverageSection data={coverage} /> */}
      <TeamSection data={team} />
      <ReviewsSection data={reviews} />
      <LocationSection data={location} />
      <Footer data={footer} />
      <Analytics />
    </>
  );
}

export default App;

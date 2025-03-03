import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import DidPrototype from './components/Prototypes/RoadmapPrototype1/RoadmapPrototype1';
import RoadmapPrototype2 from './components/Prototypes/RoadmapPrototype2/RoadmapPrototype2';
import RoadmapPrototype3 from './components/Prototypes/RoadmapPrototype3/RoadmapPrototype3';
import RoadmapPrototype4 from './components/Prototypes/RoadmapPrototype4/RoadmapPrototype4';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <DidPrototype />
      <RoadmapPrototype2 />
      <RoadmapPrototype3 />
      <RoadmapPrototype4 />
      <Footer />
    </>
  );
};

export default App;
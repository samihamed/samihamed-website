import React from 'react';
import './App.css';
import Body from './components/Body';
import Blog from './components/Blog';
import Tiles from './components/Tiles';
import Rainbow from './components/Rainbow';
import Projects from './components/Projects';
import Podcasts from './components/Podcasts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Body />
      <Blog />
      <Rainbow />
      <Podcasts />
      <Tiles />
      <Projects />
      <Footer />
    </div>
    </div>
  );
}

export default App;

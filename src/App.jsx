import React from 'react';
import Nv from './nv';
import Ho from './home';
import Sr from './service';
import Ab from './about';
import Page from "./pages.jsx";

import Bl from "./blog.jsx";
import Vd from "./vid.jsx";
import Li from "./list.jsx";
import Co from "./contact.jsx";
function App() {
  return (
    <>
      <Nv/>
      <Ho/>
      <Ab/>
      <Sr/>
        <Page/>
        <Bl/>
        <Vd/>
        <Li/>
        <Co/>
    </>

  );
}

export default App;




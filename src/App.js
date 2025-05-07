import React, { Suspense, lazy } from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Navbr from './Navbr';
import Home from './Home';
const About = lazy(() => import('./About'));
const FormP = lazy(() => import('./FormP'));

function App() {
  return (
    <>
      <Navbr />
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<FormP />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

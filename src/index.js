import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './app/routes/Home/Home';
import About from './app/routes/About/About';
import Projects from './app/routes/Projects/Projects';
import Learning from './app/routes/Learning/Learning';
import { BrowserRouter, Routes, Route } from 'react-router';
import reportWebVitals from './reportWebVitals';
import SelfReflections from './app/routes/Learning/Topics/SelfReflections';
import TechnicalStuff from './app/routes/Learning/Topics/TechnicalStuff';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="learning">
          <Route index element={<Learning />} />
          <Route path="self-reflections" element={<SelfReflections />} />
          <Route path="technical" element={<TechnicalStuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

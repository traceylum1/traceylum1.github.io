import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './app/routes/Home/Home';
import About from './app/routes/About/About';
import Coding from './app/routes/Coding/Coding';
import Blog from './app/routes/Blog/Blog';
import { BrowserRouter, Routes, Route } from 'react-router';
import reportWebVitals from './reportWebVitals';
import SelfReflections from './app/routes/Blog/Topics/SelfReflections';
import TechnicalStuff from './app/routes/Blog/Topics/TechnicalStuff';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="coding" element={<Coding />} />
        <Route path="blog">
          <Route index element={<Blog />} />
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

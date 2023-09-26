import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './page/home';
import { Header } from './components/header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

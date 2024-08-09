import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Projects from './pages/Projects/Projects';
import MiniBlog from './pages/MiniBlog/MiniBlog';
import Contact from './pages/Contact/Contact'; 
import './App.css';
import './transitions.css';

const AppWrapper: React.FC = () => {
  const location = useLocation();
  const isProjectRoute = location.pathname.includes('/projects');

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={isProjectRoute ? '' : 'page'} timeout={isProjectRoute ? 0 : 1000}>
        <Routes location={location}>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<Navigate to="/projects/meetly" />} />
          <Route path="/projects/:projectName" element={<Projects />} />
          <Route path="/miniblog" element={<MiniBlog />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppWrapper />
    </Router>
  );
}

export default App;

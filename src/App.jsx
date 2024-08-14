import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
import Forum from './pages/Forum';
import LearningResources from './pages/LearningResources';
import Profile from './pages/Profile';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>UCT Student Guide</h1>
        </header>
        <Navigation />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/resources" element={<LearningResources />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
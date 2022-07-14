import React from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div>
      <Header />
      <div className="container px-4">
        <Calculator />
      </div>
    </div>
  );
}

export default App;

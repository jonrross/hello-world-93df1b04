import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HelloWorld from '@/components/HelloWorld';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <HelloWorld />
      </div>
    </Router>
  );
}

export default App;
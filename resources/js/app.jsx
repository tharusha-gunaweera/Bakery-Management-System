
import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p>Hello</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

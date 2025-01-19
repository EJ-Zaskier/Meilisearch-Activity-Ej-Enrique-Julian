import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiar a 'react-dom/client' en lugar de 'react-dom'
import App from './App.tsx';

// Usar createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

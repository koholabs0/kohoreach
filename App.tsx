import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: '0 auto', maxWidth: 800, padding: '3rem 1rem' }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<PlaceholderPage title="KohoReach" description="Creator distribution marketplace MVP." />}
        />
        <Route
          path="/login"
          element={<PlaceholderPage title="Login" description="Authentication screens are being wired up." />}
        />
        <Route
          path="/register"
          element={<PlaceholderPage title="Register" description="Registration screens are being wired up." />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

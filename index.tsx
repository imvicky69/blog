
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Define process.env.API_KEY for local development if not set by environment
// In a real build, this would be set by the environment or build process.
// THIS IS FOR LOCAL DEVELOPMENT EASE ONLY and should not be in production bundles directly this way.
// The problem statement implies process.env.API_KEY is available.
if (!process.env.API_KEY) {
  // IMPORTANT: Replace "YOUR_GEMINI_API_KEY" with your actual Gemini API key for local testing.
  // Do NOT commit your actual API key to version control.
  // For the solution, it's assumed API_KEY is set in the execution environment.
  // This line is for making it runnable if not externally set.
  // process.env.API_KEY = "YOUR_GEMINI_API_KEY_HERE"; 
  console.warn("process.env.API_KEY is not set. API calls will likely fail. Set it in your environment or for local testing in index.tsx (not recommended for production).");
}


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

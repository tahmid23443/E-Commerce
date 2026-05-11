import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { apiservice } from './services/api.js'
import { ApiProvider } from '@reduxjs/toolkit/query/react';

createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiservice}>
    <App />
  </ApiProvider>
)
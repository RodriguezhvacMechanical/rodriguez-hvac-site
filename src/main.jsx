import React from 'react';
import { createRoot } from 'react-dom/client';
import { html } from './lib/h.js';
import { App } from './components/App.js';
import './index.css';

createRoot(document.getElementById('root')).render(html`<${App}/>`);

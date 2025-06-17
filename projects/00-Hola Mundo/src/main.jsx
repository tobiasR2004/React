import { StrictMode } from 'react'
import { App } from './App'
import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const root = createRoot(document.getElementById('root'))


root.render(
  <App />
)

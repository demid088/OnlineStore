// ============================= IMPORT

import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/index.css'

// import 'bootstrap'
import App from './App.jsx'

// ============================= JS

// ============================= Bootstrap

// ============================= React

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
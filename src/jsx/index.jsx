// ============================= IMPORT

import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../css/index.css'

import 'bootstrap'
import App from './App.jsx'

// ============================= JavaScript

// ============================= Bootstrap

// ============================= React

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
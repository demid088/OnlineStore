// ============================= IMPORT

import React from 'react'
import { createRoot } from 'react-dom/client'

import 'materialize-css/dist/css/materialize.min.css'
import '../css/index.css'

import 'materialize-css/dist/js/materialize.min.js'
import App from './App.jsx'

// ============================= JS

// ============================= Materialize

document.addEventListener('DOMContentLoaded', function() {
  const options = {
    constrainWidth: false,
    coverTrigger: false,
  }

  const elems = document.querySelectorAll('.dropdown-trigger')
  const instances = M.Dropdown.init(elems, options)

  console.log(instances)
});

// ============================= React

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
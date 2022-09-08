// ============================= IMPORT
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../css/index.css'

import 'bootstrap'
import Main from './Main.jsx'
import Layout from './Layout.jsx'
import Catalog from './Catalog.jsx'

// ============================= JavaScript

// ============================= Bootstrap

// ============================= React

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
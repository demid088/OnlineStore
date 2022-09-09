import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

import Breadcrumb from './Breadcrumb.jsx'
import Feature2 from './Feature2.jsx'

import '../css/Catalog.css'

//=========================================== DATABASE
import data from '../DATA.JSON'
const catalog = data.catalog
//=========================================== 

function Catalog() {
  return (
    <section>
      <Breadcrumb crumbs={['Home', 'Catalog', 'MEN']} />
      <h1>CATALOG.JSX</h1>
      <Feature2 />
    </section>
  );
}

export default Catalog;
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
    <>
      <Breadcrumb crumbs={['Home', 'Catalog', 'MEN']} />
      
      <section>
        <h1>CATALOG.JSX</h1>
      </section>

      <Feature2 />
    </>
  );
}

export default Catalog;
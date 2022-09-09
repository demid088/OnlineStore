import React from 'react'

import '../css/Breadcrumb.css'

function Breadcrumb(props) {

  const crumbs = Array.from(props.crumbs)

  function isLast(index) {
    return index === crumbs.length - 1
  }

  return (
    <section className='bg-light py-5'>
      <div className="container-xxl">
        <nav aria-label="breadcrumb mt-1">
          <ol className="breadcrumb text-uppercase fw-semibold mb-0">
            {
              crumbs.map((crumb, index) => {
                if (isLast(index)) {
                  return <li key={index} className="breadcrumb-item active" aria-current="page">{crumb}</li>
                }

                return (
                  <li key={index} className="breadcrumb-item">
                    <a href="#">{crumb}</a>
                  </li>
                )
              })
            }
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Breadcrumb;
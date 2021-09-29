import React from 'react'
import { Link } from 'react-router-dom'

import pages from '../data/pages'

const PageIndex = () => (
  <div>
    {pages.map(({ id, name, description }) => (
      <Link to={`/${id}`}>
        {/* big block turns into header on clickthrough */}
        <div>
          <h2>{name}</h2>
          <h4>{description}</h4>
        </div>
      </Link>
    ))}
  </div>
)

export default PageIndex

import React from 'react'
import { RouteComponentProps } from 'react-router'

const Page = ( {match}: RouteComponentProps ) => {
  return (
    <div>
      Page!!! the page is { match.params['page'] }
    </div>
  )
}

export default Page

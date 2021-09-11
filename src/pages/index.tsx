import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  page: string
}

const Page = ({ match }: RouteComponentProps<MatchParams>) : JSX.Element => (
  <div>
    Page!!! the page is
    {' '}
    { match.params.page }
  </div>
)

export default Page

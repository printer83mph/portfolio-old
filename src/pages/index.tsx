import React from 'react'
import ReactMarkdown from 'react-markdown'
import { RouteComponentProps, Redirect } from 'react-router-dom'

import usePageContents from '../hooks/usePageContents'
import { getPage } from '../data/pages'

interface MatchParams {
  page: string
}

const Page = ({ match }: RouteComponentProps<MatchParams>) : JSX.Element => {
  const page = getPage(match.params.page)

  if (page === null) {
    return (
      <Redirect to="/404" />
    )
  }

  const { contents, loading } = usePageContents(page.id)

  return (
    <div>
      <div>
        {/* header */}
        <h2>{page.name}</h2>
        <h4>{page.description}</h4>
      </div>
      {/* TODO: implement tailwind/typography prose thing */}
      { loading
        ? (<ReactMarkdown>{contents}</ReactMarkdown>)
        : null }
    </div>
  )
}

export default Page

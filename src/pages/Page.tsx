import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { RouteComponentProps, Redirect, Link } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'
import usePageContents from '../hooks/usePageContents'
import { getPage } from '../data/pages'
import PageBoxContents, { pageBoxClassName, pageBoxStyles } from '../components/PageBoxContent'

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

  const {
    name, description, id, color,
  } = page

  const { contents, loading } = usePageContents(id)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  return (
    <div
      className="fixed top-0 w-screen h-screen backdrop-blur-xl"
      style={{ backgroundColor: 'rgba(255,255,255,.5)' }}
    >
      <div className="container mx-auto px-3 md:px-0">
        <Link to="/">
          <div className="my-4 py-2 px-4 bg-white inline-block rounded-md shadow-sm">
            Back
          </div>
        </Link>
        <motion.div
          layoutId={`pagebox-${id}`}
          className={`${pageBoxClassName} mb-8`}
          style={{ ...(pageBoxStyles(page)) }}
        >
          <PageBoxContents page={page} />
        </motion.div>

        <AnimatePresence>
          {/* TODO: implement tailwind/typography prose thing */}
          { loading
            ? null
            : (
              <motion.div
                className="overflow-y-hidden"
                layoutId="page-content"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ReactMarkdown>{contents}</ReactMarkdown>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Page

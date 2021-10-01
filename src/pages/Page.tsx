import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { RouteComponentProps, Redirect, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

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
      className="fixed top-0 w-screen h-screen backdrop-blur-xl overflow-y-scroll"
      style={{ backgroundColor: 'rgba(255,255,255,.5)' }}
    >
      <div className="container mx-auto px-3 md:px-0">
        <Link to="/">
          <motion.div
            className="mb-4 mt-6 ml-3 inline-block text-2x font-semibold text-gray-400 hover:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiArrowLeft />
          </motion.div>
        </Link>
        <motion.div
          layoutId={`pagebox-${id}`}
          className={`${pageBoxClassName} mb-8`}
          style={{ ...(pageBoxStyles(page)) }}
        >
          <PageBoxContents page={page} />
        </motion.div>

        <AnimatePresence exitBeforeEnter>
          {/* TODO: implement tailwind/typography prose thing */}
          { loading
            ? null
            : (
              <motion.div
                className="overflow-y-hidden"
                layoutId="page-content"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <article className="prose max-w-none mb-[30vh]">
                  <ReactMarkdown>{contents}</ReactMarkdown>
                </article>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Page

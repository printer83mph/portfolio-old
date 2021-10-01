import { motion } from 'framer-motion'
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import pages from '../data/pages'
import PageBoxContents, { pageBoxClassName, pageBoxStyles } from './PageBoxContent'

type PageIndexProps = React.ComponentPropsWithoutRef<'div'>

const blankPage: Page = {
  name: ' ',
  description: ' ',
  color: 'white',
  id: 'idc',
}

const PageIndex = ({ className, ...rest }: PageIndexProps) => (
  <div className={`flex flex-col gap-5 ${className}`} {...rest}>
    {pages.map((page) => {
      const { id } = page
      return (
        <Switch key={id}>
          <Route path={`/${id}`}>
            <div className={pageBoxClassName}>
              <PageBoxContents page={blankPage} />
            </div>
          </Route>
          <Route>
            <motion.div
              layoutId={`pagebox-${id}`}
            >
              <Link
                to={`/${id}`}
                key={id}
                className="flex-grow"
              >
                {/* big block turns into header on clickthrough */}
                <div
                  className={`${pageBoxClassName}`}
                  style={{ ...(pageBoxStyles(page)) }}
                >
                  <PageBoxContents page={page} />
                </div>
              </Link>
            </motion.div>
          </Route>
        </Switch>
      )
    })}
  </div>
)

export default PageIndex

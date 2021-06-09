/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Contact from "./Contact"

const { contact } = Contact
interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Contact name={contact} />
    </>
  )
}

export default Layout

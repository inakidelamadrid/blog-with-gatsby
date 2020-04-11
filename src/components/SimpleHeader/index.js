import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TitleAndDescription from "../TitleAndDescription"

const SimpleHeader = ({ toggleSidebar }) => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => <TitleAndDescription data={data} />}
      />
      <button className="btn btn-primary pull-right" onClick={toggleSidebar}>
        Open sidebar
      </button>
    </>
  )
}
export default SimpleHeader

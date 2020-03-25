import React from "react"
import map from "lodash/map"
import { StaticQuery, graphql } from "gatsby"
import SimpleHeader from "../components/SimpleHeader"

const Layout = ({ data }) => {
  //console.log("%c GraphQL data", "font-weight: bold; color: blue;", data)
  const { edges } = data.allMarkdownRemark
  const posts = map(edges, 'node.frontmatter')

  //console.log("%c Posts", "font-weight: bold; color: blue;", posts)
  return (
    <div>
      <SimpleHeader />
      <ul>
        {map(posts, post => <li key={post.path}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout

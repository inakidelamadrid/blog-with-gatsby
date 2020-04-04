import React from "react"
import map from "lodash/map"
import { graphql} from "gatsby"
import Container, { PrimaryContent } from "../components/Container"
import IndexBlogEntry from "../components/IndexBlogEntry"
import SimpleHeader from "../components/SimpleHeader"
import Footer from "../components/Footer"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const posts = map(edges, "node.frontmatter")
  //console.log("%c Posts", "font-weight: bold; color: blue;", posts)
  return (
    <Container>
      <PrimaryContent>
        <SimpleHeader />
        {map(posts, post => (
          <IndexBlogEntry
            key={post.path}
            content={post.excerpt}
            datetime={post.date}
            linkTo={post.path}
            author="Ignacio De La Madrid"
            title={post.title}
            tags={[]}
          />
        ))}
      <Footer/>
      </PrimaryContent>
    </Container>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default Layout

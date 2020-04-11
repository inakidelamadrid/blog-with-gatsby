import React, { useState } from "react"
import map from "lodash/map"
import { graphql } from "gatsby"
import MainSidebar from "./MainSidebar"
import Container, {
  PrimaryContent,
  SecondaryContent,
} from "../components/Container"
import IndexBlogEntry from "../components/IndexBlogEntry"
import SimpleHeader from "../components/SimpleHeader"
import Footer from "../components/Footer"

const Layout = ({ data }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(isSidebarOpen => !isSidebarOpen)

  const { edges } = data.allMarkdownRemark
  const posts = map(edges, "node.frontmatter")

  return (
    <Container>
      <SecondaryContent open={isSidebarOpen}>
        <MainSidebar />
      </SecondaryContent>
      <PrimaryContent isSidebarOpen={isSidebarOpen}>
        <SimpleHeader toggleSidebar={toggleSidebar} />
        {map(posts, post => (
          <IndexBlogEntry
            key={post.path}
            content={post.excerpt}
            datetime={post.date}
            linkTo={post.path}
            author="Ignacio De La Madrid"
            title={post.title}
            tags={post.tags}
          />
        ))}
        <Footer />
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
            tags
          }
        }
      }
    }
  }
`

export default Layout

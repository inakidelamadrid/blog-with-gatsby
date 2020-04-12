import React from "react"
import { graphql, Link } from "gatsby"
import BlogEntry from "../components/BlogEntry"
import Footer from "../components/Footer"
import Container, { PrimaryContent } from "../components/Container"
import SimpleHeader from "../components/SimpleHeader"

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title, date, tags } = markdownRemark.frontmatter
  const { next, prev } = pageContext

  return (
    <Container>
      <PrimaryContent>
        <SimpleHeader />
        <BlogEntry
          datetime={date}
          title={title}
          description={markdownRemark.html}
          tags={tags}
        />
        {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
        {next && <Link to={next.frontmatter.path}>Next</Link>}
        <Footer />
      </PrimaryContent>
    </Container>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
export default Template

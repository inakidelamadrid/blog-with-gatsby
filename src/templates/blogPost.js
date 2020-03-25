import React from "react"
import { graphql } from "gatsby"
import BlogEntry from "../components/BlogEntry"
import Container, { PrimaryContent } from "../components/Container"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { title, date } = markdownRemark.frontmatter

  return (
    <Container>
      <PrimaryContent>
        <BlogEntry title={title} description={markdownRemark.html} />
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
      }
    }
  }
`
export default Template

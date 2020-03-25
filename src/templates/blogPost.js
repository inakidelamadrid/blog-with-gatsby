import React from "react"
import { graphql } from "gatsby"

const Template = ({data}) => {
  console.log("Data", data);
  return <div>Blog Post Here</div>
}

export const query = graphql`
  query($pathSlug:String!){
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}){
      html,
      frontmatter{
        title
        date
      }
    }
  }
`
export default Template

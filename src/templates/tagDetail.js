import React from "react"
import { Link } from "gatsby"

const TagDetailTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <div>
      <h1>{tagName}</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.frontmatter.title}</li>
        ))}
      </ul>
      <div><Link to="/tags">All Tags</Link></div>
    </div>
  )
}

export default TagDetailTemplate

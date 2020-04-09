import React from "react"

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
    </div>
  )
}

export default TagDetailTemplate

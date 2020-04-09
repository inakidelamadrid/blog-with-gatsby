import React from "react"
import { Link } from "gatsby"

const TagIndexTemplate = ({ pageContext }) => {
  const { tags } = pageContext

  return (
    <div>
      <ul>
        {tags.map((tagName, index) => (
          <li key={index}>
            <Link to={`/tags/${tagName}`}>{tagName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagIndexTemplate

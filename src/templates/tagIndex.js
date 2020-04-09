import React from "react"

const TagIndexTemplate = ({ pageContext }) => {
  const { tags } = pageContext

  return (
    <div>
      <ul>
        {tags.map((tagName, index) => (
          <li index={index}>{tagName}</li>
        ))}
      </ul>
    </div>
  )
}

export default TagIndexTemplate

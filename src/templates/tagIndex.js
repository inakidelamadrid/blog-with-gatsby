import React from "react"
import { Link } from "gatsby"
import LegoCSSContainer from "../components/LegoCSSContainer"
import List from "../components/base/List"

const TagIndexTemplate = ({ pageContext }) => {
  const { tags } = pageContext
  const links = tags.map(tagName => (
    <Link to={`/tags/${tagName}`}>{tagName}</Link>
  ))

  return (
    <LegoCSSContainer>
      <List elements={links} />
    </LegoCSSContainer>
  )
}

export default TagIndexTemplate

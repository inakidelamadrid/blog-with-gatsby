import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <h1 className="site-title">
      <a rel="home" title="Von" href="index.html">
        <FontAwesomeIcon icon={"coffee"} />
        {title}
      </a>
    </h1>
  )
}
export default TitleAndDescription

import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleAndDescription = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <h1 className="site-title" style={{ marginTop: "0px" }}>
      <Link to="/" title="Main page">
        <FontAwesomeIcon icon={"coffee"} style={{ marginRight: "20px" }} />
        {title}
      </Link>
    </h1>
  )
}
export default TitleAndDescription

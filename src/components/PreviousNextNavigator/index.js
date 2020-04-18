import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Previous = ({ path }) => (
  <Link to={path}>
    <FontAwesomeIcon icon={"arrow-left"} />
    Previous
  </Link>
)
const Next = ({ path }) => (
  <Link to={path}>
    Next
    <FontAwesomeIcon icon={"arrow-right"} />
  </Link>
)

const PreviousNextNavigator = ({ prev, next }) => {
  return (
    <div>
      {prev && <Previous path={prev.frontmatter.path} />}
      {next && <Next path={next.frontmatter.path} />}
    </div>
  )
}
export default PreviousNextNavigator

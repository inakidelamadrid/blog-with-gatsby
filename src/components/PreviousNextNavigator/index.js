import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import classNames from "classnames"

const Previous = ({ path }) => (
  <div className={styles.children}>
    <Link to={path}>
      <FontAwesomeIcon icon={"arrow-left"} />
      Previous
    </Link>
  </div>
)
const Next = ({ path }) => (
  <div className={classNames(styles.children, styles.textRight)}>
    <Link to={path}>
      Next
      <FontAwesomeIcon icon={"arrow-right"} />
    </Link>
  </div>
)

const PreviousNextNavigator = ({ prev, next }) => {
  return (
    <div className={styles.navigator}>
      {prev ? (
        <Previous path={prev.frontmatter.path} />
      ) : (
        <div className={styles.children}></div>
      )}
      {next && <Next path={next.frontmatter.path} />}
    </div>
  )
}
export default PreviousNextNavigator

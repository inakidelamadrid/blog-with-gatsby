import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

const Tag = ({tagName}) => (
  <Link
    to={`/tags/${tagName}`}
    className={classNames(styles.tag, "label", "label-primary")}
  >
    {tagName}
  </Link>
)

export default Tag
